import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className="bg-gray-900 flex flex-col items-center justify-center h-screen">
      
        <h1 className="text-5xl text-red-500">Page Not Found 404</h1>
      <Link to="/assigments" className="text-2xl text-white rounded-xl mt-8 p-2 bg-indigo-500">Go Back To Assigments Page </Link>
    </div>
	);
}

export default NotFound;
