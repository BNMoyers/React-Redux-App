/*dependencies*/
import React from 'react';

/*components*/

import Header from './components/Header';
import NavTabs from './components/Nav';
import AppRouter from './components/AppRouter'


function App() {
  return (
   <main>
     <Header />
     <NavTabs />
     <AppRouter />
   </main>)
}

export default App;
