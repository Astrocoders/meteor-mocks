'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockSubscription = exports.mockCollection = exports.mockTemplate = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _sinon = require('sinon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockTemplate = exports.mockTemplate = function mockTemplate(extend) {
  return (0, _extends3.default)({
    helpers: (0, _sinon.stub)(),
    onCreated: (0, _sinon.stub)(),
    onRendered: (0, _sinon.stub)(),
    onDestroyed: (0, _sinon.stub)(),
    events: (0, _sinon.stub)()
  }, extend);
};

var mockCollection = exports.mockCollection = function mockCollection(extend) {
  return (0, _extends3.default)({
    findOne: (0, _sinon.stub)(),
    find: (0, _sinon.stub)(),
    fetch: (0, _sinon.stub)(),
    update: (0, _sinon.stub)(),
    insert: (0, _sinon.stub)(),
    remove: (0, _sinon.stub)(),
    simpleSchema: (0, _sinon.stub)()
  }, extend);
};

var mockSubscription = exports.mockSubscription = function mockSubscription(extend) {
  return (0, _extends3.default)({
    ready: (0, _sinon.stub)(),
    stop: (0, _sinon.stub)()
  }, extend);
};