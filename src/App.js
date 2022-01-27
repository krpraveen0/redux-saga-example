import React from "react";
import { connect } from "react-redux";
import "./App.css";
class App extends React.Component{
  render(){
    return(
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    age: state.age
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    onAgeUp : () => dispatch({type:"AGE_UP",value:1}),
    onAgeDown: () => dispatch({type:"AGE_DOWN",value:1})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);