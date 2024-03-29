import { createReducer } from "../../common/utils/reducerUtils";
import { DATA_LOADED } from "../../features/tools/toolConstants";
import orm from "../orm";

const initialState = orm.getEmptyState();

export function loadData(state, payload) {
  // Create a Redux-ORM session from our entities "database tables" object
  const session = orm.session(state);
  // Get a reference to the correct version of model classes for this Session
  const { Pilot, MechDesign, Mech } = session;

  const { pilots, designs, mechs } = payload;

  // Insert the data entries into the Session
  pilots.forEach(pilot => Pilot.parse(pilot));
  designs.forEach(design => MechDesign.parse(design));
  mechs.forEach(mech => Mech.parse(mech));

  // return a new version of the entities state object with the inserted entries
  return session.state;
}

export default createReducer(initialState, {
  [DATA_LOADED]: loadData
});
