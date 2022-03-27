/** @file
 *  Library creating a binary tree over any data type.
 *  node version: 16.14.0
 * @date 12.03.2022
 * @author Klára Formánková (xforma14)
 */

import { EmptyTree } from "./emptyTree.mjs"; 

"use strict";

/**
 * Tree constructor -  creates empty tree
 * @constructor
 * @param isLeftDescendant Boolean function with 2 params determining in which subtree the new value will be inserted (True - left, False - right).
 */
export function Tree(isLeftDescendant)
{
    this.node = new EmptyTree(isLeftDescendant);
}

/**
 * Function inserts new value in existing tree
 * @param value New value to be inserted.
 */
 Tree.prototype.insertValue = function (value)
{
    this.node = this.node.insert(value);   
}


/**
 *  Generator function to get tree values in preorder traversal
 * @return Iterator over tree values in preorder traversal
 */
 Tree.prototype.preorder = function* ()
{
    yield* this.node.preorder();
    
}

/**
 *  Generator function to get tree values in inorder traversal
 * @return Iterator over tree values in inorder traversal
 */
Tree.prototype.inorder = function* ()
{
    yield* this.node.inorder();
}

/**
 *  Generator function to get tree values in postorder traversal
 * @return Iterator over tree values in postorder traversal
 */
Tree.prototype.postorder = function* ()
{
    yield* this.node.postorder();
}


