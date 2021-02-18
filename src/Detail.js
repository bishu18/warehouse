import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    return (
      <div>
        <h4>This is detail page</h4>
        {this.props.data.map((item) => {
          return (
            <div>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-text"> {item.name}</h3>
                  <h5 className="card-text"> {item.code}</h5>
                  <h5 className="card-text"> {item.city}</h5>
                  <h5 className="card-text"> {item.space_available}</h5>
                  <h5 className="card-text"> {item.cluster}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
