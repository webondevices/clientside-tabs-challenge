import React from "react";
import ReactDOM from "react-dom";
import Tab from "./tab/tab";
import Link from "./link/link";
import { loadArticlesFromSection } from "./utils/api";
import "./base.css";

const sections = [
  {
    id: "uk-news",
    label: "UK News"
  },
  {
    id: "football",
    label: "Football"
  },
  {
    id: "travel",
    label: "Travel"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    sections.forEach(section => {
      this.state[section.id] = [];
    });
  }

  componentDidMount() {
    sections.forEach(section => {
      loadArticlesFromSection(section.id).then(content => {
        this.setState({ [section.id]: content });
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        {sections.map(section => (
          <Tab title={section.label} id={section.id} key={section.id}>
            {this.state[section.id].map(item => (
              <Link
                link={item.webUrl}
                label={item.webTitle}
                key={item.webTitle}
              />
            ))}
          </Tab>
        ))}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
