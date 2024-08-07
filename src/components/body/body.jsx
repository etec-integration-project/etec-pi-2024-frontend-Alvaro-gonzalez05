import './body.css';
import gift from "../../multimedia/El-sito-logo-unscreen.gif";
import {Link} from 'react-router-dom';


export default function Body(){
    return(
        <div className="body1">
            <div classNames="logogif">  
                <img src={gift} alt="" className="gif"/>
            </div>
            <div className="burbujas">
                <div className="burbuja1-padre">
                    <h1>Cafeteria</h1>
                    <Link to="/cafeteria"><div className="burbuja1"></div></Link> 
                </div>
                <div className="burbuja2-padre">
                    <h1>Resto-Bar</h1>
                    <div className="burbuja2">
                    </div> 
                </div>
                <div className="burbuja3-padre">
                    <h1>Sobre Nosotros</h1>
                    <div className="burbuja3">
                    </div> 
                </div>

            </div>
            
        </div>
        
    )
}