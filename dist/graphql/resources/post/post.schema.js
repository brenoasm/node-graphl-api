"use strict";
exports.__esModule = true;
var postTypes = "\n\n  type Post {\n    id: ID!\n    title: String!\n    content: String!\n    photo: String!\n    createdAt: String!\n    updatedAt: String!\n    author: User!\n    comments: [ Comment! ]!\n  }\n\n  input PostInput {\n    title: String!\n    content: String!\n    photo: String!\n    author: Int!\n  }\n\n";
exports.postTypes = postTypes;
var postQueries = "\n\n  posts(first: Int, offset: Int): [ Post! ]!\n  post(id: ID!): Post\n\n";
exports.postQueries = postQueries;
var postMutations = "\n  createPost(input: PostInput!): Post\n  updatedPost(id: ID!, input: PostInput!): Post\n  deletePost(id: ID!): Boolean\n";
exports.postMutations = postMutations;
