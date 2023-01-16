import test from 'ava';
import getOwnEnumerableKeys from './index.js';

const symbol = Symbol('x');

const object = {
	foo: true,
	[symbol]: true,
};

test('main', t => {
	t.deepEqual(getOwnEnumerableKeys(object), ['foo', symbol]);
});
