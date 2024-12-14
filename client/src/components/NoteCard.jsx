import React from "react";
import PropTypes from "prop-types";

const NoteCard = ({ note }) => {
	return (
		<div className="shadow-black shadow-sm flex flex-col p-5 border-gray-700 border-2 rounded-md w-96 h-96 hover:border-x-purple-950 hover:scale-105 cursor-pointer">
			<h3 className="py-1 font-semibold">{note.title}</h3>
			<hr />
			<p className="py-2">{note.body}</p>
		</div>
	);
};

NoteCard.propTypes = {
	note: PropTypes.shape({
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
	}).isRequired,
};

export default NoteCard;
