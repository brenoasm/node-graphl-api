"use strict";
exports.__esModule = true;
var comment_schema_1 = require("./resources/comment/comment.schema");
var post_schema_1 = require("./resources/post/post.schema");
var user_schema_1 = require("./resources/user/user.schema");
var Mutation = "\n  type Mutation {\n    " + comment_schema_1.commentMutations + "\n    " + post_schema_1.postMutations + "\n    " + user_schema_1.userMutations + "\n  }\n";
exports.Mutation = Mutation;
