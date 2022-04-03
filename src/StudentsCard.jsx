import React from "react";

function StudentsCard({user}) {
    return (
<div class=" p-10  ">
  <div class="bg-gray-700 p-10 w-80 h-80 flex flex-col justify-between items-center rounded-lg shadow-lg ">
    <img class="w-48 h-48 object-cover rounded-full mx-auto " src={user.picture.large } alt="No image" />
    <div class="flex justify-between items-center w-64 h-64 mt-4">
      <div>
        <h1 class="text-white text-md font-bold"> {user.name.title} {user.name.first} {user.name.last}  </h1>
        <h1 class="text-sky-400 font-bold">{user.location.country } </h1>
      </div>
      <div class="flex">

    
        <a href="" target="-blank"  >
<img  class="w-8 h-6" src="https://cdn.discordapp.com/attachments/944189291427430421/946749640605323294/images-removebg-preview.png
  "></img>
</a>
        <a href="" target="-blank"> 
        <img class="w-5 h-5 rounded-sm ml-5" src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG15.png" ></img>
        </a>
      </div>
    </div>
  </div>
</div>
    );
}

export default StudentsCard;