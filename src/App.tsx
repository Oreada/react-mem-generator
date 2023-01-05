import React from 'react';
import { Header } from './components/Header/Header';
import { MemeForm } from './components/MemeForm/MemeForm';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <MemeForm />
      </div>
    </>
  );
}

export default App;
