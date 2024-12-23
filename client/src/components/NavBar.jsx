import { Link } from "react-router";
import useAuth from "../context/useAuth";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
	const { logout } = useAuth();
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useAuth()

	useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

	const isAuth = () => {
		const token = localStorage.getItem("authtoken");
		if (token) {
			return true;
		}
	};

	return (
		<nav ref={menuRef}  className="flex justify-between p-4 shadow-sm items-center relative">
			<Link to="/">
				<p className="text-2xl">NoteBuddy</p>
			</Link>
			<ul className="capitalize gap-x-4  cursor-pointer hidden sm:flex">
				<li className="hover:opacity-70">
					<Link to="/home">Home</Link>
				</li>
				<li className="hover:opacity-70">
					<Link to="/about">About</Link>
				</li>
				<li className="hover:opacity-70">
					{isAuth() ? (
						// <button to="/dashboard">Dashboard</button>
						<button onClick={logout}>Logout</button>
					) : (
						<Link to="/login">Login</Link>
					)}
				</li>
			</ul>

			{isOpen && (
				<ul className=" lg:hidden menu font-sans cursor-pointer  bg-gray-100 shadow-lg absolute right-0 p-2 z-10 top-16 w-full text-[16px]">
					<li>
						<Link
							to="/home"
							className="block"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className="block"
						>
							About
						</Link>
					</li>
					<li>
						{isAuth() ? (
							<button
								onClick={logout}
								className="block"
							>
								Logout
							</button>
						) : (
							<Link
								to="/login"
								className="block"
							>
								Login
							</Link>
						)}
					</li>
				</ul>
			)}

			{isOpen ? (
				<IoMdClose
					size={25}
					onClick={() => setIsOpen(false)}
				/>
			) : (
				<FiMenu
					size={25}
					onClick={() => setIsOpen(true)}
					className="sm:hidden"
				/>
			)}
		</nav>
	);
};

export default NavBar;
