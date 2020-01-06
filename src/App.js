import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Header from './components/header/Header.js';
import Navigation from './components/navigation/Navigation.js';
import Footer from './components/footer/Footer.js'
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
    const fields = Object.keys(this.state);
    try {
      let i = 0;
      for (i; i < fields.length; i++) {
        let j = 0;
        let markdowns = [];
        for (j; j<this.state[fields[i]].filePaths.length; j++) {
          let fileObject = {
            title: null,
            text: null
          };
          const response = await fetch(this.state[fields[i]].filePaths[j]);
          fileObject.text = await response.text();
          fileObject.title = fileObject.text.match(/<!---[\w\s\S]+?-->/);
          fileObject.title = fileObject.title[0].substring(
            6, fileObject.title[0].length - 4
          );
          markdowns.push(fileObject);
        }
        this.setState({ [fields[i]]: markdowns });
      }
    } catch(error) {
        console.log(error);
      }
    }

  render() {
    console.log(this.state);
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
          <Navigation props={this.state.files}/>
          <div>

          </div>
          <Footer/>
        </main>
      </div>
    );
  };
};

export default App;
