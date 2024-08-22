import { Link ,Navigate} from "react-router-dom";
const Seclinklogout=({mode,name,setshowpageonlogin,onClick})=>{
    const clearlogindata=()=>{
        setshowpageonlogin({});
    }

    const reload =()=>{
        Navigate("/home")
        window.location.reload();
     }
	
    return (
        
               <>
               <div className="secondmenu">
			                <li ><Link to="/" onClick={reload} className={mode?"nav-link col2":"nav-link col1"}>Home</Link></li>
							<li   ><Link to="/about1" className={mode?"nav-link col2":"nav-link col1"} >About me</Link></li>
							<li  ><Link to="/works1" className={mode?"nav-link col2":"nav-link col1"}>Works</Link></li>
							<li  ><Link to="/contact1" className={mode?"nav-link col2":"nav-link col1"}>Contacts</Link></li>
							<li  ><Link to="/gallery1" className={mode?"nav-link col2":"nav-link col1"}><span className="g">G</span>allery</Link></li>
							<li ><div className={mode?" nav-link col2user":"nav-link col1user"}>
															
														
                                                     <div className="btn-group ">
															<i type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="logout dropdown-toggle">{ name[0] }</i>
																<div className="dropdown-menu boxuser" aria-labelledby="dropdownMenuButton">
																
																<Link to="/login" onClick={clearlogindata} className="register" >Logout</Link>
															
															</div>
																</div>
														
														
															</div>
							</li>
							<li><div   className={mode?"modeicondarkmobile":"modeiconmobile"}>
                             <i onClick={onClick} className={mode?"fas fa-sun text-light":"fas fa-moon"}></i>
                        </div></li>

				</div>			
	           </>
    )
}
export default Seclinklogout;