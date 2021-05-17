import "../App.css";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import React, {useState} from 'react';

function Menu(props){
  if(window.innerWidth >800 || props.open){
    return(
      <div className="menu">
        <ul>
          <Link to="/" onClick={()=>props.setOpen(!props.open)}>
            <li>Home</li>
          </Link>
          <Link to="/chisiamo" onClick={()=>props.setOpen(!props.open)}>
            <li>Chi siamo</li>
          </Link>
          <Link to="/luoghi" onClick={()=>props.setOpen(!props.open)}>
            <li>Luoghi</li>
          </Link>
          <Link to="/articoli" onClick={()=>props.setOpen(!props.open)}>
            <li>Articoli</li>
          </Link>
        </ul>
      </div>
  )
  }else{
    return(
      <div class="menu-placeholder"></div>
    )
  }
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="nav">

          <h1><Link to="/">SWISSMETALDETECTING</Link></h1>

      <div className="menu-icon">
        <img src="https://imgix.cosmicjs.com/06878af0-617b-11eb-8b40-b9318dd72c70-menu-icon.png" onClick={()=>setOpen(!open)}/>
      </div>
        <Menu open={open} setOpen={setOpen}/>
      </div>
  );
}
export default Navbar;
