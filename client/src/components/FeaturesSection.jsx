import features from "../assets/features.svg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const FeaturesSection = () => {
	return (
		<div className="flex mt-10 items-center justify-evenly flex-wrap">
			<div>
				<img
					src={features}
					alt=""
					className="w-96 max-sm:w-72"
				/>
			</div>
			<div className="font-ab ">
				<h3 className="font-ab font-semibold text-5xl max-sm:text-4xl">
					Powerful Features
				</h3>
				<ul className="mx-4 mt-4 leading-10 ">
					<li className="font-sans flex items-center">
						<IoMdCheckmarkCircleOutline /> <span className="ml-1">Cloud Sync </span>{" "}
					</li>
					<li className="font-sans flex items-center">
						<IoMdCheckmarkCircleOutline />{" "}
						<span className="ml-1">Customizable Notes</span>
					</li>
					<li className="font-sans flex items-center">
						<IoMdCheckmarkCircleOutline />{" "}
						<span className="ml-1">AI-Powered Note-Taking</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default FeaturesSection;
