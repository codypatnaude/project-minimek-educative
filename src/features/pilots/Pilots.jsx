import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Segment, Header } from "semantic-ui-react";

import orm from "../../app/orm";

import PilotsList from "./PilotsList";
import PilotDetails from "./PilotDetails";
import { selectCurrentPilot } from "./pilotsSelectors";
import { selectPilot } from "./pilotsActions";

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

  const currentPilot = selectCurrentPilot(state);

  return { pilots, currentPilot };
};

const actions = {
  selectPilot
};

class Pilots extends Component {
  render() {
    const { pilots = [], selectPilot, currentPilot } = this.props;
    const currentPilotEntry =
      pilots.find(pilot => pilot.id === currentPilot) || {};

    return (
      <Segment>
        <Grid>
          <Grid.Column width={10}>
            <Header as="h3">Pilot List</Header>
            <PilotsList
              pilots={pilots}
              onPilotClicked={selectPilot}
              currentPilot={currentPilot}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h3">Pilot Details</Header>
            <Segment>
              <PilotDetails pilot={currentPilotEntry} />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default connect(
  mapState,
  actions
)(Pilots);
