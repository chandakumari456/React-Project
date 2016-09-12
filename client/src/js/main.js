var React = require('react');
var ReactDOM = require('react-dom');
var CommentList = require('./component/CommentList');
var CommentForm = require('./component/CommentForm');
var CommentButton = require('./component/CommentButton');

var CommentBox = React.createClass({
  getInitialState:function(){
    return {data:[{id: 1, author: "Chanda Kumari", text: "This is first comment"},
                  {id: 2, author: "Ravi Singh",    text: "This is second comment"}],
            buttonValue:"present state"
                };
  },
  changeValue:function(value){
    var data1 = [
      {id: 3, author: "Pete Hunt", text: "This is one comment"},
      {id: 4, author: "Jordan Walke", text: "This is another comment"}
    ];
    this.setState({data: data1,buttonValue:value});
  },
  render: function(){
    return (
      <div>
      <CommentList data={this.state.data} value={this.state.buttonValue}/>

      <CommentButton changeValue={this.changeValue}/>
      </div>
    )
  }
});

ReactDOM.render(
  <CommentBox />,document.getElementById('app')
);
