import { Footer as AntdFooter } from "antd/lib/layout/layout";
import React from "react";

import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <AntdFooter className="footer">
        <img src="icon-white.png" alt="QKart"></img>
        <p className="footer-text">QKart is your one stop solution to the buy the latest trending items with India's Fastest Delivery to your doorstep</p>
      </AntdFooter>
    );
  }
}
