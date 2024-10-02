import React, {useState} from 'react'
import axios from 'axios'

export const Login: React.FC = ()=>{
    const [email,setEmail]= useState<string>('');
    const [password,setPassword]= useState<string>('');
    const [message,setMessage]= useState<string>('');

    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:3000/api/login',{
                email,
                password
            })
            const token = response.data.token;

            setMessage('Inicio de Sesion Exitoso');

            localStorage.setItem('token',token)
        }catch(error:any){
            setMessage('Error en el inicio de sesion'+error.response.data.message)
        }
    }
     return(
        <>
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <div>
                    <label>Email</label>
                    <input
                    type='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input
                    type='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">Iniciar Sesion</button>
            </form>
            {message && <p>{message}</p>}
        </div>
        </>
     )
}