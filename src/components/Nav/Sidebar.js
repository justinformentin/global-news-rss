import React, { Component } from "react";


export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCategory: "Headlines"
        };
        this.categories = {
            business: { name: "Business"},
            entertainment: { name: "Entertainment"},
            general: { name: "General"},
            health: { name: "Health"},
            science: { name: "Science"},
            sports: { name: "Sports" },
            technology: { name: "Technology" }
        };
    }
    links() {
        const general = [{ name: "Headlines" }];
        this.props.categories.forEach(category =>
            general.push(this.categories[category])
        );
        return general;
    }
    activateLink(link, e) {
        e.preventDefault();
        this.props.store.updateCategory(link.name.toLowerCase());
        this.setState({ activeCategory: link.name });
    }

    generateLinks() {
        return this.links().map(link => (
            <li key={link.name} className={this.linkClass(link)}>
                <a
                    href=""
                    className="d-flex aic "
                    onClick={this.activateLink.bind(this, link)}
                >
                    <span className="link-text"> {link.name}</span>
                </a>
            </li>
        ));
    }
    linkClass(link) {
        return this.isActive(link) ? "sidebar-link is-active" : "sidebar-link";
    }
    isActive(link) {
        return link.name === this.state.activeCategory;
    }
    render() {
        return (
            <aside className="sidebar column-2">
                <div className="sidebar-links">
                    <h4 className="sidebar-category">Categories</h4>
                    <ul>{this.generateLinks()}</ul>
                </div>
            </aside>
        );
    }
}
