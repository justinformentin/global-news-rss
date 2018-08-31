import React, { Component } from "react";
import Search from "./Search";
export default class Filters extends Component {
    languageOptions() {
        return this.props.languages.map(lang =>
            this.makeOption(lang.code, lang.name)
        );
    }
    countryOptions() {
        return this.props.countries.map(country =>
            this.makeOption(country.code, country.name)
        );
    }

    makeOption(key, value) {
        return (
            <option value={key} key={key}>
                {value}
            </option>
        );
    }

    selectCountry(e) {
        this.props.store.updateCountry(e.target.value);
    }
    selectLanguage(e) {
        this.props.store.updateLanguage(e.target.value);
    }

    render() {
        return (
            <div className="d-flex filters">
                <Search store={this.props.store} />

                <div className="column-2 pr-1 xs-hidden">
                    <select
                        className="control"
                        onChange={this.selectLanguage.bind(this)}
                    >
                        <option value="">--Language--</option>
                        {this.languageOptions()}
                    </select>
                </div>
            </div>
        );
    }
}
