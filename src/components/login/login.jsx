import './login.css';
import { BiArrowBack } from "react-icons/bi";
import { SiGoogle } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

import React from 'react';    

import { BiLockAlt } from "react-icons/bi";
import {Link} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      alert(response.data.message);
      // Aquí puedes guardar el token en localStorage o en un contexto global
      // localStorage.setItem("token", response.data.token);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Credenciales incorrectas. Por favor, verifica tu correo y contraseña.");
      } else {
        alert("Error iniciando sesión. Inténtalo nuevamente.");
      }
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
        <div className="body">
            <div className="contenedor-form">
                <div className="info">
                    <div className="back1">
                        <Link to="/"><BiArrowBack/></Link>
                    </div>
                    <div className="info-childs">
                            <h2>Bienvenido</h2>
                            <p>Para ingresar a nuestra comunidad Inicie Sesion</p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <p>¿No tienes Cuenta?</p>
                            <Link to="/register"><input type="button" value="Registrarse"/></Link>
                        </div>
                </div>
                <div className="form-info">
                    <div className="form-info-childs">
                        <h2>Inicie Sesion</h2>
                        <div className="icons">
                                <div className="burbujagoogle">
                                   <SiGoogle /> 
                                </div>
                                <div className="burbujatelefono">
                                    <AiFillPhone/>
                                </div>
                            </div>
                            <p>o usa tu nombre de usuario</p>
                            <form className='form' onSubmit={handleLogin}>
                                <label >
                                    <AiOutlineUser/>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                                    </label>
                                
                                <label >
                                    <BiLockAlt/>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                                    </label>
                                
                                <input type="submit" value="Iniciar sesion"/>
                            </form> 
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  );
};

export default Login;


