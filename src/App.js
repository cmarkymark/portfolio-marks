import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import './App.css';

function importAll(r) {
  return r.keys().map(r);
}

const filePaths = importAll(require.context('./markdown', true, /\.md$/));

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
        const response = await fetch(this.state.filePaths[i]);
        const text = await response.text();
        markdowns.push(text);
      }
      this.setState({ files: markdowns});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // console.log(this.state.files);
    let posts = [];
    if (this.state.files !== null) {
      for (let i=0; i<this.state.files.length; i++) {
        // let post = <ReactMarkdown source=${this.state.files[i]} escapeHtml={false} className="App" />;
        posts.push(<ReactMarkdown source={this.state.files[i]} escapeHtml={false} className="App" />);
      }
    } else {
      posts = '';
    }



    return (
      <div>{posts}</div>
    );
  }
}

export default App;
