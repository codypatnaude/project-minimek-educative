import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";

import PilotsListHeader from "./PilotsListHeader";
import PilotsListRow from "./PilotsListRow";

import orm from "../../../app/orm";
import { selectCurrentPilot } from "../pilotsSelectors";
import { selectPilot } from "../pilotsActions";

const mapState = state => {
  const session = orm.session(state.entities);
  const { Pilot } = session;

  const pilots = Pilot.all()
    .toModelArray()
    .map(pilotModel => pilotModel.getId());

  const currentPilot = selectCurrentPilot(state);

  return { pilots, currentPilot };
};

const actions = {
  selectPilot
};

class PilotsList extends Component {
  render() {
    const { pilots = [], selectPilot, currentPilot } = this.props;

    const pilotRows = pilots.map(pilotID => (
      <PilotsListRow
        pilotID={pilotID}
        key={pilotID}
        onPilotClicked={selectPilot}
        selected={pilotID === currentPilot}
      />
    ));

    return (
      <Table celled>
        <PilotsListHeader />
        <Table.Body>{pilotRows}</Table.Body>
      </Table>
    );
  }
}

export default connect(
  mapState,
  actions
)(PilotsList);
