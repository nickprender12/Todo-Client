import React from 'react';
import './App.css';
import { NavBar, AppBody, Footer } from './components/index';
// import { AppProvider } from './context/AppContext';
// import { SignUpProvider } from './context/SignUpContext';

function App() {
  return (
    <div className="App">
      {/* <AppProvider>
        <SignUpProvider> */}
      <NavBar />
      <AppBody />
      <Footer />
      {/* </SignUpProvider>
      </AppProvider> */}
    </div>
  );
}

export default App;
