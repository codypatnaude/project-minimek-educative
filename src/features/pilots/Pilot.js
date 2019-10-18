import { Model, attr, fk } from "redux-orm";

export default class Pilot extends Model {
  static modelName = "Pilot";

  static fields = {
    id: attr(),
    name: attr(),
    rank: attr(),
    gunnery: attr(),
    piloting: attr(),
    age: attr(),
    mech: fk("Mech")
  };
  static parse(pilotData) {
    return this.create(pilotData);
  }
}
