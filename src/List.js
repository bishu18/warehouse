import React, { Component } from "react";
import { Link } from "react-router-dom";
import Data from "./warehouses.json";

export default class List extends Component {
  render() {
    const cityName = Data.map((dataItem) => dataItem.city)
      .filter((city_Name, index, array) => array.indexOf(city_Name) === index)
      .sort();

    const cluster = Data.map((dataItem) => dataItem.cluster)
      .filter(
        (cluster_Name, index, array) => array.indexOf(cluster_Name) === index
      )
      .sort();

    // const space = Data.map((dataItem) => dataItem.space_available)
    //   .filter((space_Name, index, array) => array.indexOf(space_Name) === index)
    //   .sort();

    return (
      <div>
        <div className="row container">
          <div className="col-3 pt-5">
            <input
              type="text"
              placeholder="search"
              onChange={this.props.searchEvent}
            />
          </div>
          <div className="col-3">
            <label> Filter by City</label>
            <hr></hr>
            {cityName.map((i) => {
              return (
                <button
                  className="btn"
                  onClick={this.props.filterCity}
                  value={i}
                >
                  {i}
                </button>
              );
            })}
          </div>
          <div className="col-3">
            <label> Filter by Cluster</label>
            <hr></hr>
            {cluster.map((i) => {
              return (
                <button
                  className="btn"
                  onClick={this.props.filterCluster}
                  value={i}
                >
                  {i}
                </button>
              );
            })}
          </div>
          <div className="col-3">
            <label> Filter by Space</label>
            <select className="form-control" onChange={this.props.filterSpace}>
              <option>Sort by</option>
              <option>High to low</option>
              <option>Low to high</option>
            </select>
          </div>
        </div>
        {this.props.data.map((item) => {
          return (
            <div>
              <div className="card">
                <div className="card-body">
                  <Link to="/detail">
                    <button
                      className="btn "
                      onClick={this.props.warehouseDetail}
                      value={item.name}
                      className="card-text"
                    >
                      {item.name}
                    </button>
                  </Link>
                  <h5 className=" btn card-text"> Code - {item.code}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
