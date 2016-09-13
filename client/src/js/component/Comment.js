var React = require('react');

var Comment = React.createClass({
  render:function(){
    return (
      <div className = 'row' id="poster">
        <div className = 'col-sm-6'>
          <img src={this.props.children} ></img>
        </div>
        <div className = 'col-sm-6'>
          <h4 className="title">
              {this.props.title}
          </h4>
          <ul className="title">
          <li>Year :{this.props.year}</li>
          <li>Type :{this.props.type}</li>
          </ul>

        </div>
      </div>
    );
  }

});
module.exports=Comment;
