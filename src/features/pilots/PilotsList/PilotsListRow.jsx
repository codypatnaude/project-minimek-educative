import React from "react";
import { Table } from "semantic-ui-react";
import _ from "lodash";
import orm from "../../../app/orm";
import { connect } from "react-redux";

const mapState = (state, ownProps) => {
  const session = orm.session(state.entities);
  const { Pilot } = session;

  let pilot;
  if (Pilot.idExists(ownProps.pilotID)) {
    const pilotModel = Pilot.withId(ownProps.pilotID);
    pilot = {
      ...pilotModel.ref
    };

    const { mech } = pilotModel;

    if (mech && mech.type.id) {
      pilot.mechType = mech.type.id;
    }
  }

  return { pilot };
};

const PilotsListRow = ({ pilot = {}, onPilotClicked = _.noop, selected }) => {
  const {
    id = null,
    name = "",
    rank = "",
    age = "",
    gunnery = "",
    piloting = "",
    mechType = ""
  } = pilot;

  return (
    <Table.Row onClick={() => onPilotClicked(id)} active={selected}>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{rank}</Table.Cell>
      <Table.Cell>{age}</Table.Cell>
      <Table.Cell>
        {gunnery}/{piloting}
      </Table.Cell>
      <Table.Cell>{mechType}</Table.Cell>
    </Table.Row>
  );
};

export default connect(mapState)(PilotsListRow);
