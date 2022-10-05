import type { NextPage } from "next";
import Head from "next/head";

import { Typography } from "antd";

const { Title } = Typography;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pipedrive oauth2</title>
        <meta name="description" content="Pipedrive oauth2 teste" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>Hello World!</Title>
      </main>
    </>
  );
};

export default Home;
