import { Link } from "react-router";
import PropTypes from "prop-types";
import useAuth from "../context/useAuth";

const Button = ({text}) => {
  const {isAuth} = useAuth();



	return (

		<div
			to="/signup"
			className="bg-black rounded-lg sm:block text-white p-5 sm:w-36 w-72 lg:w-[200px]  mt-2 hover:opacity-90 text-center"
		>
      <Link to={isAuth()?'/home':'/signup' } className="font-ab capitalize">{text}</Link>
		</div>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Button;
