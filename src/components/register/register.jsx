import './register.css';
import { SiGoogle } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import {Link} from 'react-router-dom';




export default function Register() {

  
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
                            <form className='form'>
                                <label >
                                    <AiOutlineUser/>
                                    <input type="text" name="username" placeholder="Nombre de usuario"/>
                                </label>
                                <label >
                                    <AiOutlineMail/>
                                    <input type="email" name="email"  placeholder="Email"/>
                                    
                                </label>
                                <label >
                                    <BiLockAlt/>
                                    <input type="password" name="password"  placeholder="Contraseña"/>
                                </label>
                                <label >
                                    <BsArrowRepeat/>
                                    <input type="password"name="password2"  placeholder="Repetir contraseña"/>
                                </label>
                                <input type="submit"  value="Registrarse"/>
                            </form>     
                        </div>
                    </div>
                </div>
            
        </div>
    )
}