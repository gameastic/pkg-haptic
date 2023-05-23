import { detectVibrateHandler, fitPattern, nope, scalePattern } from './utils';

class HapticInstance {
    private _vibrateHandle: typeof navigator.vibrate;

    public constructor() {
        this._vibrateHandle = detectVibrateHandler();
    }

    public suspend(): void {
        this._vibrateHandle = nope;
        this.stop();
    }

    public resume(): void {
        this._vibrateHandle = detectVibrateHandler();
    }

    public play(pattern: number[], duration: number): boolean | Error {
        return this._vibrate(pattern, duration);
    }

    public stop(): boolean | Error {
        return this._vibrate([1], 0);
    }

    private _vibrate(pattern: number[], duration: number): boolean {
        return this._vibrateHandle.call(navigator, scalePattern(fitPattern(pattern), duration));
    }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Haptic = new HapticInstance();
