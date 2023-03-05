import React from "react";
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";
import Header from "../components/header";
import './layout.css'



const Layout = ({ location, children }) => {
  return (
    <TransitionProvider location={location}>
  <Header/>
      <TransitionViews>
        {children}
      </TransitionViews>
    </TransitionProvider>
  );
};

export default Layout;
