import React from "react";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout location="about">
      <h2>このサイトについて</h2>
      <div>
        <p>金沢文庫DBで公開されているテキストを利用しています。</p>
      </div>
    </Layout>
  );
};

export default About;
