import { ORM } from "redux-orm";
import Pilot from "../features/pilots/Pilot";
import Mech from "../features/mechs/Mech";
import MechDesign from "../features/mechs/MechDesign";

const orm = new ORM();
orm.register(Pilot, Mech, MechDesign);

export default orm;
