import React from "react";
import ReactDOM from "react-dom";
import Tab from "./tab/tab";
import Link from "./link/link";
import { loadArticlesFromSection } from "./utils/api";
import "./base.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ukNews: []
    };
  }

  componentDidMount() {
    loadArticlesFromSection("uk-news").then(console.log);
  }

  render() {
    return (
      <React.Fragment>
        <Tab title="UK News" id="uk-news">
          {this.state.ukNews.map(item => {
            <Link link={item.webUrl} label={item.webTitle} />;
          })}
        </Tab>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
