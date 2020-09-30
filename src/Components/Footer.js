// import React from "react";
// import SignUp from "./SignUp";
import { Button, Navbar } from "react-bootstrap/";

import React, { useCallback } from "react";
import { useHistory, Link } from "react-router-dom";
// import '../images/codeOverFlow_logo.jpg';

const Footer = (props) => {
  return (
    <div>
      {/* <> */}
      <br />
      <Navbar bg="dark" variant="dark" expand="lg">
        {/* <img
            alt=""
            src={require(`../images/codeOverFlow_logo.jpg`)}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "} */}
        {/* CodeOverFlow */}
        <Link>
          <h5>ABOUT |</h5>
        </Link>
        <Link>
          <h5> | PRODUCTS</h5>
        </Link>
      </Navbar>
    </div>
  );
};

export default Footer;