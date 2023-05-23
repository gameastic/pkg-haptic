import { Haptic } from '../src/index';

test('haptic', () => {
    expect(Haptic).toBeDefined();
    expect(Haptic).toHaveProperty('resume');
    expect(Haptic).toHaveProperty('suspend');
    expect(Haptic).toHaveProperty('play');
    expect(Haptic).toHaveProperty('stop');
});
