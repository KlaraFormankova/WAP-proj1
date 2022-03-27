/** @file test1.mjs
 * @brief Script for testing tree.mjs library.
 * @date 12.03.2022
 * @author Klára Formánková (xforma14)
 */

import { Tree } from "./tree.mjs";

function areArraysEqual(a, b) {
    return a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

function assertArraysEqual(result, expected) {
	if(areArraysEqual(result, expected)){
		console.log('    \x1b[32m pass \x1b[0m');
	} 
	else {
		console.log('    \x1b[35m failed \x1b[0m');
		console.log('    expected: %s, get: %s', expected, result);
	}
}

function intTreeAndInorderTest() {
	console.log('Test 1 - int tree + inorder');

	let input = [1,2,3,4,5];
	let tree = new Tree((a,b) => a < b);
	input.forEach(i => tree.insertValue(i));

	// inorder traversal
	let inorderValues = [];
	for (let val of tree.inorder()) {
		inorderValues.push(val);
	}

	assertArraysEqual(inorderValues, [1,2,3,4,5]);
}

function intTreeAndPreorderPostorderTest() {
	console.log('Test 2 - int tree + preorder, postorder');

	let input = [234,54,79,2309,1,54];
	let tree = new Tree((a,b) => a < b);
	input.forEach(i => tree.insertValue(i));

	// traversals
	let preorderValues = [];
	let preIter = tree.preorder();
	let postorderValues = [];
	let postIter = tree.postorder();
	preorderValues.push(preIter.next().value);
	postorderValues.push(postIter.next().value);
	preorderValues.push(preIter.next().value);
	postorderValues.push(postIter.next().value);
	preorderValues.push(preIter.next().value);
	postorderValues.push(postIter.next().value);

	assertArraysEqual(preorderValues, [234,54,1]);
	assertArraysEqual(postorderValues, [1,79,54]);
}

function multipleIntTreesAndInorderTest() {
	console.log('Test 3 - multiple int trees + inorder');

	let input1 = [1,2,3,4,5];
	let tree1 = new Tree((a,b) => a < b);
	input1.forEach(i => tree1.insertValue(i));

	let input2 = [8,9,6,10,7,12];
	let tree2 = new Tree((a,b) => a < b);
	input2.forEach(i => tree2.insertValue(i));

	// tree1 inorder traversal
	let inorderValues = [];
	for (let val of tree1.inorder()) {
		inorderValues.push(val);
	}
	assertArraysEqual(inorderValues, [1,2,3,4,5]);

	// tree2 inorder traversal
	inorderValues = [];
	for (let val of tree2.inorder()) {
		inorderValues.push(val);
	}
	assertArraysEqual(inorderValues, [6,7,8,9,10,12]);
}

function charTreeAndPostorderTest() {
	console.log('Test 4 - char tree + postorder');

	let input = ['g','a','a','r','f','y'];
	let tree = new Tree((a,b) => a > b);
	input.forEach(i => tree.insertValue(i));

	// traversal
	let postorderValues = [];
	for (let val of tree.postorder()) {
		postorderValues.push(val);
	}
	assertArraysEqual(postorderValues, ['y','r','f','a','g']);
}

function multipleCharTreesAndInorderTest() {
	console.log('Test 5 - multiple char tree + inorder');

	let input1 = ['n','b','a','z','f','y'];
	let tree1 = new Tree((a,b) => a > b);
	input1.forEach(i => tree1.insertValue(i));

	let input2 = ['n','g','c','x','q'];
	let tree2 = new Tree((a,b) => a > b);
	input2.forEach(i => tree2.insertValue(i));

	// traversals
	let inorderValues = [];
	for (let val of tree1.inorder()) {
		inorderValues.push(val);
	}
	assertArraysEqual(inorderValues, ['z','y','n','f','b','a']);

	inorderValues = [];
	for (let val of tree2.inorder()) {
		inorderValues.push(val);
	}
	assertArraysEqual(inorderValues, ['x','q','n','g','c']);
}

function charTreeAndInorderPreorderPostorderTest() {
	console.log('Test 6 - char tree + inorder, preorder, postorder');

	let input = ['n','b','a','z','f','y','a','d','h'];
	let tree = new Tree((a,b) => a > b);
	input.forEach(i => tree.insertValue(i));

	// traversals
	let inorderValues = [];
	let inIter = tree.inorder();
	let preorderValues = [];
	let preIter = tree.preorder();
	let postorderValues = [];
	let postIter = tree.postorder();
	preorderValues.push(preIter.next().value);
	postorderValues.push(postIter.next().value);
	preorderValues.push(preIter.next().value);
	postorderValues.push(postIter.next().value);
	preorderValues.push(preIter.next().value);
	postorderValues.push(postIter.next().value);
	preorderValues.push(preIter.next().value);
	postorderValues.push(postIter.next().value);
	inorderValues.push(inIter.next().value);
	postorderValues.push(postIter.next().value);
	preorderValues.push(preIter.next().value);
	inorderValues.push(inIter.next().value);

	assertArraysEqual(inorderValues, ['z','y']);
	assertArraysEqual(preorderValues, ['n','z','y','b','f']);
	assertArraysEqual(postorderValues, ['y','z','h','d','f']);
}

function objectTreeAndPreorderTest() {
	console.log('Test 7 - object tree + preorder');

	function obj(name, value) {
		this.name = name;
		this.value = value;
	}

	let input = [new obj('dog', 4),new obj('cat', 4), new obj('mouse', 2), new obj('pig', 8), new obj('bird', 1)];
	let tree = new Tree((a,b) => a > b);
	input.forEach(i => tree.insertValue(i));

	// traversal
	let preorderValues = [];
	for (let val of tree.preorder()) {
		preorderValues.push(val);
	}
	assertArraysEqual(preorderValues, input);
}

function objectTreeAndMultipleInorderTest() {
	console.log('Test 8 - object tree + multiple inorder');

	function obj(name, value) {
		this.name = name;
		this.value = value;
	}

	let input = [new obj('dog', 4),new obj('cat', 4), new obj('bird', 1)];
	let tree = new Tree((a,b) => a > b);
	input.forEach(i => tree.insertValue(i));

	// traversals
	let inorderValues1 = [];
	let inIter1 = tree.inorder();
	let inorderValues2 = [];
	let inIter2 = tree.inorder();
	inorderValues1.push(inIter1.next().value);
	inorderValues2.push(inIter2.next().value);
	inorderValues1.push(inIter1.next().value);
	inorderValues2.push(inIter2.next().value);
	inorderValues1.push(inIter1.next().value);
	inorderValues2.push(inIter2.next().value);

	assertArraysEqual(inorderValues1, input);
	assertArraysEqual(inorderValues2, input);
}

function multipleObjectTreeAndPostorderTest() {
	console.log('Test 9 - multiple object tree + postorder');

	function obj(name) {
		this.name = name;
	}

	let blue = new obj('blue');
	let red = new obj('red');
	let green = new obj('green');
	let yellow = new obj('yellow');

	let input1 = [blue, red, green, yellow];
	let tree1 = new Tree((a,b) => a > b);
	input1.forEach(i => tree1.insertValue(i));

	let input2 = [green, red, yellow];
	let tree2 = new Tree((a,b) => a > b);
	input2.forEach(i => tree2.insertValue(i));

	// traversals
	let postorderValues1 = [];
	for (let val of tree1.postorder()) {
		postorderValues1.push(val);
	}
	let postorderValues2 = [];
	for (let val of tree2.postorder()) {
		postorderValues2.push(val);
	}
	let postorderValues3 = [];
	for (let val of tree2.postorder()) {
		postorderValues3.push(val);
	}
	assertArraysEqual(postorderValues1, [yellow, green, red, blue]);
	assertArraysEqual(postorderValues2, [yellow, red, green]);
	assertArraysEqual(postorderValues3, [yellow, red, green]);
}

function emptyTreeTest() {
	console.log('Test 10 - empty tree + inorder, preorder, postorder');

	let tree = new Tree((a,b) => a > b);

	// traversals
	let inorderValues = [];
	for (let val of tree.inorder()) {
		inorderValues.push(val);
	}
	let preorderValues = [];
	for (let val of tree.preorder()) {
		preorderValues.push(val);
	}
	let postorderValues = [];
	for (let val of tree.postorder()) {
		postorderValues.push(val);
	}
	assertArraysEqual(inorderValues, []);
	assertArraysEqual(preorderValues, []);
	assertArraysEqual(postorderValues, []);
}


// int tests
intTreeAndInorderTest();
intTreeAndPreorderPostorderTest();
multipleIntTreesAndInorderTest();

// char tests
charTreeAndPostorderTest();
multipleCharTreesAndInorderTest();
charTreeAndInorderPreorderPostorderTest();

// object tests
objectTreeAndPreorderTest();
objectTreeAndMultipleInorderTest();
multipleObjectTreeAndPostorderTest();

// empty tree test
emptyTreeTest();





// console.log("--- basic int test ---")
// let input1 = [1,2,3,4,5];
// let tree = new Tree((a,b) => a > b);
// input1.forEach(i => tree.insertValue(i));

// console.log("Mix 2 iterátorů")
// let pre1 = t.preorder()
// console.log(pre1.next().value);
// console.log(pre1.next().value);
// let pre2 = t.preorder()
// console.log(pre2.next().value);
// console.log(pre1.next().value);
// console.log(pre2.next().value);
// console.log(pre2.next().value);
// console.log(pre1.next().value);

// /// Ukázka využití iterátoru získaného z generátoru preorder()
// console.log("preorder")
// for (let n of t.preorder()) {
// 	console.log(n);
// }
// /// Ukázka využití iterátoru získaného z generátoru inorder()
// console.log("inorder")
// for (let n of t.inorder()) {
// 	console.log(n);
// }
// /// Ukázka využití iterátoru získaného z generátoru postorder()
// console.log("postorder")
// for (let n of t.postorder()) {
// 	console.log(n);
// }

