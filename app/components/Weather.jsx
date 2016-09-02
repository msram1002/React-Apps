var React = require('react');
var WeatherSearchForm = require('WeatherSearchForm');
var WeatherReport = require('WeatherReport');
var openWeather = require('openWeather');

var MediaQuery = require('react-responsive');

var Weather = React.createClass ({
    getInitialState: function () {
      return {
        isLoading: false
        }
    },
    handleSearch: function (location) {
      var _this = this;
      this.setState({isLoading: true});

      openWeather.getResults(location).then(function (data) {
        _this.setState({
          location: location,
          data: data,
          isLoading: false
        });
      }, function (errorMessage) {
        _this.setState({isLoading: false});
        alert(errorMessage);
      });
    },
   render: function(){
     var {isLoading, data, location} = this.state;
     function renderMessage (){
       if(isLoading) {
         return <h3>Fetching Weather Parameters ...</h3>;
       } else if (data && location) {
         return <WeatherReport data={data} location={location}/>;
       }
     }

     var searchFormStyle = {
         marginLeft:"100",
         marginTop:"100"
       };

    var searchFormStyle2 = {
           marginLeft:"25",
           marginTop:"100"
         };

     return (
       <div>

       <MediaQuery minWidth={700}> {/*Appling Media Queries for Responsive Web Design*/}
         <div style={searchFormStyle}>
           <h4><i>Enter the CITY Name</i></h4>
           <WeatherSearchForm onSearch={this.handleSearch}/>
           {renderMessage()}
         </div>
       </MediaQuery>


       <MediaQuery maxWidth={700}>
         <div style={searchFormStyle2}>
           <h4><i>Enter the CITY Name</i></h4>
           <WeatherSearchForm onSearch={this.handleSearch}/>
           {renderMessage()}
         </div>
       </MediaQuery>

     </div>
    );
  }
});

module.exports = Weather; {/* For accessing the function */}
