/* eslint-disable no-mixed-spaces-and-tabs */
import {Link} from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import "./homepage.css";
import {useState} from "react";

const Homepage = () => {
	
	const [typingStatus , setTypingStatus] = useState("human1");
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
			<div className="imgContainer">
				<div className="bgContainer">
					<div className="bg"></div>
				</div>
				<img src="../../../public/bot.png" alt=""  className="bot"/>
				<div className="chat">
					<img src= {typingStatus === "human1" ? "../../../public/human1.jpeg" : typingStatus === "human2" ? "../../../public/human2.jpeg" : "../../../public/bot.png"} alt="" />
				<TypeAnimation
						sequence={[
							// Same substring at the start will only be typed out once, initially
							'Human1 : We produce food for Mice',
							2000, () => {
								setTypingStatus("bot")
							}, // wait 1s before replacing "Mice" with "Hamsters"
							'Bot : We produce food for Hamsters',
							2000, () => {
								setTypingStatus("human2")
							}, 
							'Human2 :We produce food for Guinea Pigs',
							2000, () => {
								setTypingStatus("bot")
							}, 
							'Bot :We produce food for Chinchillas',
							2000, () => {
								setTypingStatus("human1")
							}, 
						]}
						wrapper="span"
						cursor={true}	 
						repeat={Infinity}
						omitDeletionAnimation={true}
						/>
				</div>
			</div>
		 </div>
		 <div className="terms">
			<img src="../../../public/logo.png" alt="" />
			<div className="links">
				<Link to="/">Terms of service</Link>
				<span>|</span>
				<Link to="/">Privacy Policy</Link>
			</div>
		 </div>
		 </div>
	)
}


export default Homepage;