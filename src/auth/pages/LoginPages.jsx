import { useContext, useState, useTransition } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/UseForm"
import { AuthContext } from "../context/AuthContext"


export const LoginPages = () => {

    const { login, } = useContext( AuthContext )

    
    const navigate = useNavigate()
    const { onInputChange }=useForm()

    const onLogin = (event)=>{
        
        event.preventDefault()
        if(event.target[0].value.length <= 1) return;
        const name = event.target[0].value;

        login(name)

        navigate('marvel', {
            replace: true
        })
    }


    return (
        <div className="container mt-5">
            <h1>Login </h1>
            <hr></hr>

            <form onSubmit={ onLogin }>
                <input
                    type="text"
                    placeholder='User Name'
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    //value={ searchText }
                    onChange={ onInputChange }
                />
        
                <button 
                    className="btn btn-dark mt-3"
                    >
                    Login
                </button>

            </form>
                
        
            
        </div>
    )
}
