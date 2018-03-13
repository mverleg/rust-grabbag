A random assortment of *things* that don't really demand their own package.

## Use

To use, include in the dependencies section of ``Cargo.toml``:

    grabbag = "0.1.*"

An overview of functionality is available [in the documentation](https://danielkeep.github.io/rust-grabbag/doc/grabbag/).

For example:

* ``collect!`` provides a way to initialise any container for which there is a FromIterator implementation, similar in use to ``vec!``.
* ``sequence!`` creates an iterator over a fixed sequence, such as ``sequence![ n: u64 = 2*(n as u64) + 1 ]`` for positive odd integers.
* ``group_by`` splits an iterator into a iterator of iterators, with elements grouped by a criterion.
* ``cartesian_product`` combines every item in the first iterator with every item in the second iterator, e.g. ``(1, 2, 3) x (4, 5) = ((1, 4), (1, 5), (2, 4), (2, 5), (3, 4), (3, 5))``.
* ``stride`` yields every ``n``th element, ``take_exactly`` takes ``n`` items, ``skip_exactly`` skips ``n`` items.
* ``intersperse`` it like join, inserting an element inbetween every two items.

And various other helpers [in the documentation](https://danielkeep.github.io/rust-grabbag/doc/grabbag/index.html).

## License

Licensed under either of

* MIT license (see [LICENSE](LICENSE) or <http://opensource.org/licenses/MIT>)
* Apache License, Version 2.0 (see [LICENSE](LICENSE) or <http://www.apache.org/licenses/LICENSE-2.0>)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you shall be dual licensed as above, without any additional terms or conditions.
