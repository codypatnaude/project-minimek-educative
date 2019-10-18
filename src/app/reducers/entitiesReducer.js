import { createReducer } from "../../common/utils/reducerUtils";
import { DATA_LOADED } from "../../features/tools/toolConstants";
import orm from "../orm";

const initialState = orm.getEmptyState();

export function loadData(state, payload) {
  const session = orm.session(state);
  const { Pilot } = session;

  const { pilots } = payload;
  pilots.forEach(pilot => Pilot.parse(pilot));

  return session.state;
}

export default createReducer(initialState, {
  [DATA_LOADED]: loadData
});
