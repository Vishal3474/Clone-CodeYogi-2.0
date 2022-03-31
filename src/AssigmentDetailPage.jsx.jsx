import React from 'react';
import {useParams } from 'react-router-dom';

function AssigmentDetailPage() {
  const data = useParams();
  
	return (
		<div className="bg-gray-200 h-screen flex items-center justify-center">
     <h1 className="text-3xl">assigment details</h1>
    </div>
	);
}

export default AssigmentDetailPage;