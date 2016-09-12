var React = require('react');
var ReactDOM = require('react-dom');
var CommentList = require('./component/CommentList');
var CommentForm = require('./component/CommentForm');

var CommentBox = React.createClass({
  getInitialState:function(){
    return {data:[]};
  },
  componentDidMount:function(){
    var data = [
      {id: 1, author: "Pete Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is another comment"}
    ];
    this.setState({data: data});
  },
  render: function(){
    return (
      <div>
      <h2>comments</h2>
      <CommentList data={this.state.data}/>
      <CommentForm/>
      </div>
    )
  }
});

ReactDOM.render(
  <CommentBox />,document.getElementById('app')
);
