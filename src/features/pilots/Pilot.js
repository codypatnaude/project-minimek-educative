import { Model } from "redux-orm";

export default class Pilot extends Model {
  static modelName = "Pilot";

  static parse(pilotData) {
    return this.create(pilotData);
  }
}
