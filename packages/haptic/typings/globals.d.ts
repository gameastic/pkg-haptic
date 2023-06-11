export declare global {
    interface Navigator {
        webkitVibrate: (pattern: VibratePattern | Iterable<number>) => boolean;
        mozVibrate: (pattern: VibratePattern | Iterable<number>) => boolean;
        msVibrate: (pattern: VibratePattern | Iterable<number>) => boolean;
    }
}