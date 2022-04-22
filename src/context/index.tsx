import React from 'react';

import { UserContextProvider } from './user';

type PropsGlobalContext = {
  children: React.ReactNode;
}

const GlobalContext = ({ children }: PropsGlobalContext) => {
  return (
    <UserContextProvider>
      {children}
    </UserContextProvider>
  )
};

export default GlobalContext;