"use strict";
exports.__esModule = true;
var commentTypes = "\n\n  type Comment {\n    id: ID!\n    comment: String!\n    createdAt: String!\n    updatedAt: String!\n    user: User!\n    post: Post!\n  }\n\n  input CommentInput {\n    comment: String!\n    post: Int!\n    user: Int!\n  }\n\n";
exports.commentTypes = commentTypes;
var commentQueries = "\n\n  commentsByPost(post: ID!, first: Int, offset: Int): [ Comment! ]!\n\n";
exports.commentQueries = commentQueries;
var commentMutations = "\n\n  createComment(input: CommentInput!): Comment\n  updateComment(id: ID!, input: CommentInput!): Comment\n  deleteComment(id: ID!): Boolean\n\n";
exports.commentMutations = commentMutations;
