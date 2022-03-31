import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className="bg-yellow-200 flex flex-col items-center justify-center h-screen">
      
        <h1 className="text-6xl text-red-700">Thoda Dimak lagao yha se jao</h1>
      <Link to="/assigments" className="text-2xl text-blue-600">Go back to do Assigments</Link>
    </div>
	);
}

export default NotFound;
