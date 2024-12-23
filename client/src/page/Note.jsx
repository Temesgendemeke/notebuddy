import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useLocation } from "react-router";
import { MdDelete } from "react-icons/md";
import useAuth from "../context/useAuth";

const Note = () => {
	const { userId, token } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const [noteId, setNoteId] = useState();
	const [mode, setMode] = useState("create");
	const [note, setNote] = useState({
		title: "",
		content: "",
	});




	useEffect(() => {
		const fetchNote = async () => {
			if (location.state) {
				const res = await fetch(`http://127.0.0.1:8000/note/`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				const data = await res.json();
				console.log(data)
				setNote({ title: data.title, content: data.title });
				setNoteId(data.id);
				setMode("update");
			}
		};

		fetchNote();
	}, []);

	const handleUpdate = async (e) => {
		e.preventDefault();

		await fetch(`http://127.0.0.1:8000/note/${noteId}/update`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: note.title,
				content: note.content,
			}),
		});
		navigate("/home");
	};

	const handleCreate = async (e) => {
		e.preventDefault();

		if (note.content.trim() === "") {
			navigate("/home");
			return;
		}

		await fetch(`http://127.0.0.1:8000/note/create`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: note.title,
				content: note.content,
				user: userId,
			}),
		});
		navigate("/home");
	};

	const handleDelete = async (e) => {
		e.preventDefault();

		await fetch(`http://127.0.0.1:8000/note/${noteId}/delete`, {
			method: "DELETE",
		});
		navigate("/home");
	};

	return (
		<div className="flex flex-col">
			<NavBar />
			<div>
				<div className="size-fit ">
					<button
						onClick={mode == "create" ? handleCreate : handleUpdate}
						className="mx-1"
					>
						<IoIosArrowRoundBack size={40} />
					</button>
				</div>
			</div>

			<div className="note p-2">
				<div className="flex gap-1 items-center">
					<input
						type="text"
						placeholder="enter title"
						className="mb-2 h-10 px-2 w-full border-2 border-gray-300"
						value={note.title}
						onChange={(e) =>
							setNote((prev) => ({
								...prev,
								title: e.target.value,
							}))
						}
					/>

					<div className="delete-btn">
						<button onClick={handleDelete}>
							<MdDelete
								size={25}
								color="gray"
								className="hover:opacity-70"
							/>
						</button>
					</div>
				</div>
				<ReactQuill
					theme="snow"
					value={note.content}
					onChange={(content) =>
						setNote((prev) => ({ ...prev, content }))
					}
					className="h-screen"
				/>
			</div>
		</div>
	);
};

export default Note;
