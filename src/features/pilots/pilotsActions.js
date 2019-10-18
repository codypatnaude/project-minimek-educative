import { PILOT_SELECT } from "./pilotConstants";

export function selectPilot(pilotID) {
  return {
    type: PILOT_SELECT,
    payload: { currentPilot: pilotID }
  };
}
