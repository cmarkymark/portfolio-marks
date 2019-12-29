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

  componentDidMount() {

  }

  getMarkdowns = async () => {
    let i = 0;
    let markdowns = [];
    for (i; i<this.state.filePaths.length; i++) {
      const response = await fetch(this.state.filePaths[i]);
      const text = await response.text();
      markdowns.push(text.items[0]);
    }
    // this.setState( {files: markdowns});
    return markdowns;
  }

  

  render() {

    console.log(this.state.files);

    // let posts = [];
    // for (let i=0; i<this.state.files.length; i++) {
    //   // let post = <ReactMarkdown source=${this.state.files[i]} escapeHtml={false} className="App" />;
    //   posts.push(<ReactMarkdown source={this.state.files[i]} escapeHtml={false} className="App" />);
    // }

    return (
      <div></div>
    );
  }
}

export default App;
