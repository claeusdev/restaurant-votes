import React, { Component } from 'react';

class FileInput extends Component {
  handleChange(e) {
    this.setState({
      value: e.target.value.split(/(\\|\/)/g).pop()
    });
    if (this.props.onChange) this.props.onChange(e);
  }
  render() {
    return (
      <section>
        <input
          type="file"
          // style={{
          //   cursor: 'pointer',
          //   position: 'absolute',
          //   top: 0,
          //   left: 0,
          //   opacity: 0,
          //   width: '100%',
          //   zIndex: 1
          // }}
          name={this.props.name}
          accept={this.props.accept}
          className={this.props.className}
          onChange={(e) => this.handleChange(e)}
        />
      </section>
    );
  }
}

export default FileInput;
