import * as React from 'react';
import './body.css'
import logo from '../../multimedia/burbuja1.png';
import elsitio from '../../multimedia/logo.png';
import {Fade, JackInTheBox, Zoom} from 'react-awesome-reveal'
export default function Body(){
    return(
    
        <Fade><div className="pagEntera">
            <div className="pagina1" id='1'>
                <Zoom><img src={elsitio} className='elsitio' /></Zoom>
                <div className="linea">
                  
                    <ul id='b2'> <hr className='lineav' /></ul>
                    <ul className='texto'>CAFETERIA-RESTOBAR</ul>
                   
                </div>
                <JackInTheBox><div className="marco">
                    <div className="info" id='bodytext' > <h1>En nuestra tienda en línea, te ofrecemos la mejor experiencia para disfrutar del auténtico sabor del café desde la comodidad de tu hogar. Explora nuestra selección de cafés recién tostados, deliciosos tés, y acompañamientos perfectos para cualquier momento del día.</h1></div>
                    <img src={logo} alt="" className="logo" />
                </div></JackInTheBox>
                
            </div>

        </div></Fade>
    )
}