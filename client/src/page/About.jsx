import NavBar from "../components/NavBar";
import useAuth from "../context/useAuth";

const About = () => {
	const { updateToken } = useAuth();

	console.log(updateToken());

	return (
		<div>
			<NavBar />

      <button onClick={updateToken}>click me</button>
			<h3>about me!!!!</h3>
		</div>
	);
};

export default About;
