import fn from '../../src/0001-0020/0003.Longest Substring Without Repeating Characters';

const obj = {
    '': 0,
    abcabcbb: 3,
    bbbbb: 1,
    pwwkew: 3
};

test('0003.Longest Substring Without Repeating Characters', () => {
    for (let k in obj) {
        expect(fn(k)).toBe(obj[k]);
    }
});
