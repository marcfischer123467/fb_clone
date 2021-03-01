import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    // BEM css naming convention
    <div className="app">
      <Header />
          <div className="app__body">
          <div className="Sidebar">
          <Sidebar />
          </div>
          <div className="Feed">
          <Feed />   
          </div>  
           
          {/* Sidebar */}
          {/* Feed */}
          {/* Widgets */}
      </div>
    

   
     
    </div>
  );
}

export default App;
