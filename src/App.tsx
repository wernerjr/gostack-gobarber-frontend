import React from 'react';

import GlobayStyle from './styles/global';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobayStyle />
  </>
);

export default App;
