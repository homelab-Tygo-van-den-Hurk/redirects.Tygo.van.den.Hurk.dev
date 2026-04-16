_: {
  perSystem =
    { pkgs, ... }:
    {
      packages = {
        inherit (pkgs) nodejs;
      };
    };
}
