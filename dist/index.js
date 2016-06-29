'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockSubscription = exports.mockCollection = exports.mockTemplate = undefined;

var _sinon = require('sinon');

var mockTemplate = exports.mockTemplate = function mockTemplate(extend) {
  return {
    helpers: (0, _sinon.stub)(),
    onCreated: (0, _sinon.stub)(),
    onRendered: (0, _sinon.stub)(),
    onDestroyed: (0, _sinon.stub)(),
    events: (0, _sinon.stub)(),
    ...extend };
};

var mockCollection = exports.mockCollection = function mockCollection(extend) {
  return {
    findOne: (0, _sinon.stub)(),
    find: (0, _sinon.stub)(),
    fetch: (0, _sinon.stub)(),
    update: (0, _sinon.stub)(),
    insert: (0, _sinon.stub)(),
    remove: (0, _sinon.stub)(),
    simpleSchema: (0, _sinon.stub)(),
    ...extend };
};

var mockSubscription = exports.mockSubscription = function mockSubscription(extend) {
  return {
    ready: (0, _sinon.stub)(),
    stop: (0, _sinon.stub)(),
    ...extend };
};