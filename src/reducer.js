import { combineReducers } from "redux"

import todosReducer from "./features/todo/todoSlice"
import filtersReducer from "./features/filter/filtersSlice"

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer
})

export default rootReducer