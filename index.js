const {propertyIsEnumerable} = Object.prototype;

export default function getOwnEnumerableKeys(object) {
	return [
		...Object.keys(object),
		...Object.getOwnPropertySymbols(object)
			.filter(propertyIsEnumerable.bind(object)),
	];
}
