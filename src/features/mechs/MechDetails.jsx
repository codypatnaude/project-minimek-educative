import React from "react";
import { Form } from "semantic-ui-react";
import orm from "../../app/orm";
import { connect } from "react-redux";

import { getWeightClass, selectCurrentMech } from "./mechSelectors";

const mapToState = state => {
  const session = orm.session(state.entities);
  const { Mech } = session;

  const currentMech = selectCurrentMech(state);

  let mech = { mechType: {} };
  if (Mech.idExists(currentMech)) {
    const mechModel = Mech.withId(currentMech);
    mech = { ...mechModel.ref };

    const { type } = mechModel;
    if (type) {
      mech.mechType = type;
    }
  }

  return { mech };
};

const MechDetails = ({ mech = {} }) => {
  const { id = "", type = "", mechType = {} } = mech;
  const { name = "", weight = "" } = mechType;

  const weightClass = getWeightClass(weight);

  return (
    <Form size="large">
      <Form.Field name="id" width={6}>
        <label>ID</label>
        <input placeholder="ID" value={id} />
      </Form.Field>
      <Form.Field name="name" width={16}>
        <label>Name</label>
        <input placeholder="Name" value={name} />
      </Form.Field>
      <Form.Field name="model" width={6}>
        <label>Model</label>
        <input placeholder="Model" value={type} />
      </Form.Field>
      <Form.Field name="weight" width={6}>
        <label>Weight</label>
        <input value={weight} />
      </Form.Field>
      <Form.Field name="class" width={6}>
        <label>Class</label>
        <input value={weightClass} />
      </Form.Field>
    </Form>
  );
};

export default connect(mapToState)(MechDetails);
