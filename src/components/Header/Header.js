import React, { Component } from "react";
import HeaderLogo from "./HeaderLogo";
import Filters from "./Filters";

export default class Header extends Component {
    render() {
        return (
            <header className="main-header d-flex aic jcsb">
                <HeaderLogo />
                <Filters {...this.props} />
            </header>
        );
    }
}
