import React, { Component } from 'react'
import axios from 'axios'

class signup extends Component {
    constructor(){
        super();
        this.state={
            email :'',
            username : '',
            password :'',
            confirmpassword : '',
            name : '',
            lastname : '',
            gender : '',
            idno : '',
            phone : '',
            address : '',
            birthdate : '',
            errors : {}      
        }
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit= (event) =>{
        event.preventDefault();
        const NewUser = {
            email : this.state.email,
            password : this.state.password,
            confirmpassword : this.state.confirmpassword,
            username : this.state.username,
            name : this.state.name,
            lastname : this.state.lastname,
            gender :this.state.gender,
            idno : this.state.idno,
            phone : this.state.phone,
            address : this.state.address,
            birthdate : this.state.birthdate

		};
		axios.post('/signup',NewUser)
		.then(res=>{
            console.log(res.data);
            localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`)
			this.props.history.push('/')
		})
		.catch(err=>{
			this.setState({
				errors :err.response.data
			})
		})

    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default signup;