import React, { Component } from "react";
import API from "./utils/API.js"
import Chart from "react-apexcharts";
import Selector from "./components/Selector.js"

class App extends Component {
  state = {
      search: "",
      results: [],
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };

  processResults = results => {
      const mapRes = results.map(result => results.main.temp);
      console.log(mapRes);
  }

  searchWeather = query => {
       API.search(query)
       .then(res=>this.setState({results: res.data.list},
            ()=> this.processResults(this.state.results)
            ))
       .catch(err => console.log(err));
  }

  handleButtonSelect = event => {
    event.preventDefault();
//    console.log(event);
    const value = event.target.value;
    this.setState({search: "Atlanta,US"},()=>{
        console.log(this.state.search);
        this.searchWeather(this.state.search);
        });
    }

  render() {
    return (
      <div className="app">
        <Selector handleButtonSelect={this.handleButtonSelect} />
        <div className="row">
          <div className="mixed-chart">
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="500"
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;