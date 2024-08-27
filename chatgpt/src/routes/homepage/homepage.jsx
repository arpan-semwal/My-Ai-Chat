/* eslint-disable no-mixed-spaces-and-tabs */
import {Link} from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
	return(
		<div className = "homepage">
			<img src="../../../public/orbital.png" alt="orbit" className="orbital" />
		 <div className="left">
			<h1>PerfectAi</h1>
			<h2>Supercharge your creativity and productivity</h2>
			<h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Minus quo fugit nesciunt non dolore voluptates animi laudantium deleniti distinction
			</h3>
			
			<Link to="/dashboard">Get Started</Link>
		 </div>
		 <div className="right">
			
		 </div>
		 </div>
	)
}


export default Homepage;