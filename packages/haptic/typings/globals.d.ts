/* eslint-disable @typescript-eslint/naming-convention */

interface Navigator {
    webkitVibrate: (pattern: VibratePattern | Iterable<number>) => boolean;
    mozVibrate: (pattern: VibratePattern | Iterable<number>) => boolean;
    msVibrate: (pattern: VibratePattern | Iterable<number>) => boolean;
}
