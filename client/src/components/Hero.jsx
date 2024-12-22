import React from "react";
import Button from "./Button";
import inspirationpana from "../assets/inspirationpana.svg";

const Hero = () => {
	return (
		<div className="wrapper flex mt-10 justify-evenly items-center max-[637px]:flex-wrap sm:max-lg:flex-wrap">
			<div className="text-center">
				<h1 className="text-center sm:text-[90px] text-5xl md:text-[90px] lg:text-[90px] font-ab">
					Your Ideas, Simplified.
				</h1>
				<p className="text-xl p-4 w-4/3 text-[#797575] font-ab m-2">
					Effortlessly capture, organize, and explore your notes with
					NoteBuddy.
				</p>
				<div className="flex justify-center ">
					<Button name={"get started"} />
				</div>
			</div>

			<div className="-order-1 lg:order-none sm:-order-1">
				<img
					src={inspirationpana}
					className="hero-img transform scale-x-[-1] w-[500px]"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Hero;
