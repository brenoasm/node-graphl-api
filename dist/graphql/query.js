"use strict";
exports.__esModule = true;
var comment_schema_1 = require("./resources/comment/comment.schema");
var post_schema_1 = require("./resources/post/post.schema");
var user_schema_1 = require("./resources/user/user.schema");
var Query = "\n  type Query {\n    " + comment_schema_1.commentQueries + "\n    " + post_schema_1.postQueries + "\n    " + user_schema_1.userQueries + "\n  }\n";
exports.Query = Query;
