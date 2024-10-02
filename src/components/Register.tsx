import React, {useState} from 'react';
import axios from 'axios';

interface RegisterFormProps{}

export const Register: React.FC<RegisterFormProps> = ()=>{

    const [email,setEmail]= useState<string>('');
    const [password,setPassword]= useState<string>('');
    const [message,setMessage]= useState<string>('');

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:3000/api/register',{
                email,
                password
            });
            setMessage('Registro Exitoso');
        }catch(error:any){
            setMessage('Error en el registro'+error.response.data.message)
        }
        
    }

    return(
        <>
        <div>
            <h2>Registro</h2>
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
                <button type="submit">Registrarse</button>
            </form>
            {message && <p>{message}</p>}
        </div>
        </>
    )
}