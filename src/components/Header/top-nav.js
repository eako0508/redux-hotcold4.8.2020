import React from 'react';
import store from './../../store';
import {restartGame, generateAuralUpdate } from './../../actions'
import {connect} from 'react-redux';

import './top-nav.css';

export function TopNav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a 
            href="#what" 
            className="what"
            aria-label="How to play"
          >
            What?
          </a>
        </li>

        <li>
          <a 
            href='#answer'
            className="answer"
            onClick={e=>alert(props.correctAnswer)} 
          >
            ANSWER
          </a>
        </li>

        <li>
          <a
            href="#feedback"
            className="new"
            aria-label="Start a new game"
            onClick={e=>{
                e.preventDefault();
                store.dispatch(restartGame(Math.floor(Math.random() * 100) + 1));
              }           
            }
          >
            + New Game
          </a>
        </li>
        <li>
          <a
            href="#get-status"
            /* the `visuallyhidden` class hides an element 
            while leaving it available to screen reader users  */
            className="visuallyhidden focusable status-link"
            onClick={e=>store.dispatch(generateAuralUpdate())}            
          >
            Hear state of game
          </a>
        </li>
      </ul>
    </nav>
  );
}
export const mapStatusToProps = status =>({
  correctAnswer: status.correctAnswer
});

export default connect(mapStatusToProps)(TopNav);