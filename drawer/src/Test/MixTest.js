// import React, {useState} from 'react';
// import {Route,Link} from "react-router-dom";

// import {withStyles} from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';

// import ListItemText from '@material-ui/core/ListItemText';
// import Typography from '@material-ui/core/Typography';

// const styles = theme => ({
//   alignContent: {
//   alignSelf:'center'
// }
// });

// function DrawerItemNavigation({classes}) {
// const [open, setOpen] = useState(false);

// return (
//   <Grid container justify="space-between">
//       <Grid item className= {classes.alignContent}>
//         <Route 
//               exact
//               path="/Button"
//               render={() => <Typography>Button</Typography>}
//         />
//           <Drawer
//             className={classes.drawerWidth}
//             open = {open}
//             onClose={() => setOpen(false)}
//           >
//               <List>
//                 <ListItem
//                 component={Link}
//                 to="/Button"
//                 onClick={()=> setOpen(false)}
//                 >
//                   <ListItemText>Button</ListItemText>
//               </List>
//         </Grid>
//         </Drawer>
//         <Grid item>
//           <Button onClick = {()=> setOpen(!open)}>
//             {open ? 'Hide' : 'Show'} 
//           </Button>
//         </Grid>
//       </Grid>
//     </Grid>  

//   );
// }


// export default withStyles(styles)(DrawerItemNavigation);
      