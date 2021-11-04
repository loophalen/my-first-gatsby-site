import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial</p>
      <StaticImage alt="Drew Beskin" src="../images/drewbeskin.png" />
      <StaticImage alt="Nick Mallis" src="../images/nickmallis.png" />
      <StaticImage alt="Grand Vapids" src="../images/grandvapids.png" />
    </Layout>
  );
};

export default IndexPage;
