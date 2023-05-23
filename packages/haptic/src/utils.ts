export const nope = (_pattern: VibratePattern | Iterable<number>): boolean => {
    return false;
};

export const detectVibrateHandler = (): typeof navigator.vibrate => {
    return navigator.vibrate ?? navigator.webkitVibrate ?? navigator.mozVibrate ?? navigator.msVibrate ?? nope;
};

export const scalePattern = (pattern: number[], duration: number): number[] => {
    return pattern.map((value) => value * duration);
};

export const fitPattern = (pattern: number[]): number[] => {
    const sum = pattern.reduce((a, b) => a + b, 0);
    const scale = 1 / sum;

    return pattern.map((value) => +(value * scale).toFixed(2));
};
