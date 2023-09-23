export const debounce = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
	let timeout: ReturnType<typeof setTimeout> | null = null;

	const debounced = (...args: Parameters<F>) => {
		if (timeout !== null) {
			clearTimeout(timeout);
			timeout = null;
		}
		timeout = setTimeout(() => func(...args), waitFor);
	};

	return debounced as (...args: Parameters<F>) => ReturnType<F>;
};

export const throttle = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
	const now = () => new Date().getTime();
	const resetStartTime = () => (startTime = now());
	let timeout: number;
	let startTime: number = now() - waitFor;

	return (...args: Parameters<F>): Promise<ReturnType<F>> =>
		new Promise((resolve) => {
			const timeLeft = startTime + waitFor - now();
			if (timeout) {
				clearTimeout(timeout);
			}
			if (startTime + waitFor <= now()) {
				resetStartTime();
				resolve(func(...args));
			} else {
				timeout = setTimeout(() => {
					resetStartTime();
					resolve(func(...args));
				}, timeLeft);
			}
		});
};
