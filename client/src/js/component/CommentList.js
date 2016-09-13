var React = require('react');
var Comment = require('./Comment');

var CommentList = React.createClass({
render:function(){
  var commentNodes=this.props.data.map(function(comment){
    return (
      <div className="col-sm-6">
      <Comment key={comment.imdbID}  title={comment.Title} year={comment.Year} type={comment.Type}>
       {comment.Poster}
      </Comment>
      </div>
    );
  });


  return(
    <div className ='row'>
      {commentNodes}
    </div>
  );
}

});
module.exports=CommentList;
