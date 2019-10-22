import React from "react";
import { Table } from "semantic-ui-react";
import _ from "lodash";
import { getWeightClass, selectCurrentMech } from "../mechSelectors";
import orm from "../../../app/orm";
import { selectMech } from "../mechsActions";
import { connect } from "react-redux";

const mapToState = (state, ownProps) => {
  const session = orm.session(state.entities);
  const { Mech } = session;

  let mech;
  if (Mech.idExists(ownProps.mechID)) {
    const mechModel = Mech.withId(ownProps.mechID);

    mech = { ...mechModel.ref };

    const { type } = mechModel || {};
    mech.mechType = type;
  }

  const currentMech = selectCurrentMech(state);

  return { mech, currentMech };
};

const actions = { selectMech };

const MechsListRow = ({
  mech = {},
  selectMech = _.noop,
  currentMech = null
}) => {
  const weightClass = getWeightClass(mech.mechType.weight);

  return (
    <Table.Row
      onClick={() => selectMech(mech.id)}
      active={currentMech === mech.id}
    >
      <Table.Cell>{mech.id}</Table.Cell>
      <Table.Cell>{mech.mechType.name}</Table.Cell>
      <Table.Cell>{mech.type}</Table.Cell>
      <Table.Cell>{mech.mechType.weight}</Table.Cell>
      <Table.Cell>{weightClass}</Table.Cell>
    </Table.Row>
  );
};

export default connect(
  mapToState,
  actions
)(MechsListRow);
