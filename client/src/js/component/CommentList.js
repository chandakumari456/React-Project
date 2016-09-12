var React = require('react');
var Comment = require('./Comment');

var CommentList = React.createClass({
render:function(){
  var commentNodes=this.props.data.map(function(comment){
    return (
      <div>
      <Comment key={comment.id}  author={comment.author}>
       {comment.text}
      </Comment>
      </div>
    );
  });


  return(
    <div className ='commentList'>
    <h4>your value from button : {this.props.value}</h4>
      {commentNodes}
    </div>
  );
}

});
module.exports=CommentList;
