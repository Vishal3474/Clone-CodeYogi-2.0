import React from 'react';
import AssigmentListPage from './AssigmentListPage';
import LectureListPage from './LectureListPage';
import QuizPage from './QuizPage';
import {Navigate, Routes, Route } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import Logout from './Logout';
import MainLayout from './MainLayout';
import NotFound from './NotFound';


function App() {
	return (
		<Routes>
      <Route path="/" element={<Navigate to="/lectures" />} />
			<Route path="quiz" element={<QuizPage />} />
			<Route path="/" element={<MainLayout />}>
				<Route path="lectures" element={<LectureListPage />} />
				<Route path="assigments" element={<AssigmentListPage />} />
				<Route path="profile" element={<ProfilePage />} />
			</Route>
			<Route path="logout" element={<Logout />} />
      <Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;