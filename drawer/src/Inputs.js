import React from 'react';
import {Button,ButtonGroup,Checkbox,FormGroup,FormControl,Fab,Radio,RadioGroup,FormControlLabel,FormLabel,Typography,Slider,valuetext,Switch,TextField} 
from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import DateAndTimePickers from './date';
import SimpleSelect from "./select"
import RangeSlider from "./Slider"
import TransferList from './Transfer'

function Inputs() {
  return (
    <div> 
          <h1><i>Inputs</i></h1>
            <h2>Button</h2>
            [contained Buttons]
            <br />
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" disabled>
              Disabled
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
              Link
            </Button>
            <hr />
            <h2>Button Group</h2>
            [Vertical group]
            <br />
            <ButtonGroup
              orientation="vertical"
              color="primary"
              aria-label="vertical outlined primary button group"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <hr/>
            <h2>Checkbox</h2>
            [Label placement]
            <br />
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row></FormGroup>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" />}
                    label="End"
                    labelPlacement="end"
                  />
              </FormControl>
            <hr />
            <h2>Floating Action Button</h2>
            [Floating Action Button]
            <p />
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
            <hr />
            <h2>Date/Time</h2>
            [Date & Time pickers]
            <p/>
            <DateAndTimePickers/>
            <hr />
            <h2>Radio</h2>
            [Label placement]
            <br />
            <FormControl component="fieldset">
              <FormLabel component="legend"></FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="top"></RadioGroup>
                <FormControlLabel value="end" control={<Radio color="primary" />} label="End" />
            </FormControl>
            <hr />
            <h2>Select</h2>
            [Simple Select]
            <SimpleSelect/>
            <hr/>
            <h2>Slider</h2>
            [Label always visible]
            <RangeSlider/>
            <hr />
            <h2>Switch</h2>
            [Label placement]
            <br />
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="on"
                  control={<Switch color="primary" />}
                  label="on"
                  labelPlacement="on"
                />
              </FormGroup>
            </FormControl>
            <hr />
            <h2>TextField</h2>
            [Basic]
            <p/>
            <TextField 
              id = "outlined-basic"   
              label="휴대폰번호"  
              variant="outlined" 
              placeholder="휴대폰번호"
              >
            </TextField>
            <hr />
            <h2>Transfer List</h2>
            [Enhanced Transfer List]
            <p/>
            <TransferList />





    </div>
  )
}

export default Inputs
