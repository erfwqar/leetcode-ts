export default (s: string): number => {
    let ret = 0;
    const arr = s.split('');
    const hashMap = {};
    let l = 0;
    for (let r= 0; r < arr.length; r++) {
        let temp = hashMap[arr[r]];
        if (temp !== undefined) {
            l = Math.max(l, temp+1)
        }
        hashMap[arr[r]] = r;
        ret = Math.max(ret, r - l + 1);
    }
    return ret;
}
