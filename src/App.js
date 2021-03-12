import React from 'react';
import './App.css';
import { NavBar, AppBody } from './components/index';
import { AppProvider } from './context/AppContext';
import { SignUpProvider } from './context/SignUpContext';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <SignUpProvider>
          <NavBar />
          <AppBody />
        </SignUpProvider>
      </AppProvider>
    </div>
  );
}

export default App;
