import { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useLocation } from "react-router";
import { MdDelete } from "react-icons/md";
import { FaRobot } from "react-icons/fa6";
import useAuth from "../context/useAuth";
import useAxios from "../utils/useAxios";
import Quill from 'quill'



const Note = () => {
	const location = useLocation()
	const {id} = location.state || null
	const { userId, token } = useAuth();
	const navigate = useNavigate();
	const [mode, setMode] = useState("create");
	const [note, setNote] = useState({
		title: "",
		content: "",
	});
	const api = useAxios()
	

	
    




	useEffect(() => {

		const fetchNote = async () => {
			if (location.state) {
				const res = await api.get(`/note/${id}`)
				setNote({ title: res.data.title, content: res.data.content });
				setMode("update");
			}
		};

		fetchNote();
	}, []);

	const handleUpdate = async (e) => {
		e.preventDefault();

		api.patch(`/note/${id}/update`, {
			title: note.title,
			content: note.content,
		})
		navigate("/home");
	};

	const handleCreate = async (e) => {
		e.preventDefault();

		if (note.content.trim() === "") {
			navigate("/home");
			return;
		}

		api.post('/note/create', {
			title: note.title,
				content: note.content,
				user: userId,
		})
		navigate("/home");
	};

	const handleDelete = async (e) => {
		e.preventDefault();


		api.delete(`/note/${id}/delete`)
		navigate("/home");
	};

	const handleGenerate = async (e) =>{
		e.preventDefault()

		const res = await api.post('note/generate', {
			title: note.title
		})
		console.log(res)



		setNote((prev)=>({...prev, content:res.data.note}))
	}

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

					<div className="delete-btn flex">
						<button onClick={handleDelete}>
							<MdDelete
								size={30}
								color="gray"
								className="hover:opacity-70"
							/>

						</button>
						<button onClick={handleGenerate}>
							<FaRobot
							   size={30}
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
