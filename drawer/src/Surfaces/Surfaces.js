import React from 'react'
import {Paper,Card,CardActions,CardContent,Button,Typography} from '@material-ui/core';


import PrimarySearchAppBar from './Appbar';
import SimpleAccordion from './Accordion';

function Surfaces() {
  return (
    <div>
      <h1><i>Surfaces</i></h1>
        <h2>App Bar</h2>
          <p>[contained Buttons]</p>
            <PrimarySearchAppBar />
              <hr />
        <h2>Paper</h2>
          <p>[Variants]</p>
            <Paper variant="outlined"><p>종이.</p></Paper>
              <hr/>
        <h2>Card</h2>
          <p>[Simple Card]</p>
            <Card>
              <CardContent>카드 내용</CardContent>
                <CardActions>
                  <Button variant="outlined" size="small" >클릭</Button>
                </CardActions>
            </Card>
              <hr/>
        <h2>Accordion</h2>
          <p>[Simple accordion]</p>
            <SimpleAccordion />
              <hr/>

        











    </div>
  )
}

export default Surfaces
