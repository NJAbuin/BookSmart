import React from 'react'
import axios from 'axios'
import Login from '../components/Login'
import { connect } from 'react-redux'
import { receiveUser, emptyUser } from '../store/actions/user'


class LoginContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            emailInput : '',
            passwordInput: '',
        }
        this.handleEmailInput =  this.handleEmailInput.bind(this)
        this.handlePasswordInput = this.handlePasswordInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLogout = this.handleLogout.bind(this)

    }

    handleEmailInput(evt){
        this.setState({emailInput: evt.target.value})
    }

    handlePasswordInput(evt){
        this.setState({passwordInput: evt.target.value})
    }

    handleSubmit(evt){
        evt.preventDefault()
        if(this.state.emailInput && this.state.passwordInput){
            axios.post('/auth/login', {email: this.state.emailInput, password: this.state.passwordInput})
            .then(res => res.data)
            .then(user => {
                this.props.receiveUser(user)
            })
        }
        
    }

    handleLogout(){
        axios.get('/auth/logout')
        .then(()=>this.props.emptyUser())

    }

    

    render(){
        const userLogged = this.props.user != ''
        return (
        
        <Login handleSubmit={this.handleSubmit} 
            handleEmailInput={this.handleEmailInput}  handlePasswordInput={this.handlePasswordInput} handleLogout={this.handleLogout}/>)
    }

    
}

  const mapDispatchToProps = {
     receiveUser,
     emptyUser,
  }

 

  const mapStateToProps = ({ user }) => ({
    user
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)