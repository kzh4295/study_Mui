import React, {useState} from 'react';
import Drawer from "@material-ui/core/Drawer"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
// import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

export default function DrawerTypes ({classes, variant}){
  const [open, setOpen] = useState(false)


return (
    <Grid container justify = "space-between">
      <Grid item>
        <Drawer 
          variant="permanent"
          open={open}
          onClose={()=>setOpen(false)}
          >
            <List>
              <ListItem
                button
                onClick={() => setOpen(false)}
              >
                <ListItemText>Home</ListItemText>
              </ListItem>
              <ListItem
                button
                onClick={() => setOpen(false)}
              >
                <ListItemText>page2</ListItemText>
              </ListItem>
              <ListItem
                button
                onClick={() => setOpen(false)}
              >
                <ListItemText>page3</ListItemText>
              </ListItem>
            </List>
          </Drawer>
      </Grid>
      {/* <Grid item>
        <Button onClick = {() => setOpen(!open)}>
          {open ? 'Hide' : 'Show'} Drawer
        </Button>
      </Grid> */}
    </Grid>
  )
}