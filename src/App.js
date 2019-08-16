import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { sortingHat } from './actions'
import image from './images/Sorting-Hat-Drawing-Art.jpg'

function App(props) {
  return (
    <div className="App">
      <div className='appBody'>
        <h1>Simple Sorting App</h1>
        <img src={image} alt='sorting hat'/>
      {props.loading && <div>loading...</div>}
      {props.house &&
      <div className='house'>{props.house}</div>
      }
      <button onClick={props.sortingHat}>Show me my House!</button></div>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    house: state.house,
    error: state.error,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {sortingHat})(App);
