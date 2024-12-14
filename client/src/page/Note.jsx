import  { useState } from "react";
import NavBar from "../components/NavBar";
import { IoMdSave } from "react-icons/io";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";

const Note = () => {

	const [value, setValue] = useState("");

	return (
		<div className="flex flex-col">
			<NavBar />
			<div>
				<div className="size-fit ">
					<Link
						to="/"
					>
						<IoIosArrowRoundBack size={40} />
					</Link>
				</div>
			</div>

			<div className="note p-2">
				<div className="flex">
					<input
						type="text"
						placeholder="enter title"
						class="border-2 mb-2 h-10 p-4 w-full"
					/>

					<Link to="/">
						<IoMdSave size={40} />
					</Link>
				</div>
				<ReactQuill
					theme="snow"
					value={value}
					onChange={setValue}
					className="h-screen"
				/>
				;
			</div>
		</div>
	);
};

export default Note;
