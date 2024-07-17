import { Link ,Navigate} from "react-router-dom";
const Seclinklogout1=({mode,name,setshowpageonlogin})=>{
    const clearlogindata=()=>{
        setshowpageonlogin({});
    }

    const reload =()=>{
        Navigate("/home1")
        window.location.reload();
     }
	
    return (
        
               <>
               <div className="secondmenu">
			                <li ><Link to="/home1" onClick={reload} className={mode?"nav-link col2":"nav-link col1"}>Home</Link></li>
							<li   ><Link to="/about1" className={mode?"nav-link col2":"nav-link col1"} >About me</Link></li>
							<li  ><Link to="/works1" className={mode?"nav-link col2":"nav-link col1"}>Works</Link></li>
							<li  ><Link to="/contact1" className={mode?"nav-link col2":"nav-link col1"}>Contacts</Link></li>
							<li  ><Link to="/gallery1" className={mode?"nav-link col2":"nav-link col1"}><span className="g">G</span>allery</Link></li>
							<li  ><Link to="/login" className={mode?" nav-link col2":"nav-link col1"} >Login</Link></li>

				</div>			
	           </>
    )
}
export default Seclinklogout1;