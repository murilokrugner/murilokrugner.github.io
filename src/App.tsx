import React from 'react';
import Routes from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import GlobalStylesContext from './context/globalStylesContext';
import fonts from './global/styles/fonts';

function App() {
  return (
    <GlobalStylesContext.Provider value={[fonts]} >
      <Router>
        <Routes />
      </Router>
    </GlobalStylesContext.Provider>    
  );
}

export default App;
