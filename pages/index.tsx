import type { NextPage } from "next";
import Head from "next/head";

import Slider from "../components/Slider";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&family=Poppins:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Slider />
    </div>
  );
};

export default Home;
