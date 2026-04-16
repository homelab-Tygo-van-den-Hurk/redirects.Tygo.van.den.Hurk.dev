{ inputs, ... }:
{
  # When applied, adds the packages of this flake to the package set.
  flake.overlays.packages =
    _: previous:
    let
      inherit (previous.stdenv) system;
    in
    inputs.self.packages.${system};
}
