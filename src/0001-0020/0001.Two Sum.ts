export default (nums: number[], target: number): number[] => {
    const hashMap: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        const n2 = nums[i];
        const n1 = target - n2;
        if (hashMap[n1] !== undefined) {
            return [hashMap[n1], i];
        }
        hashMap[n2] = i;
    }
}

