import React, { Component, Fragment } from "react";
import Feed from "./components/Article/Feed";
import Sources from "./components/Header/Sources";
import Header from "./components/Header/Header";
import Sidebar from "./components/Nav/Sidebar";
import Loader from "./components/Article/Loader";
import Store from "./Store";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            sources: [],
            countries: [],
            languages: [],
            categories: [],
            isLoading: false
        };
        this.store = new Store(this);
    } 

    componentDidMount() {
        this.store.fetchSources().fetchHeadlines();
    }

    render() {
        return (
            <Fragment>
                {this.state.isLoading && <Loader />}
                <Header
                    languages={this.state.languages}
                    countries={this.state.countries}
                    store={this.store}
                />
                <div className="app columns">
                    <Sidebar
                        store={this.store}
                        categories={this.state.categories}
                    />
                    <main className="column-10 main columns">
                        <Feed articles={this.state.articles} />
                        <Sources
                            store={this.store}
                            sources={this.state.sources}
                        />
                    </main>
                </div>
            </Fragment>
        );
    }
}

export default App;
