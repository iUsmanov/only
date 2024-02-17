export const halfReverse = (array: number[], number: number) => {
	const indexOfNumber = array.findIndex((item) => {
		return item === number;
	});

	const rightArray = array.slice(indexOfNumber);
	const leftArray = array.slice(0, indexOfNumber);

	return rightArray.concat(leftArray);
};
