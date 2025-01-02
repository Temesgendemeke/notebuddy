import NavBar from "../components/NavBar";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";

const About = () => {
	return (
		<div>
			<NavBar />
	
			<div className="flex-center flex-col items-center">
				<section className="flex justify-center flex-col items-center  mt-2 px-10 w/2 gap-y-2 sm:w-3/4">
					<h2 className="text-center font-ab font-semibold mt-5 text-xl">
						Welcome to Note Buddy
					</h2>
					<p className="font-ab text-lg text-center text-gray-600">
						Your ultimate companion for capturing ideas, staying
						organized, and unleashing creativity.
					</p>
					<p className="font-ab text-lg font-normal text-center text-gray-600">
						At Note Buddy, we believe that great ideas deserve a
						place to grow. Whether you&apos;re a student jotting
						down lecture notes, a professional organizing projects,
						or a writer crafting your next masterpiece, Note Buddy
						provides the space and tools you need to bring your
						thoughts to life.
					</p>
        </section>
      

			<div className="socails flex-center gap-x-4 pb-10 mt-2">
				<Link to="https://github.com/Temesgendemeke/notebuddy">
					<FaGithub size={35} />
				</Link>

				<Link to="mailto:tdemeke36@gmail.com">
					<MdEmail size={35} />
				</Link>
			</div>
      </div>
      
		</div>
	);
};

export default About;
