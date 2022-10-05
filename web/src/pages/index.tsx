import type { NextPage } from "next";
import Head from "next/head";

import { Typography, Card, Form, Input, Button, Divider } from "antd";
import { PipedriveButton } from "~components/PipedriveButton";

const { Title } = Typography;
const { Item } = Form;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pipedrive oauth2</title>
        <meta name="description" content="Pipedrive oauth2 teste" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Card
          style={{
            width: "100%",
            maxWidth: "420px",
          }}
        >
          <header style={{ marginBottom: "2rem" }}>
            <Title level={3} style={{ textAlign: "center" }}>
              Pipedrive OAuth2
            </Title>
          </header>

          <div>
            <Form layout="vertical">
              <Item
                name="Email"
                label="Email"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input type="text" placeholder="Email" size="large" />
              </Item>
              <Item
                name="Senha"
                label="Senha"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input type="password" placeholder="Senha" size="large" />
              </Item>
              <Item>
                <Button type="primary" size="large" block>
                  Entrar
                </Button>
              </Item>
            </Form>
          </div>

          <footer>
            <Divider>Outras formas</Divider>

            <PipedriveButton />
          </footer>
        </Card>
      </main>
    </>
  );
};

export default Home;
