_: {
  perSystem =
    { pkgs, self', ... }:
    {
      apps.serve = with pkgs; {
        type = "app";
        inherit (self'.packages.site) meta;
        program = writeShellApplication {
          name = "serve";
          runtimeInputs = [ python3 ];
          text = with self'.packages; ''
            python -m http.server -d ${site}/share/site "$@"
          '';
        };
      };
    };
}
