import React,{useState}from "react";
import "./mainCSS.css";
import Type from "./Typical";
import img from './images/mypik-02.png'

const Section1 =({mode,onClick})=>{

 const handleDownload=()=>{
	const atag = document.createElement("a");
	atag.href = '/resume/MyResume_Updated.pdf';
	atag.setAttribute('download','AnjaniResume.pdf')
	document.body.appendChild(atag);
	atag.click();
	atag.remove();
 }
return (
    <>
    <div  id={mode?"bgdark":"bg"}>
  
	

     {/* <div   className={mode?"modeicondark":"modeicon"}>
     <i onClick={onClick} className={mode?"fas fa-sun text-light":"fas fa-moon"}></i>
</div> */}
		<div className="container ">
	
			<div className="row section1box">
				<div className="col nav" >
					<div className="banner-title"  >
						<a><h1 className={mode?"titledark":"title"} >Hi, I'am Anjani </h1></a>
						<p className={mode?"sizedark":"size"} > a  <span className="element"> <Type/></span></p>

						<button  onClick={handleDownload} className="custom-btn btn-12"><span>DOWNLOAD</span><span>RESUME</span></button>
					</div>
				
					<a><div  className="col-md-6 myphoto">
					   <img src={img}  alt=""/>
					</div></a>
				
					
				</div>
			
		</div>
		<div id="about" className="scroll rellax" data-rellax-speed="-6"><br/><i className="fas fa-chevron-down"></i></div>

	</div>
</div>
    </>
)
}

export default Section1;