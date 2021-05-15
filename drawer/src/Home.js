import React, {useState} from 'react';
import {Route,Link} from "react-router-dom";

import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import Inputs from './Inputs/Inputs';
import Navigation from './Navigation/Navigation';
import Surfaces from './Surfaces/Surfaces'
import Feedback from './Feedback/Feedback';




const styles = theme => ({
    alignContent: {
    alignSelf:'center'
  }
});

function DrawerItemNavigation({classes}) {
  const [open, setOpen] = useState(false);
  
  return (
    <Grid container justify="space-between">
      <Grid item className= {classes.alignContent}>
        <Route 
          exact
          path="/Inputs"
          render={() =>   
          <div>
            <Inputs />
          </div>
          }
        />
        <Route 
          exact
          path="/Navigation"
          render={() =>   
          <div>
            <Navigation />
          </div>
          }
        />
        <Route 
          exact
          path="/Surfaces"
          render={() => <div><Surfaces/></div>}
        />
        <Route 
          exact
          path="/Feedback"
          render={() => <div><Feedback/></div>}
        />




        <Route 
          exact
          path="/여기"
          render={() => <div>여기</div>}
        />


      </Grid>
      <Grid item>
          <Drawer
            className={classes.drawerWidth}
            open = {open}
            onClose={() => setOpen(false)}
            >
            <List>
              <ListItem
              component={Link}
              to="/Inputs"
              onClick={()=> setOpen(false)}
              >
                <ListItemText>Inputs</ListItemText>
              </ListItem>
              <ListItem
              component={Link}
              to="/Navigation"
              onClick={()=> setOpen(false)}
              >
                <ListItemText>Navigation</ListItemText>
              </ListItem>
              <ListItem
                component={Link}
                to = "/Surfaces"
                onClick={()=>setOpen(false)}
              >
                <ListItemText>Surfaces</ListItemText>
              </ListItem>
              <ListItem
                component={Link}
                to = "/Feedback"
                onClick={()=>setOpen(false)}
              >
                <ListItemText>Feedback</ListItemText>
              </ListItem>








              <ListItem
                component={Link}
                to = "/여기"
                onClick={()=>setOpen(false)}
              >
                <ListItemText>여기</ListItemText>
              </ListItem>
            </List>
            </Drawer>
      </Grid>
      <Grid item>
        <Button onClick = {()=> setOpen(!open)}>
          {open ? '목록닫기' : '목록 보기'} 
        </Button>
      </Grid>
    </Grid>
  );
}


export default withStyles(styles)(DrawerItemNavigation);