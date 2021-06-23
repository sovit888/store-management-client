import { combineReducers } from "redux";
import profileReducer from "./profile/reducer";
import usersReducer from "./users/reducer";
import groupsReducer from "./group/reducer";
import brandsReducer from "./brand/reducer";
import categorysReducer from "./category/reducer";
import storesReducer from "./stores/reducer";
import attributesReducer from "./attribute/reducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  users: usersReducer,
  groups: groupsReducer,
  brands: brandsReducer,
  categorys: categorysReducer,
  stores: storesReducer,
  attributes: attributesReducer,
});
export default rootReducer;
