import React, {PropTypes} from "react";
import  {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authorActions from "../../actions/authorAction";
import AuthorList from "./AuthorList";
import {browserHistory} from "react-router";


class AuthorsPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {authors} = this.props;
    return (
      <div>
        <h1>Authors</h1>
        <AuthorList authors={authors}/>
      </div>
    );
  }
}

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return  {
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch){
  return  {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(authorActions, dispatch )
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
