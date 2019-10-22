import { createReducer } from "../../common/utils/reducerUtils";
import { MECH_SELECTED } from "./mechsConstants";

const initialState = {
  currentMech: null
};

const selectMech = (state, payload) => {
  return { currentMech: payload.selectedMech };
};

export default createReducer(initialState, {
  [MECH_SELECTED]: selectMech
});
