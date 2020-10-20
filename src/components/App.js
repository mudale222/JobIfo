import React from 'react';
import TopPanel from './TopPanel'
import MiddlePanel1 from './MiddlePanel1'
import MiddlePanel2 from './MiddlePanel2'
import MiddlePanel3 from './MiddlePanel3'
import MiddlePanel4 from './MiddlePanel4'
import MiddlePanel5 from './MiddlePanel5'
import Footer from './Footer'
import StickyLeftSocialNetworksLinks from './StickyLeftSocialNetworksLinks'
import HiddenPanel from './HiddenPanel';

import '../styles/style.css'

const App = () => {
  return (
    <div className="App">
      <StickyLeftSocialNetworksLinks/>
      <TopPanel />
      <HiddenPanel/>
      <MiddlePanel1 />
      <MiddlePanel2 />
      <MiddlePanel3 />
      <MiddlePanel4 />
      <MiddlePanel5 />
      <Footer />
    </div>
  );
}

export default App;
