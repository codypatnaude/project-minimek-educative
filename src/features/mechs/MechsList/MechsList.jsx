import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";

import MechsListHeader from "./MechsListHeader";
import MechsListRow from "./MechsListRow";
import orm from "../../../app/orm";

const mapToState = state => {
  const session = orm.session(state.entities);
  const { Mech } = session;

  const mechs = Mech.all()
    .toModelArray()
    .map(mechModel => mechModel.getId());

  return { mechs };
};

class MechsList extends Component {
  render() {
    const { mechs = [] } = this.props;

    const mechRows = mechs.map(mechID => (
      <MechsListRow mechID={mechID} key={mechID} />
    ));

    return (
      <Table celled>
        <MechsListHeader />

        <Table.Body>{mechRows}</Table.Body>
      </Table>
    );
  }
}

export default connect(mapToState)(MechsList);
