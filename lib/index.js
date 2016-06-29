import { stub } from 'sinon';

export const mockTemplate = extend => ({
  helpers: stub(),
  onCreated: stub(),
  onRendered: stub(),
  onDestroyed: stub(),
  events: stub(),
  ...extend,
});

export const mockCollection = extend => ({
  findOne: stub(),
  find: stub(),
  fetch: stub(),
  update: stub(),
  insert: stub(),
  remove: stub(),
  simpleSchema: stub(),
  ...extend,
});

export mockSubscription = extend => ({
  ready: stub(),
  stop: stub(),
  ...extend,
});
