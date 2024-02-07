import React from 'react';
import Header from '../../sharedComponent/src/components/Header';
import Footer from '../../sharedComponent/src/components/Header';
import HostComponent from './components/HostComponent';

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <Header />
    <h1>Basic Host-Remote</h1>
    <HostComponent title="Host Landing Page" />
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <Footer />
  </div>
);

export default App;
