var React = require('react')

// var hearings = this.props.hearings
// console.log(hearings)

//
// minimum viable react component
var Calendar = React.createClass({
  render: function(){
    return (
      <div>{ this.props.hearings } </div>
    )
  }
})

module.exports = Calendar





