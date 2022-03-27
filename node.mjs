/** @file node.mjs
 * Module providing implementation of a tree node - creation, insertion and traversals over the node and its descendants. 
 * @date 12.03.2022
 * @author Klára Formánková (xforma14)
 */

import { EmptyTree } from "./emptyTree.mjs";

"use strict";

/**
 *  Node constructor - creates node with value and 2 empty subtrees 
 * @constructor
 * @param value Value The node value.
 * @param isLeftDescendant Boolean function determining which subtree the new value will be inserted into.
 */
export function Node(value, isLeftDescendant)
{
    this.value = value;
    this.lTree = new EmptyTree(isLeftDescendant);
    this.rTree = new EmptyTree(isLeftDescendant);
    this.isLeftDescendant = isLeftDescendant;
}

/**
 *  Function inserts new value in existing node's descendants
 * @param value New value to be inserted.
 * @return Node with the new value inserted.
 */
Node.prototype.insert = function (value)
{
    if(this.value === value) 
    {
        return this;
    }
    else if(this.isLeftDescendant(value, this.value)) {
        this.lTree = this.lTree.insert(value);
    }
    else {
        this.rTree = this.rTree.insert(value);
    }
    return this;
}

/**
 *  Recursive function to get values from the node and its descendants in inorder traversal
 * @return Array of values from inorder traversal
 */
Node.prototype.inorder = function ()
{
    let lArray = this.lTree.inorder();
    let rArray = this.rTree.inorder();
    return lArray.concat([this.value], rArray);
}

/**
 *  Recursive function to get values from the node and its descendants in preorder traversal
 * @return Array of values from preorder traversal
 */
Node.prototype.preorder = function () {
    let lArray = this.lTree.preorder();
    let rArray = this.rTree.preorder();
    return [this.value].concat(lArray, rArray);
}

/**
 *  Recursive function to get values from the node and its descendants in postorder traversal
 * @return Array of values from postorder traversal
 */
Node.prototype.postorder = function () {
    let lArray = this.lTree.postorder();
    let rArray = this.rTree.postorder();
    return lArray.concat(rArray, [this.value]);
} 
