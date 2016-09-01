var React = require('react');

var MediaQuery = require('react-responsive');

var WeatherReport = React.createClass ({
  render: function() {
    var {data, location} = this.props;
    var reportStyle = {
        marginLeft:"300",
        marginTop: "-125",
        fontWeight: "bold"
      };
    var reportStyle2 = {
          marginLeft:"auto",
          fontWeight: "bold"
        };
    return (
      <div>

        <MediaQuery minWidth={700}> {/*Appling Media Queries for Responsive Web Design*/}
          <div style={reportStyle}>
            <h3><b><u>Various Weather Parameters for the {location} city</u></b></h3>
            <h4><i>(arranged alphabetically (KEYS and their respective values))</i></h4>
            <h4>{data}</h4>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={700}>
          <div style={reportStyle2}>
            <h3><b><u>Various Weather Parameters for the {location} city</u></b></h3>
            <h4><i>(arranged alphabetically (KEYS and their respective values))</i></h4>
            <h4>{data}</h4>
          </div>
        </MediaQuery>
        
    </div>
    );
  }
});

module.exports = WeatherReport; {/* For accessing the function */}
