import { ListNode } from '../utils/index';

export default (l1: ListNode, l2: ListNode) => {
    const init = new ListNode(0);
    let ret = init;
    let carry = 0;
    while (l1 || l2 || carry) {
        const x = l1 === null ? 0 : l1.val;
        const y = l2 === null ? 0 : l2.val;
        let nextVal = x + y + carry;
        carry = nextVal / 10 | 0;
        nextVal = nextVal % 10;
        ret.next = new ListNode(nextVal);
        ret = ret.next;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    return init.next;
};
