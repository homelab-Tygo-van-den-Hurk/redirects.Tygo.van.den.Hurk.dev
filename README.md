# redirects.Tygo.van.den.Hurk.dev

This site is to prevent my links from being non-DRY. Now, if I want a link to
my personal GitHub, all I need to do is add a link to this site in it's place.
So for example: https://redirects.tygo.van.den.hurk.dev/github/personal. If
the URL it points to ever breaks only this site will need to be fixed. I've
already had to use this once, and knowing all the links that point to here
are now all also fixed is really nice. I personally also find these links way
easier to remember as they follow a very predictable structure.

> [!WARNING]
> When adding pages to this file, you sign a contract with yourself to always
> keep that key in, and not remove it, breaking those links in the process.
> There are [tools to deal with links you no longer want](#hiding-links), but
> you have to keep them in regardless unless you're 100% sure there is no
> instance in the wild.

## How to use

Please put the keys in in alphabetic order. These will correspond to the path
and redirection URL. So the object:

```Yaml
LeetCode: https://leetcode.com/u/USERNAME/
GitHub:
  Personal: https://github.com/USERNAME
  School: https://github.com/ORGANISATION
```

Will produce the following pages:

```Text
/leetcode         => https://leetcode.com/u/USERNAME/
/github/personal  => https://github.com/USERNAME
/github/school    => https://github.com/ORGANISATION
```

Object key is the way it's displayed on root nodes, the program automatically
transforms the strings into appropriate slugs. The transformation includes:

- replacing illegal characters with hyphens (`-`),
- transforming the string into lowercase,
- and finally, replacing neighboring hyphens with only one hyphen.

An object in an object will cause a subdirectory. So just like in the example
The `GitHub` object with entry `Personal` becomes `/GitHub/Personal`. 

## Hiding Links

Add a dot '.' before an entry to make it hidden. This way it will not be
discovered when it shows all possible children. This can be used for legacy
links that should keep working, but should be discovered and spread.

An example of this is when I made a typo in `LeetCode` instead writing:
`LeedCode`. Since I don't remember if this link exists in the wild, I have
to ensure it will continue to work. So I added the fixed spelling and
deprecated the typo version:

```Yaml
.LeedCode: /leetcode
LeetCode: ...
```
Now the leedCode version is hidden, but will redirect to the same page as the
`LeetCode` entry. Ensuring that no link was broken in the process.

## License

All files fall under a [license](./LICENSE). Any contributions will also agree
to fall under this license.
