import { Haptic } from '@gameastic/haptic';

document.addEventListener(
    'DOMContentLoaded',
    () => {
        // Haptic.suspend();
        Haptic.resume();

        window.addEventListener(
            'click',
            () => {
                Haptic.play([1], 50);
            },
            true
        );
    },
    false
);
