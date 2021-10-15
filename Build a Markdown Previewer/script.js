const initialState = '
This is a paragraph
**This is bolded text**
# Heading
## Heading 2

>Block Quotes!

- list item 1
- list item 2
- list item 3

[Visit my website](https://www.freecodecamp.org/learn/)
This is an inline \'<div></div>\'
This is a block of code:
\'\'\'
let x = 1;
let y = 2;
let z = x + y;
\'\'\
![React](https://i.pinimg.com/originals/1c/8a/ad/1c8aad7f8b84b7968c298ae9b9db153d.jpg)
';

//a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

class App extends React.Component {
  state = {
    text: "initialState"
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return (
      <div>
        <h2 className="text-center mt=4 text-white">Convert your Markdown</h2>
        <div className="row">
          <div className="col-6">
            <h6 className="text-center text-white">Enter your markdown:</h6>
            <textarea
              className="form-control p-2"
              id="editor"
              value={text}
              onChange={this.handleChange}
            />
          </div>

          <div className="col-6">
            <h6 className="text-center text-white">See the result:</h6>
            <div
              className="preview rounded p-2"
              dangerouslySetInnerHTML={{ __html: markdown }} id="preview"
            />
          </div>
        </div>
      </div>
    );
  }
}

import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

ReactDOM.render(<App />, document.getElementById("app"));
