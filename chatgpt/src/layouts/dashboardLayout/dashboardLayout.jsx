/* eslint-disable no-mixed-spaces-and-tabs */
import {useEffect, useState} from "react";
import "./dashboardLayput.css";
import {useAuth} from "@clerk/clerk-react";
import {Outlet, useNavigate} from "react-router-dom";

const DashboardLayout = () => {
	
	//useAuth will give me my user id
	const {userId , isLoaded} = useAuth();
	const navigate = useNavigate();
	
	
	//if loading process is completed and we do not have 
	//userId it means we are not authenticated 
	//so we will navigate to sign in page
	 useEffect(() => {
		if(isLoaded && !userId){
			navigate("/sign-in");
		}
	 },[isLoaded , userId , navigate]);
	 
	 
	 if(!isLoaded) return "loading......"
	
	return (
		<div className="dashboardLayout">
			<div className="menu">MENU</div>
			<div className="content">
				<Outlet/>
			</div>
		</div>
	)
}


export default DashboardLayout;