import { lazy, Suspense } from 'react';

import "./App.css"

import { GoogleOAuthProvider } from '@react-oauth/google';
import { AccProvider } from './context/Provider';
import Loader from './components/loader/Loader';

const Messanger = lazy(() => import('./components/Messanger'));
function App() {
  const id = "558297196514-872f7ab71lodqveg9f6usi66eig28uec.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={id}>
      <AccProvider>
        <Suspense fallback={<Loader />}>
          <Messanger />
        </Suspense>
      </AccProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
