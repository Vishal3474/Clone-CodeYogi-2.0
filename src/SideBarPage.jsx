import React from 'react';
import { Link } from 'react-router-dom';


function SideBarPage() {
	return (
		<div className="pr-2 bg-gray-800 w-52 flex flex-col h-screen justify-between ">
			<div className="flex flex-col ml-4 ">
				<h1 className="text-white font-extrabold text-3xl pt-6 mb-5">
					CodeYogi
				</h1>

				<Link to="/quiz" className="text-white font-medium text-md">
					Quiz
				</Link> 
				<Link to="/lectures" className="text-white font-medium text-md">
					Lectures
				</Link>
				<Link to="/assigments" className="text-white font-medium text-md">
					Assigments
				</Link>
			</div>
			<div className="flex flex-col ml-4 mb-5">
				<Link to="/profile" className="text-white font-medium text-md">
					Profile
				</Link>
				<a
						href="https://app.codeyogi.io/login/"
						className="text-white font-bold"
						target="_blank"
					>
						Logout
					</a>
			</div>
		</div>
	);
}

export default SideBarPage;
