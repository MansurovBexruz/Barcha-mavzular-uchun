export function sleep(second = 2) {
	const ms = second * 1000;
	return new Promise((resolve) => setTimeout(resolve, ms));
}
