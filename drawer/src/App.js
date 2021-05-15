import React, {useState} from 'react';
// // import DrawerTypes from './Drawer';
// import DrawerItemNavigation from './Router';
// import PersistentDrawerLeft from './Persistent';
import DrawerItemNavigation from './Home';
// import DrawerItemNavigation from './MixTest';

import styled, {ThemeProvider} from 'styled-components';





function App() {
  return (
    <div className="App">
      {/* <DrawerTypes /> */}
      {/* <DrawerItemNavigation /> */}
      {/* <PersistentDrawerLeft /> */}
        <DrawerItemNavigation/>
        {/* <DrawerItemNavigation /> */}
    </div>
  );
}

export default App;
