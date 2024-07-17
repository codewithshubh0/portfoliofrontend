


const Section2=({mode})=>{
	return(
        <>
        <div id="1st"></div>
	<div className="container aboutme">

		<div className="row justify-content-center aboutbox" >
		
            <div  className="col-md-4 about text-right">
				<a>ABOUT ME</a>
	           </div>
             
	          
	         
	            <div  className="col-md-6 py-md-1 hii"><a>Hi, This is Anjani Sharma. I am a <strong className={mode?"highdark":"highlight"}>Full Stack Developer</strong>.
 I started out as an artists and then learned Graphic designing During my college Journey.Later on i have learned coding and started Implementing the logic which helped me in creating Some high level Projects like whatsapp web clone, Instagram Clone. I wish to pursue this passion of mine to develop and create things.
			
 Anjani Sharma is a dedicated <strong className={mode?"highdark":"highlight"}>Full Stack Developer</strong> with a diverse background that started in the arts. Transitioning from an <strong className={mode?"highdark":"highlight"}>artist</strong> to a <strong className={mode?"highdark":"highlight"}>graphic designer</strong> during college, Anjani eventually delved into coding. This combination of creativity and technical skills has led to the development of high-level projects like a <strong className={mode?"highdark":"highlight"}>WhatsApp Web clone</strong> and an <strong className={mode?"highdark":"highlight"}>Instagram clone</strong>. Driven by a passion for development and innovation, Anjani continues to pursue the creation of impactful solutions.
			</a></div>
           
			</div>
			
		</div>
	
        </>
    )
}

export default Section2;