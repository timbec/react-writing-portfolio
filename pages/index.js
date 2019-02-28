import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { Fragment } from "react";

export default () => (
  <Fragment>
    <Navigation />
    <h1>
      Excellent base demo to be built on. Possibly try with GraphQL at some
      point: Thanks to{" "}
      <a href="https://webdevstudios.com/2019/01/10/headless-wordpress-with-react-and-nextjs-2/">
        Web Dev's Studios 'Headless Wordpress with React and NextJS
      </a>
    </h1>
    <h3>Steps to take:</h3>
    <ol>
      <li>Test out adding React Router</li>
      <li>Look at Lynda.com course on how to fill this out.</li>
      <li>See about adding Redux to this application.</li>
      <li>Fill out rest of site using custom API endpoint</li>
    </ol>
  </Fragment>
);
