import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import { IoIosContact,IoMdWallet,IoMdTv } from "react-icons/io";
import { GiGraduateCap,GiAbstract050 } from "react-icons/gi";


function SideBarPage() {
	return (
		<div className="pr-2 bg-gray-800 w-64 flex flex-col h-screen justify-between ">
			<div className="flex flex-col ml-4 mt-5 ">
				<h1 className="text-white font-extrabold text-4xl pt-6 mb-5">
					CodeYogi
				</h1>

				<Link  to="/quiz" className="text-white font-medium text-md"><GiAbstract050/>
					Quiz
				</Link> 
				<Link to="/lectures" className="text-white font-medium text-md"><IoMdTv/>
					Lectures
				</Link>
				<Link to="/assigments" className="text-white font-medium text-md"> <IoMdWallet/>
					Assigments
				</Link>

	<Link to="/Students" className="text-white font-medium text-md"><GiGraduateCap/>
					Students
				</Link>
        
			</div>
			<div className="flex flex-col ml-4 mb-5">
				<Link to="/profile" className="text-white font-medium text-md"> <IoIosContact />
					Profile
				</Link  >
				<a
						href="https://app.codeyogi.io/login/"
						className="text-white font-bold inline-block"
	
					> < FiLogOut /> 
						Logout
					</a>

       
			</div>
		</div>
	);
}

export default SideBarPage;
