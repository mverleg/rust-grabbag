var searchIndex = {};
searchIndex['grabbag'] = {"items":[[0,"","grabbag",""],[0,"iter","",""],[0,"accumulate","grabbag::iter",""],[3,"Accumulate","grabbag::iter::accumulate",""],[8,"AccumulateIterator","",""],[11,"accumulate","","Creates an iterator that scans from left to right over the input sequence, returning the accumulated result of calling `f` on the entire sequence up to that point.",0],[11,"unwrap","","Unwraps the iterator, returning the underlying iterator.",1],[6,"Item","",""],[11,"next","","",1],[0,"cartesian_product","grabbag::iter",""],[3,"CartesianProduct","grabbag::iter::cartesian_product",""],[8,"CartesianProductIterator","",""],[11,"cartesian_product","","Creates an iterator that yields the cartesian product of two input iterators.",2],[11,"fmt","","",3],[11,"clone","","",3],[6,"Item","",""],[11,"next","","",3],[11,"size_hint","","",3],[0,"clone_each","grabbag::iter",""],[3,"CloneEach","grabbag::iter::clone_each",""],[8,"CloneEachIterator","",""],[11,"clone_each","","Creates an iterator which will clone each element of the input iterator.",4],[11,"fmt","","",5],[11,"clone","","",5],[11,"unwrap","","Unwraps the iterator, returning the underlying iterator.",5],[6,"Item","",""],[11,"next","","",5],[11,"size_hint","","",5],[11,"next_back","","",5],[11,"indexable","","",5],[11,"idx","","",5],[0,"group_by","grabbag::iter",""],[3,"GroupBy","grabbag::iter::group_by",""],[3,"GroupByShared","",""],[3,"Group","",""],[8,"GroupByIterator","",""],[11,"group_by","","Creates an iterator that yields a succession of `(group, sub_iterator)` pairs.  Each `sub_iterator` yields successive elements of the input iterator that have the same `group`.  An element's `group` is computed using the `f` closure.",6],[6,"Item","",""],[11,"next","","",7],[11,"size_hint","","",7],[6,"Item","",""],[11,"next","","",8],[11,"size_hint","","",8],[0,"indexed","grabbag::iter",""],[3,"Indexed","grabbag::iter::indexed",""],[3,"IndexedView","",""],[8,"IndexedIterator","",""],[11,"indexed","","Creates an iterator which uses `indices` as an indexer to the subject iterator.",9],[11,"indexed_view","","Creates an iterator which uses `indices` as an indexer to the subject iterator, where the subject is behind a mutable reference.",9],[11,"fmt","","",10],[11,"clone","","",10],[11,"unwrap","","Unwraps the iterator, returning the underlying indexed and indexer iterators.",10],[6,"Item","",""],[11,"next","","",10],[11,"next_back","","",10],[11,"indexable","","",10],[11,"idx","","",10],[11,"fmt","","",11],[11,"unwrap","","Unwraps the iterator, returning the underlying indexed and indexer iterators.",11],[6,"Item","",""],[11,"next","","",11],[11,"next_back","","",11],[11,"indexable","","",11],[11,"idx","","",11],[0,"fold","grabbag::iter",""],[8,"FoldlIterator","grabbag::iter::fold",""],[11,"foldl","","Folds the elements of the iterator together, from left to right, using `f`.",12],[11,"foldl_map","","Folds the elements of the iterator together, from left to right, using `f.",12],[8,"FoldrIterator","",""],[11,"foldr","","Folds the elements of the iterator together, from right to left, using `f`.",13],[0,"intersperse","grabbag::iter",""],[3,"Intersperse","grabbag::iter::intersperse",""],[8,"IntersperseIterator","",""],[10,"intersperse","","Creates an iterator that yields `inject` between each element of the input iterator.  `inject` will not appear as the first or last element of the resulting iterator.",14],[11,"fmt","","",15],[11,"clone","","",15],[6,"Item","",""],[11,"next","","",15],[11,"size_hint","","",15],[11,"indexable","","",15],[11,"idx","","",15],[0,"keep_some","grabbag::iter",""],[3,"KeepSome","grabbag::iter::keep_some",""],[8,"KeepSomeIterator","",""],[10,"keep_some","","Creates an iterator that, given a sequence of `Option<E>` values, unwraps all `Some(E)`s, and discards all `None`s.",16],[11,"fmt","","",17],[11,"clone","","",17],[11,"unwrap","","Unwraps the iterator, returning the underlying iterator.",17],[6,"Item","",""],[11,"next","","",17],[11,"size_hint","","",17],[11,"next_back","","",17],[0,"pad_tail_to","grabbag::iter",""],[3,"PadTailTo","grabbag::iter::pad_tail_to",""],[8,"PadTailToIterator","",""],[11,"pad_tail_to","","Creates an iterator that ensures there are at least `n` elements in a sequence.  If the input iterator is too short, the difference is made up with a filler value.",18],[11,"unwrap","","Unwraps the iterator, returning the underlying iterator and filler closure.",19],[6,"Item","",""],[11,"next","","",19],[11,"next_back","","",19],[11,"indexable","","",19],[11,"idx","","",19],[0,"pacing_walk","grabbag::iter",""],[3,"PacingWalk","grabbag::iter::pacing_walk",""],[8,"PacingWalkIterator","",""],[10,"pacing_walk","","Creates an iterator that performs a back-and-forth walk of the input iterator.",20],[11,"fmt","","",21],[11,"clone","","",21],[11,"unwrap","","Unwraps the iterator, returning the underlying iterator.",21],[6,"Item","",""],[11,"next","","",21],[11,"size_hint","","",21],[0,"round_robin","grabbag::iter",""],[3,"RoundRobin","grabbag::iter::round_robin",""],[3,"RoundRobinLongest","",""],[8,"RoundRobinIterator","",""],[11,"round_robin","","Creates an iterator that alternates between yielding elements of the two input iterators.  It stops as soon as either iterator is exhausted.",22],[11,"round_robin_longest","","Creates an iterator that alternates between yielding elements of the two input iterators.  If one iterator stops before the other, it is simply skipped.",22],[11,"fmt","","",23],[11,"clone","","",23],[11,"unwrap","","Unwraps the iterator, returning the underlying iterators.",23],[6,"Item","",""],[11,"next","","",23],[11,"size_hint","","",23],[11,"fmt","","",24],[11,"clone","","",24],[11,"unwrap","","Unwraps the iterator, returning the underlying iterators.",24],[6,"Item","",""],[11,"next","","",24],[11,"size_hint","","",24],[0,"skip_exactly","grabbag::iter",""],[8,"SkipExactlyIterator","grabbag::iter::skip_exactly",""],[11,"skip_exactly","","Skips *exactly* `n` elements from the iterator.",25],[0,"sorted","grabbag::iter",""],[8,"SortedIterator","grabbag::iter::sorted",""],[10,"sorted","","Returns a `Vec` with the elements of the input iterator in sorted order.",26],[10,"sorted_by","","Returns a `Vec` with the elements of the input iterator in sorted order, as specified by a comparison function.",26],[0,"stride","grabbag::iter",""],[3,"Stride","grabbag::iter::stride",""],[8,"StrideIterator","",""],[11,"stride","","Creates an iterator which yields every `n`th element of the input iterator, including the first.",27],[11,"fmt","","",28],[11,"clone","","",28],[11,"unwrap","","Unwraps the iterator, returning the underlying iterator.",28],[6,"Item","",""],[11,"next","","",28],[11,"size_hint","","",28],[11,"indexable","","",28],[11,"idx","","",28],[0,"take_exactly","grabbag::iter",""],[3,"TakeExactly","grabbag::iter::take_exactly",""],[8,"TakeExactlyIterator","",""],[11,"take_exactly","","Creates an iterator that yields *exactly* `n` elements from the subject iterator.",29],[11,"fmt","","",30],[11,"clone","","",30],[11,"unwrap","","Unwraps the iterator, returning the underlying iterator.",30],[6,"Item","",""],[11,"next","","",30],[11,"size_hint","","",30],[11,"indexable","","",30],[11,"idx","","",30],[0,"tee","grabbag::iter",""],[3,"Tee","grabbag::iter::tee",""],[3,"TeeState","",""],[8,"TeeIterator","",""],[11,"tee","","Creates a pair of iterators that will yield the same sequence of values.",31],[6,"Item","",""],[11,"next","","",32],[11,"size_hint","","",32],[0,"zip_longest","grabbag::iter",""],[3,"ZipLongest","grabbag::iter::zip_longest",""],[8,"ZipLongestIterator","",""],[11,"zip_longest","","Creates an iterator which yields elements from both input iterators in lockstep.  If one iterator ends before the other, the elements from that iterator will be replaced with `None`.",33],[11,"fmt","","",34],[11,"clone","","",34],[11,"unwrap","","Unwraps the iterator, returning the underlying iterators.",34],[6,"Item","",""],[11,"next","","",34],[11,"size_hint","","",34],[0,"prelude","grabbag::iter",""]],"paths":[[8,"AccumulateIterator"],[3,"Accumulate"],[8,"CartesianProductIterator"],[3,"CartesianProduct"],[8,"CloneEachIterator"],[3,"CloneEach"],[8,"GroupByIterator"],[3,"GroupBy"],[3,"Group"],[8,"IndexedIterator"],[3,"Indexed"],[3,"IndexedView"],[8,"FoldlIterator"],[8,"FoldrIterator"],[8,"IntersperseIterator"],[3,"Intersperse"],[8,"KeepSomeIterator"],[3,"KeepSome"],[8,"PadTailToIterator"],[3,"PadTailTo"],[8,"PacingWalkIterator"],[3,"PacingWalk"],[8,"RoundRobinIterator"],[3,"RoundRobin"],[3,"RoundRobinLongest"],[8,"SkipExactlyIterator"],[8,"SortedIterator"],[8,"StrideIterator"],[3,"Stride"],[8,"TakeExactlyIterator"],[3,"TakeExactly"],[8,"TeeIterator"],[3,"Tee"],[8,"ZipLongestIterator"],[3,"ZipLongest"]]};
searchIndex['grabbag_macros'] = {"items":[[0,"","grabbag_macros",""],[14,"count_exprs!","","Counts the number of comma-delimited expressions passed to it.  The result is a compile-time evaluable expression, suitable for use as a static array size, or the value of a `const`."],[14,"collect!","","This macro provides a way to initialise any container for which there is a FromIterator implementation.  It allows for both sequence and map syntax to be used, as well as inline type ascription for the result."],[14,"sequence!","","Expands to an expression implementing the `Iterator` trait, which yields successive\nelements of the given closed-form sequence."],[14,"recurrence!","","Expands to an expression implementing the `Iterator` trait, which yields successive\nelements of the given recurrence relationship."]],"paths":[]};

initSearch(searchIndex);