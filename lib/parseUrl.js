"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseUrl;
var regex = /^(.+):([\w\.]+)$/;

function parseUrl(url) {
  var match = regex.exec(url);
  return !match ? null : {
    scheme: match[1],
    path: match[2]
  };
}