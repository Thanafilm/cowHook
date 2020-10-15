import React, { Component } from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
const style = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing(3) ,
		marginRight: theme.spacing(3) ,
		[theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing(3),
	},
});
 class login extends Component {
	constructor(){
        super();
        this.state = {
            email : '',
            password : '',
            errors: {}
        } 
	}
	handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit= (event) =>{
        event.preventDefault();
        const userData = {
            email : this.state.email,
            password : this.state.password
		};
		axios.post('/login',userData)
		.then(res=>{
			console.log(res.data);
			localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
			this.props.history.push('/')
		})
		.catch(err=>{
			this.setState({
				errors :err.response.data
			})
		})

    }
	render() {
		const {classes} = this.props
		return (
			
				<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					ลงชื่อเข้าใช้
       			</Typography>
				<form className={classes.form} onSubmit={this.handleSubmit}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">อีเมล์</InputLabel>
						<Input 
						id="email" 
						name="email" 
						autoComplete="off" 
						autoFocus value={this.state.email} 
						onChange={this.handleChange} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password">รหัสผ่าน</InputLabel>
						<Input 
						name="password" 
						type="password" 
						id="password" 
						autoComplete="off" 
						value={this.state.password} 
						onChange={this.handleChange} />
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={this.handleSubmit}
						className={classes.submit}>
						ลงชื่อเข้าใช้
          			</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						component={Link}
						to="/register"
						className={classes.submit}>
						สมัครสมาชิก
          			</Button>
				</form>
			</Paper>
		</main>
	)
			
		
	}
}
export default withRouter(withStyles(style)(login))
