import React from 'react';
import AssigmentListPage from './AssigmentListPage';
import LectureListPage from './LectureListPage';
import QuizPage from './QuizPage';
import {Navigate, Routes, Route } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import MainLayout from './MainLayout';
import NotFound from './NotFound';
import StudentsListPage from "./StudentsListPage";

function App() {
	return (
		<Routes>
      <Route path="/" element={<Navigate to="/lectures" />} />
			<Route path="quiz" element={<QuizPage />} />
			<Route path="/" element={<MainLayout />}>
				<Route path="lectures" element={<LectureListPage />} />
				<Route path="assigments" element={<AssigmentListPage />} />
        		<Route path="Students" element={<StudentsListPage/>} />

        
				<Route path="profile" element={<ProfilePage />} />
			</Route>
			
      <Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
