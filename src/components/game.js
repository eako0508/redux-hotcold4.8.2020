import React from 'react';

import Header from './Header/header';
import GuessSection from './GuessSection/guess-section';
import StatusSection from './StatusSection/status-section';
import InfoSection from './InfoSection/info-section';

export default class Game extends React.Component {  
    
  render() {
    
    return (
      <div>
        <Header />
        <main role="main">
          <GuessSection />
          <StatusSection />
          <InfoSection />
        </main>
      </div>
    );
  }
}