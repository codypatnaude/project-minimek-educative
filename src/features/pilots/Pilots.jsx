import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Segment, Header } from "semantic-ui-react";

import orm from "../../app/orm";

import PilotsList from "./PilotsList";
import PilotDetails from "./PilotDetails";

const mapState = state => {
  const session = orm.session(state.entities);

  const { Pilot } = session;

  const pilots = Pilot.all()
    .toModelArray()
    .map(pilotModel => {
      const pilot = {
        ...pilotModel.ref
      };

      const { mech } = pilotModel;

      if (mech && mech.type) {
        pilot.mechType = mech.type.id;
      }

      return pilot;
    });

  return { pilots };
};

class Pilots extends Component {
  render() {
    const { pilots = [] } = this.props;

    // Use the first pilot as the "current" one for display, if available.
    const currentPilot = pilots[0] || {};

    return (
      <Segment>
        <Grid>
          <Grid.Column width={10}>
            <Header as="h3">Pilot List</Header>
            <PilotsList pilots={pilots} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h3">Pilot Details</Header>
            <Segment>
              <PilotDetails pilot={currentPilot} />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default connect(mapState)(Pilots);
