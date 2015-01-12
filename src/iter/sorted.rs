use std::cmp::Ordering;

pub trait SortedIterator<E>: Iterator<Item=E> + Sized where E: Ord {
    /**
Returns a `Vec` with the elements of the input iterator in sorted order.
    */
    fn sorted(self) -> Vec<E>;

    /**
Returns a `Vec` with the elements of the input iterator in sorted order, as specified by a comparison function.
    */
    fn sorted_by<F: FnMut(&E, &E) -> Ordering>(self, compare: F) -> Vec<E>;
}

impl<It, E> SortedIterator<E> for It where It: Iterator<Item=E>, E: Ord {
    fn sorted(self) -> Vec<E> {
        let mut v = self.collect::<Vec<_>>();
        v.sort();
        v
    }

    fn sorted_by<F: FnMut(&E, &E) -> Ordering>(self, compare: F) -> Vec<E> {
        let mut v = self.collect::<Vec<_>>();
        v.sort_by(compare);
        v
    }
}

#[test]
fn test_sorted() {
    let v = vec![1us, 3, 2, 0, 4];
    let s = v.into_iter().sorted();
    assert_eq!(s, vec![0us, 1, 2, 3, 4]);
}

#[test]
fn test_sorted_by() {
    let v = vec![1us, 3, 2, 0, 4];
    let s = v.into_iter().sorted_by(|a,b| (!*a).cmp(&!*b));
    assert_eq!(s, vec![4, 3, 2, 1, 0us]);
}
