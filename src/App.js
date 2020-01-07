import React from 'react';
import {Route, withRouter}    from 'react-router-dom';
import ReactMarkdown from 'react-markdown/with-html';
import Header from './components/header/Header.js';
import Navigation from './components/navigation/Navigation.js';
import About from './components/about/About.js';
import Landing from './components/landing/Landing.js';
import Markdown from './components/markdown/Markdown.js';
import Fascination from './components/fascination/Fascination.js';
import Footer from './components/footer/Footer.js';
import './App.css';

function importAll(r) {
  return r.keys().map(r);
}

const fascinationPaths = importAll(
  require.context('./assets/markdown/fascination', true, /\.md$/)
);

const researchPaths = importAll(
  require.context('./assets/markdown/research', true, /\.md$/)
);

const teachingPaths = importAll(
  require.context('./assets/markdown/teaching', true, /\.md$/)
);

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      fascination: {
        filePaths: fascinationPaths
      },
      research: {
        filePaths: researchPaths
      },
      teaching: {
        filePaths: teachingPaths
      }
    };
  }

  async componentDidMount() {
    const keys = Object.keys(this.state);
    try {
      let i = 0;
      for (i; i < keys.length; i++) {
        let j = 0;
        let markdowns = [];
        for (j; j<this.state[keys[i]].filePaths.length; j++) {
          let fileObject = {
            title: null,
            text: null
          };
          const response = await fetch(this.state[keys[i]].filePaths[j]);
          fileObject.text = await response.text();
          fileObject.title = fileObject.text.match(/<!---[\w\s\S]+?-->/);
          fileObject.title = fileObject.title[0].substring(
            6, fileObject.title[0].length - 4
          );
          markdowns.push(fileObject);
        }
        this.setState({ [keys[i]]: markdowns });
      }
    } catch(error) {
        console.log(error);
      }
    }

  render() {
    // console.log(this.state);
    const keys = Object.keys(this.state);

    let allPostRoutes = [];
    if (
      !this.state.fascination.filePaths &&
      !this.state.research.filePaths &&
      !this.state.teaching.filePaths)
    {
      for (let i = 0; i < keys.length; i++) {
        for (let j=0; j<this.state[keys[i]].length; j++) {
          // console.log(this.state[keys[i]][j]);
          let path = this.state[keys[i]][j].title.replace(/\s/g , "-");
          allPostRoutes.push(
            <Route
              exact path={path}
              key={this.state[keys[i]][j].title}
              render={(props) => <Markdown {...this.state[keys[i]][j]} />}
            />
          );

        }
      }
    }
    console.log(allPostRoutes);
    // let posts = [];
    // if (this.state.files !== null) {
    //   for (let i=0; i<this.state.files.length; i++) {
    //     posts.push(
    //       <ReactMarkdown
    //         source={this.state.files[i].text}
    //         key={this.state.files[i].title}
    //         escapeHtml={false}
    //         className="App"
    //       />);
    //   }
    // } else {
    //   posts = '';
    // }

    return (
      <div className="App">
        <main>
          <Header/>
          <Navigation props={this.state}/>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route
              exact path='/fascination'
              render={(props) => <Fascination {...this.state.fascination} />}
            />
            {allPostRoutes}
          </div>
          <Footer/>
        </main>
      </div>
    );
  };
};

export default App;
