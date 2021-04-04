import React,{useState, useContext} from 'react'
import { Redirect } from 'react-router-dom'
import  { AuthContext } from '../AuthService'
import firebase from '../config/firebase'
import {Button} from '@material-ui/core'

const Login = ({history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const user = useContext(AuthContext)
    if (user) {
        return <Redirect to="/" />;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() =>{
                history.push("/")               
            })
            .catch(err => {
                console.log(err)
            }) 
            
    }
    

    return (
        <>
            <h1>Login</h1>        
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        onChange={e => setEmail(e.target.value)} 
                        type='email' 
                        id='email' 
                        name='email' 
                        placeholder='Email'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={e => setPassword(e.target.value)} 
                        type='password' 
                        id='password' 
                        name='password'
                        placeholder='password' 
                    />
                </div>
                <Button type='submit'>Login</Button>
            </form>
        </>
    )
}

export default Login
