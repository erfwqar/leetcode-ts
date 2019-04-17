import fn from '../../src/0001-0020/0002.Add Two Numbers';
import { ListNode } from '../../src/utils/index';

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const l3 = new ListNode(2);

const l4 = new ListNode(9);
l4.next = new ListNode(9);
l4.next.next = new ListNode(9);

const result1 = new ListNode(7);
result1.next = new ListNode(0);
result1.next.next = new ListNode(8);

const result2 = new ListNode(1);
result2.next = new ListNode(0);
result2.next.next = new ListNode(0);
result2.next.next.next = new ListNode(1);

test('0002.Add Two Numbers', () => {
    expect(fn(l1, l2)).toEqual(result1);
    expect(fn(l3, l4)).toEqual(result2);
});
