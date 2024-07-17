import React, { useState,useEffect } from "react";
import "./mainCSS.css";
import { Link, Navigate } from "react-router-dom";
import Seclink from "./Seclink";
import img from './images/LOGO-01-01.png'
import img1 from './images/Logodark.png'
import Seclinklogout1 from "./Seclinklogout1";

const Headerwithoutlogin=({mode,nameuser,setshowpageonlogin,onClick})=>{

	const [show,setshow] =useState(false);
 
const reload =()=>{
	Navigate("/home1")
	window.location.reload();

}
const clearlogindata=()=>{
    setshowpageonlogin({});
}

var name =nameuser.split(' ');
 
	return(
            <>
     <div className={mode?"container-fluid headerdark":"container-fluid header"}>
		        <div className="container nav">
						<img className="logo" src={mode?img1:img} alt=""/>
						
						{show?<i onClick={()=>{setshow(!show)}} className="fas fa-times hamburger"></i>:<i onClick={()=>{setshow(!show)}} className="fas fa-align-right hamburger"></i>}
					
						<ul >

				            <li  ><Link to="/Home1" onClick={reload} className={mode?"nav-link col2":"nav-link col1"}>Home</Link></li>
							<li   ><Link to="/about1" className={mode?"nav-link col2":"nav-link col1"} >About me</Link></li>
							<li  ><Link to="/works1" className={mode?"nav-link col2":"nav-link col1"}>Works</Link></li>
							<li  ><Link to="/contact1" className={mode?"nav-link col2":"nav-link col1"}>Contacts</Link></li>
							<li  ><Link to="/gallery1" className={mode?"nav-link col2":"nav-link col1"}><span className="g">G</span>allery</Link></li>
							<li  ><Link to="/login" onClick={clearlogindata} className={mode?" nav-link col2":"nav-link col1"} >Login</Link>
															
														
					
					         
						<div className=" boxuser" aria-labelledby="dropdownMenuButton">
																
					
															
						</div>
						
							</li>
							<li>
							<div   className={mode?"modeicondark":"modeicon"}>
                                <i onClick={onClick} className={mode?"fas fa-sun text-light":"fas fa-moon"}></i>
                        </div>
							</li>
	             </ul>
						
							
				 </div>
				{ show ?<Seclinklogout1 name={name} mode={mode} />:null}
	</div>
</>
        )
    
}
export default Headerwithoutlogin;