// class ListNode {
//   constructor(val, next) {
//       this.val = val;
//       this.next = next || null;
//   }
// }

// function mergeSortedLists(list1, list2) {
//   const dummy = new ListNode(-1);
//   let current = dummy;

//   while (list1 && list2) {
//       if (list1.val < list2.val) {
//           current.next = list1;
//           list1 = list1.next;
//       } else {
//           current.next = list2;
//           list2 = list2.next;
//       }
//       current = current.next;
//   }

//   if (list1) {
//       current.next = list1;
//   }
//   if (list2) {
//       current.next = list2;
//   }

//   return dummy.next;
// }

// // შევქმენი ორი დასორტილი linked lists
// const list1 = new ListNode(1);
// list1.next = new ListNode(3);
// list1.next.next = new ListNode(5);

// const list2 = new ListNode(2);
// list2.next = new ListNode(4);
// list2.next.next = new ListNode(6);

// // დავმერჯერ ეს ორი list
// const mergedList = mergeSortedLists(list1, list2);


// let currentNode = mergedList;
// while (currentNode) {
//   console.log(currentNode.val);
//   currentNode = currentNode.next;
// }