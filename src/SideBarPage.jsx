import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import { IoIosContact,IoMdWallet,IoMdTv } from "react-icons/io";
import { GiGraduateCap,GiAbstract050 } from "react-icons/gi";


function SideBarPage() {
	return (
		<div className="pr-2 bg-gray-800 w-64 flex flex-col h-screen justify-between ">
			<div className="flex flex-col ml-4 mt-4 ">
				<h1 className="text-white font-extrabold text-4xl pt-6 mb-5">
					CodeYogi
				</h1>

				<Link  to="/quiz" className="text-white font-medium text-xl flex items-center hover:bg-gray-700 hover:rounded-md hover:px-2 mb-3"><GiAbstract050/>
					Quiz
				</Link> 
				<Link to="/lectures" className="text-white font-medium text-xl flex items-center hover:bg-gray-700 hover:rounded-md hover:px-2 mb-3"><IoMdTv/>
					Lectures
				</Link>
				<Link to="/assigments" className="text-white font-medium text-xl flex items-center hover:bg-gray-700 hover:rounded-md hover:px-2 mb-3"> <IoMdWallet/>
					Assigments
				</Link>

	<Link to="/Students" className="text-white font-medium text-xl flex items-center hover:bg-gray-700 hover:rounded-md hover:px-2 mb-3"><GiGraduateCap/>
					Students
				</Link>
        
			</div>
			<div className="flex flex-col ml-4 mb-5">
				<Link to="/profile" className="text-white font-medium text-xl flex items-center hover:bg-gray-700 hover:rounded-md hover:px-2 mb-3"> <IoIosContact />
					Profile
				</Link  >
				<a
						href="https://app.codeyogi.io/login/"
						className="text-white font-bold inline-block flex items-center hover:bg-gray-700 hover:rounded-md hover:px-2 text-xl mb-1"
	
					> < FiLogOut /> 
						Logout
					</a>

       
			</div>
		</div>
	);
}

export default SideBarPage;
