import { combineReducers } from "redux";
import tabsReducer from "../../features/tabs/tabsReducer";
import unitInfoReducer from "../../features/unitInfo/unitInfoReducer";
import entitiesReducer from "./entitiesReducer";
import pilotsReducer from "../../features/pilots/pilotsReducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  unitInfo: unitInfoReducer,
  tabs: tabsReducer,
  pilots: pilotsReducer
});

export default rootReducer;
