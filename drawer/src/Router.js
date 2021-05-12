import React, {useState} from 'react';
import {Route,Link} from "react-router-dom";

import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';

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
          path="/"
          render={() => <Typography>Home</Typography>}
        />
        <Route 
          exact
          path="/page2"
          render={() => <Typography>page2</Typography>}
        />
        <Route 
          exact
          path="/page3"
          render={() => <Typography>page3</Typography>}
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
              to="/"
              onClick={()=> setOpen(false)}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItem>
              <ListItem
                component={Link}
                to = "/page2"
                onClick={()=>setOpen(false)}
              >
                <ListItemIcon>
                  <WebIcon />
                </ListItemIcon>
                <ListItemText>Page 2</ListItemText>
              </ListItem>
              <ListItem
                component={Link}
                to = "/page3"
                onClick={()=>setOpen(false)}
              >
                <ListItemIcon>
                  <WebIcon />
                </ListItemIcon>
                <ListItemText>Page 3</ListItemText>
              </ListItem>
            </List>
            </Drawer>
      </Grid>
      <Grid item>
        <Button onClick = {()=> setOpen(!open)}>
          {open ? 'Hide' : 'Show'} Drawer
        </Button>
      </Grid>
    </Grid>
  );
}


export default withStyles(styles)(DrawerItemNavigation);