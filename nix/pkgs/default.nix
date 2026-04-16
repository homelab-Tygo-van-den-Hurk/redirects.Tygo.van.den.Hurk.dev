{ ... }:
{
  imports = [
    ./nodejs.nix
    ./site.nix
  ];

  perSystem =
    { config, ... }:
    {
      packages.default = config.packages.site;
    };
}
