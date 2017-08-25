class PraiseButton {
	add (count) {
		var n = 1 + Number(count);
		return n;
	}
}

export default class Thumb extends PraiseButton {
	constructor () {
		super();
		this.count = 0;
	}

	t_add (count) {
		var val = this.add(count);
		this.count = val;
		return this.count;
	}
}