import React from 'react';
import CircularStatic from './Progress';
import AlertDialog from './Alert'
import SimpleBackdrop from './Backdrop';
import {SnackbarContent,Button,handleToggle,} from '@material-ui/core'


function Feedback() {
  return (
    <div>
      <h1><i>Feedback</i></h1>
        <h2>Progress</h2>
          <p>[Circular with label]</p>
            <CircularStatic />
            <hr />
      <h2>Dialog</h2>
        <p>[Alerts]</p>
        <AlertDialog />
            <hr/>
      <h2>Snackbar</h2>
        <p>[Message Length]</p>
        <SnackbarContent
          message={
            'ooo매니저님 xx오피스텔에 수건 미배송되었습니다.'
          }
        />
          <hr/>     
          <h2>Backdrop</h2>
          <p>[Backdrop]</p>
            <SimpleBackdrop/>
            <hr/>




    </div>
  )
}

export default Feedback
