import React, { Component } from "react";
import logo from "../../logo.png"

export default class HeaderLogo extends Component {
    render() {
        return (
            <div className="header-brand d-flex aic ">
                <i className="header-icon">
                    <img src={logo} alt="logo" />
                </i>
            </div>
        );
    }
}
