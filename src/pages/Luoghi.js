import "../App.css"
import "../style/Luoghi.css"
import { Link } from "react-router-dom";

function Luoghi(){
    return(
        <div className="luoghi">
            <div className="mappa">
                <h1>La mappa completa</h1>
                <iframe src="https://map.geo.admin.ch/embed.html?lang=it&topic=swisstopo&bgLayer=ch.swisstopo.pixelkarte-farbe&E=2719513.51&N=1097090.12&zoom=5.175723174611727&layers=KML%7C%7Chttps:%2F%2Fpublic.geo.admin.ch%2F1CmKICliQ0Ogqo8AruzcMw" width='600' height='400' />
            </div>
            <div className="highlight">
                <div className="left-text"></div>
                <img src="https://imgix.cosmicjs.com/f2371580-58a0-11eb-a346-972ff09eeb3f-luoghi.png" />
                <div className="right-text">
                    <h1>Gandria</h1>
                    <p>Testo di descrizione per dire quanto sia interessante questo sito</p>
                    <Link>
                        <h3>Scopri di più</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Luoghi