import React from 'react';
import MyComponent from './components/MyComponent/MyComponent';

const App: React.FC = () => {
  return (
    <>
    <MyComponent
      name="John"
      age={25}
      isAdmin={true}
      onClick={(e) => console.log('Button clicked', e)}
    />
    </>
  );
};

export default App