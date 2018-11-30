"use strict";
exports.__esModule = true;
var userTypes = "\n\n  # User definition type\n  type User {\n    id: ID!\n    name: String!\n    email: String!\n    photo: String\n    createdAt: String!\n    updatedAt: String!\n  }\n\n  input UserCreateInput {\n    name: String!\n    email: String!\n    password: String!\n  }\n\n  input UserUpdateInput {\n    name: String!\n    email: String!\n    photo: String!\n  }\n\n  input UserUpdatePasswordInput {\n    password: String!\n  }\n\n";
exports.userTypes = userTypes;
var userQueries = "\n\n    users(first: Int, offset: Int): [ User! ]!\n    user(id: ID!): User\n\n";
exports.userQueries = userQueries;
var userMutations = "\n\n  createUser(input: UserCreateInput!): User\n  updateUser(id: ID!, input: UserUpdateInput!): User\n  updateUserPassword(id: ID!, input: UserUpdatePasswordInput!): Boolean\n  deleteUser(id: ID!): Boolean\n\n";
exports.userMutations = userMutations;
