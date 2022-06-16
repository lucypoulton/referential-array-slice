/**
 * Iterates over an array between two indices without cloning.
 */
export default class Slice<T> implements Iterable<T>, Iterator<T> {

	private index: number;

	constructor(private readonly parent: T[], private readonly start: number, private readonly end: number = 0) {
		this.index = start;
		this.end = Math.min(this.end, parent.length - 1)
	}

	[Symbol.iterator](): Iterator<T> {
		return this
	}

	next(): IteratorResult<T> {
		return {
			value: this.parent[this.index],
			done: this.index++ > this.end
		}
	}

}
