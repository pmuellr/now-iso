now-iso - print the current date/time w/delta in ISO format
================================================================================

`now-iso` prints the current date/time in ISO format.  You can also pass a 
delta parameter, to print the date applying that delta

```console
$ now-iso
2020-02-26T19:06:20.764Z

$ now-iso -h
... prints help ...

$ now-iso -1h . 1h
2020-02-26T18:06:52.750Z
2020-02-26T19:06:52.750Z
2020-02-26T20:06:52.750Z
```


usage
================================================================================

```
now-iso
now-iso -h
now-iso delta ...
```

Prints the current date/time in ISO format.  Delta parameters may be
specified, where a delta is in the following form:

    "(number)s" - number seconds before/after the current date/time
    "(number)m" - number minutes before/after the current date/time
    "(number)h" - number hours before/after the current date/time
    "(number)d" - number days before/after the current date/time
    "."         - the current time

install
================================================================================

    npm install -g pmuellr/now-iso


license
================================================================================

This package is licensed under the MIT license.  See the [LICENSE.md][] file
for more information.


contributing
================================================================================

Awesome!  We're happy that you want to contribute.

Please read the [CONTRIBUTING.md][] file for more information.


[LICENSE.md]: LICENSE.md
[CONTRIBUTING.md]: CONTRIBUTING.md
[CHANGELOG.md]: CHANGELOG.md