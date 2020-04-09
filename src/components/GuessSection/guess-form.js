import React from 'react';
import {connect} from 'react-redux';
import store from './../../store';
import './guess-form.css';
import {makeGuess} from './../../actions';

export default class GuessForm extends React.Component {
  
  onSubmit(event) {
    event.preventDefault();
    
    //if (this.props.onMakeGuess) {
      const value = this.input.value;
      //this.props.onMakeGuess(value);
      store.dispatch(makeGuess(value));
    //}
    this.input.value = '';
    this.input.focus();
    console.log('done');
  }
  
  render() {
    return (
      <form onSubmit={e =>this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          //value = {props.guessValue}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}
/*
const mapStateToProp = state => ({
  
});

export default connect(mapStateToProp)(GuessForm);
*/