import React from 'react';
import MainLayout from './MainLayout';
import TeamCard from './TeamCard';


function StudentsList() {
	return (
		<div>

<marquee className="text-red-500 font-bold text-3xl" > CodeYogi 2.0 Students List </marquee>
      
         <TeamCard name="Vishal" title="CEO" photo="https://cdn.discordapp.com/attachments/944189291427430421/946420617199124500/vkjpg.jpg" linkdin="https://www.linkedin.com//" twitter="https://twitter.com/login" ></TeamCard>
      
		</div>
	);
}

export default StudentsList;
