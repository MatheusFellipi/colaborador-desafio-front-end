import type { NextPage } from "next";
import { Tabs } from "../components/tabs";

import { Templete } from "../components/templente/templente";

const Home: NextPage = () => {
  return (
    <Templete title="Organização" backroute={false}>
      <Tabs />
    </Templete>
  );
};

export default Home;
