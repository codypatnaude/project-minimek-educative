import { createReducer } from "../../common/utils/reducerUtils";

import { PILOT_SELECT } from "./pilotConstants";

const initialState = {
  currentPilot: null
};

export function selectPilot(state, payload) {
  const prevSelectedPilot = state.currentPilot;
  const newSelectedPilot = payload.currentPilot;

  const isSamePilot = prevSelectedPilot === newSelectedPilot;

  return {
    currentPilot: isSamePilot ? null : newSelectedPilot
  };
}

export default createReducer(initialState, {
  [PILOT_SELECT]: selectPilot
});
