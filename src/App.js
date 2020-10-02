import React, { Component } from "react";
import API from "./utils/API.js"
import Chart from "react-apexcharts";
import Selector from "./components/Selector.js"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount = (callback) => {
      this.setState({search: "Atlanta,US"},()=>{
              console.log(this.state.search);
              this.searchWeather(this.state.search,this.processX);
              });
  }

  processY = results => {
      const mapRes = results.map(result => result.main.temp);
      let series = [...this.state.series];
      let serie = {...series[0]};
      serie.data = mapRes;
      series[0] = serie;
      this.setState({series},()=>console.log("updated: "+this.state.series[0].data));
  }

  processX = results => {
      const mapDay = results.map(result => result.dt)
      console.log(mapDay);
      let options = {...this.state.options};
      let option = {...options.xaxis};
      console.log(option);
      option.categories = mapDay;
      options.xaxis = option;
      console.log(option);
      this.setState({options},()=>console.log(this.state.options.xaxis.categories));
  }

  searchWeather = (query,callback) => {
       API.search(query)
       .then(res=>this.setState({results: res.data.list},
            ()=> { this.processY(this.state.results);
                if (callback) {callback(this.state.results)}
                }
            ))
       .catch(err => console.log(err));
  }

  handleChange = event => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({search: value},()=>{
        console.log(this.state.search);
        this.searchWeather(this.state.search);
        });
    }

  render() {
    return (
      <div className="app">
        <select onChange={this.handleChange}>
          <option value="Atlanta,US">Atlanta,US</option>
          <option value="London,UK">London,UK</option>
          <option value="Bujumbura,BI">Bujumbura,BI</option>
        </select>
        <h3>5 Days Weather: {this.state.search}</h3>
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