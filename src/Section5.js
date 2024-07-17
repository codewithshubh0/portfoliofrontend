import cert from './images/sqkas.jpg'
import cert2 from './images/godhuli group.png'
import cert3 from './images/iirwu education.jpeg'

const Section5=({mode})=>{
return (
    <>
   <div id={mode?"interndark":"intern"} className="section"  >
   <div className={mode?"sectitledark":"sectitle"}>
				<a>Work Experience</a>
			</div>
	<div className="container-fluid internback">
		
        
	<div className="row justify-content-center text-center">
	<div className="col-md-3 accenture" >
				<div className={mode?"internshipdark":"internship"}>
					<a><h1>Accenture</h1></a>
					<h4>Software Developer</h4>
					<p>2 years</p>
					<span><a href="" download=""></a></span><br/><br/>
					<a className="a" href="https://www.accenture.com/in-en" target="_blank">About Organization</a>


				</div>
				 	

			</div>

			<div className="col-md-3 cts" >
				<div className={mode?"internshipdark":"internship"}>
					<a><h1>Cognizant</h1></a>
					<h4>Software Intern</h4>
					<p>6 months</p>
					<span><a href="" download=""></a></span><br/><br/>
					<a className="a" href="https://www.cognizant.com/in/en" target="_blank">About Organization</a>


				</div>
				 	

			</div>
			</div>



        <div className="row justify-content-center text-center">
			
		
			
			
			<div className="col-md-3 one" >
				<div className={mode?"internshipdark":"internship"}>
					<a><h1>HITian Inside</h1></a>
					<h4>Graphic Design</h4>
					<p>3 years+</p>
					<span><a href="" download=""></a></span><br/><br/>
					<a className="a" href="https://www.facebook.com/HITian.Inside/" target="_blank">About Team</a>


				</div>
				 	

			</div>
			<div className="col-md-3 two">
				<div className={mode?"internshipdark":"internship"}>
					<a><h1>SQKAS</h1></a>
					<h4>Graphic Design(Products)</h4>
					<p>1 months</p>
					<span className="cer"><a  className="a" href={cert} download="">Certficate</a></span><br/><br/>
					<a  className="a" href="https://www.facebook.com/SQKAS/" target="_blank">About Company</a><br/>
					
				</div>
				 	
			</div>
		
		</div>
		
		<div className="row justify-content-center text-center">
			
			<div className="col-md-3 three" >
				<div className={mode?"internshipdark":"internship"}>
					<a><h1 >Godhuli Group</h1></a>
					<h5 className="font">Graphic Design & video editor</h5>
					<p>3 months</p>
					<span className="cer"><a  className="a" href={cert2} download="">Certficate</a></span><br/><br/>
					<a  className="a" href="https://www.facebook.com/GodhuliHealthCare" target="_blank">About Company</a>
				</div>


			</div>
			<div className="col-md-3 four">
				<div className={mode?"internshipdark":"internship"}>
				<a><h1>IIRWU Education</h1></a>
					<h4>Graphic Design</h4>
					<p>2 months</p>
					<span className="cer"><a  className="a" href={cert3} download="">Certficate</a></span><br/><br/>
					<a  className="a" href="https://www.linkedin.com/company/iirwu/?originalSubdomain=in" target="_blank">About Company </a>
				</div>
			</div>
		
		</div>
	</div>
<div id="gall"></div>
	
</div>
    </>
)
}

export default Section5;