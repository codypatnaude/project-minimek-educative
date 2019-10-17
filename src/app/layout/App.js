import React from "react";
import "./App.css";
import { Header, Container } from "semantic-ui-react";
import TabBar from "../../features/tabs/TabBar";

import UnitInfo from "../../features/unitInfo/UnitInfo";
import Pilots from "../../features/pilots/Pilots";
import Mechs from "../../features/mechs/Mechs";
import UnitOrganization from "../../features/unitOrganization/UnitOrganization";
import Tools from "../../features/tools/Tools";

function App() {
  const tabs = [
    { name: "unitInfo", label: "Unit Info", component: UnitInfo },
    { name: "pilots", label: "Pilots", component: Pilots },
    { name: "mechs", label: "Mechs", component: Mechs },
    {
      name: "unitOrganization",
      label: "Unit Organization",
      component: UnitOrganization
    },
    { name: "tools", label: "Tools", component: Tools }
  ];
  return (
    <div className="App">
      <div className="App-header">
        <Header inverted as="h1">
          Project Mini-Mek
        </Header>
      </div>
      <Container>
        <TabBar tabs={tabs} size="massive"></TabBar>
      </Container>
    </div>
  );
}

export default App;
