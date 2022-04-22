import React from 'react';

import FormData from './pages/form';

import GlobalContext from './context';

function App() {
  return (
    <GlobalContext>
      <FormData />
    </GlobalContext>
  );
}

export default App;
