import { MECH_SELECTED } from "./mechsConstants";

export function selectMech(mechID) {
  return { type: MECH_SELECTED, payload: { selectedMech: mechID } };
}
