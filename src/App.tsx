import React from 'react';

import GlobayStyle from './styles/global';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobayStyle />
  </>
);

export default App;
