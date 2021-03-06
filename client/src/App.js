import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts'

import memories from './images/memories.png';
import useStyles from './styles';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

const App = () => {
  const classes = useStyles();
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])
	return (
		<Container maxWidth='lg'>
			<AppBar className={classes.appBar} position='static' color='inherit'>
				<Typography className={classes.heading} variant='h2' align='center'>
					Memories
				</Typography>
				<img
					className={classes.image}
					height='60'
					src={memories}
					alt='memories'
				/>
			</AppBar>
			<Grow in>
				<Container>
					<Grid container justify='space-between' alignItems='stretch'>
						<Grid item xs={12} sm={7}>
							<Posts />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
