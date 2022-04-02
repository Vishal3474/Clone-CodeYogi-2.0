import React from 'react';
import MainLayout from './MainLayout';



function StudentsList() {
	return (
    <div>

		<div>

<marquee className="text-red-500 font-bold text-3xl" > CodeYogi 2.0 Students List </marquee>
    
		</div>
      
<div class=" p-10  ">
  <div class="bg-gray-300 p-10 w-80 h-80 flex flex-col justify-between items-center rounded-lg shadow-lg ">
    <img class="w-48 h-48 object-cover rounded-full mx-auto " src="" />
    <div class="flex justify-between items-center w-64 h-64 mt-4">
      <div>
        <h1 class="text-black text-xl font-bold"> Vishal </h1>
        <h1 class="text-sky-400 font-bold"> Ceo </h1>
      </div>
      <div class="flex">

    
        <a href="" target="-blank"  >
<img  class="w-8 h-6" src="https://cdn.discordapp.com/attachments/944189291427430421/946749640605323294/images-removebg-preview.png
  "></img>
</a>
        <a href="" target="-blank"> 
        <img class="w-5 h-5 rounded-sm ml-5" src="https://metys.be/wp-content/themes/metys_vs2/images/linkedin_grey.gif" ></img>
        </a>
      </div>
    </div>
  </div>
</div>
</div>
    
	);
}

export default StudentsList;
