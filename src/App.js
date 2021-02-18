import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import List from "./List";
import Data from "./warehouses.json";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: Data,
    };
    this.searchEvent = this.searchEvent.bind(this);
    this.filterCity = this.filterCity.bind(this);
    this.filterCluster = this.filterCluster.bind(this);
    this.filterSpace = this.filterSpace.bind(this);
    this.warehouseDetail = this.warehouseDetail.bind(this);
  }

  searchEvent(event) {
    console.log(event.target.value);
    this.setState({
      data: Data.filter(
        (item) =>
          item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !==
          -1
      ),
    });
  }

  filterCity(event) {
    console.log(event.target.value);
    this.setState({
      data: Data.filter((item) => item.city.indexOf(event.target.value) >= 0),
    });
  }

  filterCluster(event) {
    console.log(event.target.value);
    this.setState({
      data: Data.filter(
        (item) => item.cluster.indexOf(event.target.value) >= 0
      ),
    });
  }

  filterSpace(event) {
    console.log(event.target.value);
    if (event.target.value === "High to low") {
      this.setState({
        data: Data.sort((a, b) => b.space_available - a.space_available),
      });
    } else {
      this.setState({
        data: Data.sort((a, b) => a.space_available - b.space_available),
      });
    }
  }

  warehouseDetail(event) {
    console.log(event.target.value);
    this.setState({
      data: Data.filter((item) => item.name === event.target.value),
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <List
              data={this.state.data}
              searchEvent={this.searchEvent}
              filterCity={this.filterCity}
              filterCluster={this.filterCluster}
              filterSpace={this.filterSpace}
              warehouseDetail={this.warehouseDetail}
            ></List>
          </Route>
          <Route path="/detail">
            <Detail data={this.state.data}></Detail>
          </Route>
        </Switch>
      </div>
    );
  }
}
