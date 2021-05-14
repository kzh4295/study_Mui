import React from 'react'
import {Breadcrumbs,Typography,Link} from '@material-ui/core';
import Bottomnavigation from './BottomNavigation';
import CustomSeparator from './CutsomSeperator';
import PersistentDrawerLeft from './PersistentDrawer';
import LongMenu from './Maxheightmenus';
import LabelStepper from './LabelStepper';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function Navigation() {
  return (
    <div>
      <h1><i>Navigation</i></h1>
      <h2>Bottom Navigation</h2>
      <p>[Bottom Navigation]</p>
      <Bottomnavigation />
      <hr />
      <h2>Breadcrumbs</h2>
      <p>[Custom seperator]</p>
      <CustomSeparator/>
      <hr/>
      <h2>Drawer</h2>
      <p>[Persistent drawer]</p>
      {/* <PersistentDrawerLeft/> */}
      코드 주석처리
      <hr/>
      <h2>Link</h2>
      <p>[Simple links]</p>
      <Link href="#" onClick={(e) => e.preventDefault}>
        Link
      </Link>
      <hr/>
      <h2>Menu</h2>
      <p>[Max height menus]</p>
      <LongMenu />
      <hr/>
      <h2>Stepper</h2>
      <p>[Linear-Alternative Label]</p>
      <LabelStepper />
      <hr/>





    </div>
  )
}

export default Navigation
