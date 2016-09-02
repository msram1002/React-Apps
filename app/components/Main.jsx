// Main Component
var React = require('react');
var Header = require('Header');

var MediaQuery = require('react-responsive');

var Main = React.createClass({
  render: function () {

      var mainStyle = {
          backgroundColor: "#378",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap"
        };
    return (
          <div style={mainStyle}>
              <Header/>
              {this.props.children}
          </div>

    );
  }
});

module.exports = Main; {/* For accessing the function */}
