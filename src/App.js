import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Header from './components/header/Header.js';
import Navigation from './components/navigation/Navigation.js';
import Footer from './components/footer/Footer.js'
import './App.css';

function importAll(r) {
  return r.keys().map(r);
}

const filePaths = importAll(
  require.context('./assets/markdown', true, /\.md$/)
);

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      files: null,
      filePaths: filePaths
    };
  }

  async componentDidMount() {
    try {
      let i = 0;
      let markdowns = [];
      for (i; i<this.state.filePaths.length; i++) {
        let fileObject = {
          title: null,
          text: null
        };
        const response = await fetch(this.state.filePaths[i]);
        fileObject.text = await response.text();
        fileObject.title = fileObject.text.match(/<!---[\w\s\S]+?-->/);
        fileObject.title = fileObject.title[0].substring(
          6, fileObject.title[0].length - 4
        );
        markdowns.push(fileObject);
      }
      this.setState({ files: markdowns});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state.files);
    let posts = [];
    if (this.state.files !== null) {
      for (let i=0; i<this.state.files.length; i++) {
        posts.push(
          <ReactMarkdown
            source={this.state.files[i].text}
            key={this.state.files[i].title}
            escapeHtml={false}
            className="App"
          />);
      }
    } else {
      posts = '';
    }



    return (
      <div className="App">
        <main>
          <Header/>
          <Navigation/>
          <div>
            {posts}
          </div>
          <Footer/>
        </main>
      </div>
    );
  };
};

export default App;
