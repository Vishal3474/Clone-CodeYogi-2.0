import React from 'react';
import SideBarPage from './SideBarPage';
import { Outlet } from 'react-router-dom';

function MainLayout(props) {
	return (
		<div className="flex items-stretch h-screen">
			<SideBarPage />
			<div className="p-12 bg-gray-100 grow overflow-y-scroll">
				<Outlet />
			</div>
		</div>
	);
}

export default MainLayout;
