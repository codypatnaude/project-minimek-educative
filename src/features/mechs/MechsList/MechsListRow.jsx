import React from "react";
import { Table } from "semantic-ui-react";

import { getWeightClass } from "../mechSelectors";

const MechsListRow = ({ mech = {} }) => {
  const weightClass = getWeightClass(mech.mechType.weight);

  return (
    <Table.Row>
      <Table.Cell>{mech.id}</Table.Cell>
      <Table.Cell>{mech.mechType.name}</Table.Cell>
      <Table.Cell>{mech.type}</Table.Cell>
      <Table.Cell>{mech.mechType.weight}</Table.Cell>
      <Table.Cell>{weightClass}</Table.Cell>
    </Table.Row>
  );
};

export default MechsListRow;
