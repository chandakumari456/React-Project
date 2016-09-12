var React = require('react');

var CommentButton = React.createClass({
  getInitialState:function(){
    return {author: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  sendDataToParent: function() {
    this.props.changeValue(this.state.author);
  },
  render:function(){
    return(
      <div>
      <h2>Click on button to see new value</h2>
      <input
        type="text"
        placeholder="Your name"
        value={this.state.author}
        onChange={this.handleAuthorChange}
      />
      <input type="button" onClick={this.sendDataToParent} value='Click Me'></input>
      </div>
    );
  }
});

module.exports=CommentButton;
