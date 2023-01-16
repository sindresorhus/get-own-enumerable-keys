import {expectType} from 'tsd';
import getOwnEnumerableKeys from './index.js';

const symbol = Symbol('x');

const object = {
	foo: true,
	[symbol]: true,
};

expectType<Array<string | symbol>>(getOwnEnumerableKeys(object));
