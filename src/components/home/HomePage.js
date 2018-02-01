import React from "react";
import {Link} from "react-router";

class HomePage extends  React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluran Sight Administration</h1>
        <p>React, Redux and react router in ES6 for ultra-resposive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More </Link>
      </div>

    );
  }
}

export default HomePage;
