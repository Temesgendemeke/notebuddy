import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { Link, useNavigate, useLocation } from "react-router";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import formatdate from "../utils/formatdate";

const NoteCard = ({ note }) => {
	const navigate = useNavigate();

	const getSanitizedContent = (content) => {
		return DOMPurify.sanitize(content); // Sanitize the HTML content
	};

	const handleClick = (e) => {
		navigate("/note", { state: { id: note.id } });
	};

	return (
		<>
			<div
				onClick={(e) => handleClick(e)}
				className="shadow-black justify-between flex flex-col  p-5  border-gray-700 border-2 shadow-sm  rounded-md w-96 h-40 hover:border-x-purple-950 hover:scale-105 cursor-pointer overflow-hidden"
			>
				<div className="flex justify-between ">
					<h3 className="py-1 font-semibold">{note.title}</h3>
				</div>

				<hr />
				<div
					className="py-2"
					dangerouslySetInnerHTML={{
						__html: getSanitizedContent(note.content),
					}}
				></div>

				<div>
					<span className="text-gray-400 text-[12px]">{formatdate(note.updated_at)}</span>
				</div>
			</div>
		</>
	);
};

NoteCard.propTypes = {
	note: PropTypes.shape({
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
	}).isRequired,
};

export default NoteCard;
