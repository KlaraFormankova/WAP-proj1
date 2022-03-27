/** @file emptyTree.mjs
 * Module providing implementation of an empty tree - creation, insertion and traversals.
 * @date 12.03.2022
 * @author Klára Formánková (xforma14)
 */

import { Node } from "./node.mjs";

"use strict";

/**
 *  EmptyTree constructor
 * @constructor
 * @param isLeftDescendant Boolean function determining which subtree the new value will be inserted into.
 */
export function EmptyTree(isLeftDescendant)
{ 
    this.isLeftDescendant = isLeftDescendant;
}

/**
 *  Function turns EmptyTree into Node with given value 
 * @param value Value of created node.
 * @return New node with the value.
 */
EmptyTree.prototype.insert = function(value) //=> new Node(value, this.func);
{
    return new Node(value, this.isLeftDescendant);
}

/**
 *  Function returns empty array indicating there are no values in empty tree
 * @return Empty array
 */
EmptyTree.prototype.inorder = () => [];

/**
 *  Function returns empty array indicating there are no values in empty tree
 * @return Empty array
 */
EmptyTree.prototype.preorder = () => [];

/**
 *  Function returns empty array indicating there are no values in empty tree
 * @return Empty array
 */
EmptyTree.prototype.postorder = () => [];
