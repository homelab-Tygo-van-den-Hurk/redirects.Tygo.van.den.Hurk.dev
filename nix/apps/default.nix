{ ... }:
{
  imports = [ ./serve.nix ];
  perSystem =
    { config, ... }:
    {
      apps.default = config.apps.serve;
    };
}
