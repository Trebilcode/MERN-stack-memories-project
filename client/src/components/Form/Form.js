import React, { useState } from 'react'

import {TextField, Button, Typography, Paper} from '@material-ui/core'

import useStyles from './styles'

const Form = () => {
  const classes = useStyles()
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags:'',
    selectedFile: ''
  })
  const handleSubmit = () => {

  }
  return (
    <Paper className={classes.paper} >
      <form autocomplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField value={postData.creator}
          onChange={(e) => setPostData({...postData, creator: e.target.value})} name="creator" variant="outlined" label="Creator" fullWidth/>
          <TextField value={postData.title}
          onChange={(e) => setPostData({...postData, title: e.target.value})}name="title" variant="outlined" label="Title" fullWidth/>
          <TextField value={postData.message}
          onChange={(e) => setPostData({...postData, message: e.target.value})}name="message" variant="outlined" label="Message" fullWidth/>
        <TextField value={postData.tags}
          onChange={(e) => setPostData({...postData, tags: e.target.value})}name="tags" variant="outlined" label="Tags" fullWidth/>
          
        
      </form>
    </Paper>
  )
}

export default Form
