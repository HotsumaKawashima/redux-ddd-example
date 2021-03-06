// @flow

import { createActionReducer } from '~/lib/redux/middleware'

const { types, creators, reducer } = createActionReducer([
  'restoreTodosFilter',
  'setPriority',
  'setSortType',
  'setOrder'
], '/todosFilter/')

export { types, creators, reducer }
