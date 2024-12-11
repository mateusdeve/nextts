// pages/index.tsx

import { useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { Container, Content } from "../components/styled";
import Profile from "../components/Profile";
import About from "../components/About";
import { User, UsersProps } from "../types";
import Study from "../components/Study";
import Tech from "../components/Tech";

function Home({ user, userAgent, ip }: UsersProps) {
  useEffect(() => {
    const sendPageView = async () => {
      // Determinar o tipo de dispositivo
      const isMobile =
        /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      const device = isMobile ? "mobile" : "desktop";

      const data = {
        url: window.location.href,
        referrer: document.referrer,
        clientUserAgent: navigator.userAgent,
        language: navigator.language,
        device, // Adiciona o tipo de dispositivo
        serverUserAgent: userAgent,
        ip,
        // Adicione outros dados conforme necessário
      };

      try {
        await axios.post("/api/trackPageView", data);
        console.log("Page view data sent via API route successfully");
      } catch (error) {
        console.error("Error sending page view data via API route:", error);
      }
    };

    sendPageView();
  }, [userAgent, ip]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <Content>
          <Profile user={user} />
          <About user={user} />
          <Study />
          <Tech />
        </Content>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await axios.get("https://api.github.com/users/mateusdeve");
    const { data } = response;

    const userAgent = context.req.headers["user-agent"] || "";
    const ip =
      context.req.headers["x-forwarded-for"] ||
      context.req.connection.remoteAddress ||
      "";

    return {
      props: { user: data, userAgent, ip },
    };
  } catch (e) {
    console.log("Error fetching GitHub user:", e);
    return {
      props: { user: {}, userAgent: "", ip: "" },
    };
  }
};

export default Home;
