import React from "react";
import { Form, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import orm from "../../app/orm";

const RANKS = [
  { value: "Private", text: "Private" },
  { value: "Corporal", text: "Corporal" },
  { value: "Sergeant", text: "Sergeant" },
  { value: "Lieutenant", text: "Lieutenant" },
  { value: "Captain", text: "Captain" },
  { value: "Major", text: "Major" },
  { value: "Colonel", text: "Colonel" }
];

const mapState = state => {
  const session = orm.session(state.entities);
  const { Mech } = session;

  const mechs = Mech.all()
    .toRefArray()
    .map(mech => {
      return { value: mech.id, text: mech.type };
    });

  return { mechs };
};

const PilotDetails = ({ pilot = {}, mechs }) => {
  const {
    name = "",
    rank = "",
    age = "",
    gunnery = "",
    piloting = "",
    mech = ""
  } = pilot;

  return (
    <Form size="large">
      <Form.Field name="name" width={16}>
        <label>Name</label>
        <input placeholder="Name" value={name} />
      </Form.Field>
      <Form.Field name="rank" width={16}>
        <label>Rank</label>
        <Dropdown fluid selection options={RANKS} value={rank} />
      </Form.Field>
      <Form.Field name="age" width={6}>
        <label>Age</label>
        <input placeholder="Age" value={age} />
      </Form.Field>
      <Form.Field name="gunnery" width={6}>
        <label>Gunnery</label>
        <input value={gunnery} />
      </Form.Field>
      <Form.Field name="piloting" width={6}>
        <label>Piloting</label>
        <input value={piloting} />
      </Form.Field>
      <Form.Field name="mech" width={16}>
        <label>Mech</label>
        <Dropdown fluid selection options={mechs} value={mech} />
      </Form.Field>
    </Form>
  );
};

export default connect(mapState)(PilotDetails);
