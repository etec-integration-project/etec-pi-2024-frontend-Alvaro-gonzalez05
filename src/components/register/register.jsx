import './register.css';
import { SiGoogle } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

import { BiArrowBack } from "react-icons/bi";
import {Link} from 'react-router-dom';



import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/register", {
        username,
        email,
        password,
      });
      alert(response.data.message);

       // Guarda el token en localStorage si existe
       if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        window.location.href = "/"; // Redirige al usuario después de registrarse
      } else {
        alert("No se recibió un token. Inténtalo nuevamente.");
      }

    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("El usuario ya existe. Por favor, elige otro correo electrónico.");
      } else if (error.response && error.response.status === 400) {
        alert("Por favor, completa todos los campos.");
      } else {
        alert("Error registrando usuario. Inténtalo nuevamente.");
      }
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="body">
    <div className="contenedor-form">
        
        <div className="info">
            <div className="back">
                <Link to="/"><BiArrowBack/></Link>
            </div>
            <div className="info-childs">
                <h2>Bienvenido</h2>
                <p>Para unirte a nuestra comunidad porfavor Inicie Sesion con sus datos</p>
                <Link to="/login"><input type="button" value="Iniciar sesion"/></Link>
            </div>
        </div>
        <div className="form-info">
            <div className="form-info-childs">
                <h2>Crear Cuenta</h2>
                <div className="icons">
                    <div className="burbujagoogle">
                       <SiGoogle /> 
                    </div>
                    <div className="burbujatelefono">
                        <AiFillPhone/>
                    </div>
                </div>
                <p>o usa tu email para registrarte</p>
                <form className='form' onSubmit={handleRegister}>
                    <label >
                        <AiOutlineUser/>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />

                    </label>
                    <label >
                        <AiOutlineMail/>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                        
                    </label>
                    <label >
                        <BiLockAlt/>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                        </label>
                    
                    <input type="submit"  value="Registrarse"/>
                </form>     
            </div>
        </div>
    </div>

</div>
    
  );
};

export default Register;
