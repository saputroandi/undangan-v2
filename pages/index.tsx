import React from "react";
import Head from "next/head";
import BaseComponents from "../components/baseComponents";
import Opening from "../components/opening";
import Prologue from "../components/prologue";
import Couple from "../components/couple";
import Akad from "../components/akad";

const Home: React.FC = (): React.ReactElement => {
  const elements: React.ReactElement[] = [
    <Opening />,
    <Prologue />,
    <Couple />,
    <Akad />,
  ];

  return (
    <div>
      <Head>
        <title>Undangan Versi 2</title>
        <meta name="description" content="Undangan Versi 2" />
      </Head>

      <main>
        {elements.map((element, idx) => {
          return <BaseComponents key={idx}>{element}</BaseComponents>;
        })}
      </main>
    </div>
  );
};

export default Home;
