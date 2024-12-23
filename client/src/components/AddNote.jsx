import PropTypes from "prop-types";

const AddNote = ({ show }) => {
	return (
		<div
			className={`${
				!show && "hidden"
			} flex flex-col  w-screen h-full inset absolute  bg-black`}
		>
			<input
				type="text"
				name=""
				id=""
			/>
		</div>
	);
};

AddNote.propTypes = {
	show: PropTypes.bool.isRequired,
};


export default AddNote;
