 import React from 'react';
import MainLayout from './MainLayout';
import Button from './Button';

function ProfilePage() {
	return (
		<div className="bg-gray-100 p-5 grow">
      <div className="bg-white rounded-lg">
        <div>
         <h3 className="p-4 text-lg text-gray-900 font-medium">Personal details</h3> 
         <hr></hr>
        </div>
        <div>
          <div className="flex items-center justify-between px-10 py-4">
            <h6 className="text-sm text-gray-500 font-medium mr-5">First Name </h6>
            <input className="bg-gray-100 px-40 py-2 border border-gray-200 rounded-md" placeholder="First Name" type="text" />
          </div>
          <hr></hr>
        </div>  
        <div>
          <div className="flex items-center justify-between px-10 py-4">
            <h6 className="text-sm text-gray-500 font-medium mr-5">Last Name </h6>
            <input className="bg-gray-100 px-40 border p-2 border-gray-200 rounded-md" placeholder="Last Name" type="text" />
          </div>
          <hr></hr>
        </div> 
        <div>
          <div className="flex items-center justify-between px-10 py-4">
            <h6 className="text-sm text-gray-500 font-medium mr-5">Email address </h6>
            <input className="bg-gray-100 px-40 border  py-2 border-gray-200 rounded-md" placeholder="Email address" type="email" />
          </div>
          <hr></hr>
        </div>  
        <div>
          <div className="flex items-center justify-between px-10 py-4">
            <h6 className="text-sm text-gray-500 font-medium mr-5">Institute Name</h6>
            <input className="bg-gray-100 px-40 border  py-2 border-gray-200 rounded-md" placeholder="Institute Name" type="text" />
          </div>
          <hr></hr>
        </div>  
        <div>
          <div className="flex items-center justify-between px-10 py-4">
            <h6 className="text-sm text-gray-500 font-medium mr-5">Year Of Passout</h6>
            <input className="bg-gray-100  py-2 px-40 border border-gray-200 rounded-md" placeholder="Year Of Passout" type="number" />
          </div>
          <hr></hr>
        </div>  
        <div>
          <div className="flex items-center justify-between px-10 py-4">
            <h6 className="text-sm text-gray-500 font-medium mr-5">Phone Number </h6>
            <input className="bg-gray-100 py-2  px-40 border border-gray-200 rounded-md" placeholder="Phone Number" type="number" />
          </div>
          <hr></hr>
        </div>  
        <div>
          <div className="flex items-center justify-between px-10 py-4">
            <h6 className="text-sm text-gray-500 font-medium mr-5">Date Of Birth</h6>
            <input className="bg-gray-100  py-2 px-40 border border-gray-200 rounded-md" placeholder="Date Of Birth" type="date" />
          </div>
          <hr></hr>
        </div>  
        <div>
          <div className="flex items-center justify-between px-10 py-4">
            <h6 className="text-sm text-gray-500 font-medium mr-5">Device you are using to do your assigments</h6>
            <input className="bg-gray-100  py-2 px-40 border border-gray-200 rounded-md" placeholder="Device" type="text" />
          </div>
          <hr></hr>
        </div>  
         <div>
          <div className="flex items-center justify-between px-10 py-4">
            <h6 className="text-sm text-gray-500 font-medium mr-5">Institute roll no.</h6>
            <input className="bg-gray-100 py-2  px-40 border border-gray-200 rounded-md" placeholder="Roll Number" type="text" />
          </div>
          <hr></hr>
        </div>  
         <div>
          <div className="flex items-center justify-between px-10 py-4">
            <h6 className="text-sm text-gray-500 font-medium mr-5">Branch</h6>
            <input className="bg-gray-100 py-2  px-40 border border-gray-200 rounded-md" placeholder="Branch" type="text" />
          </div>
          <hr></hr><div className="p-5">
						<Button>Update</Button>
					</div>
        </div>  
      </div>
    </div>
	);
}

export default ProfilePage;
