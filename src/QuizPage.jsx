import React from 'react';

function QuizPage() {
	return (
		<div className="h-screen">
			<div className="bg-gray-800 h-12">
				<div className="flex justify-between items-center">
					<div className="flex  ml-12 space-x-2 font-semibold text-white">
						<span>
							<div>
								<a href="/lectures">
									<span className=" font-semibold text-white" />CodeYogi
								</a>
							</div>
						</span>
						<span>|</span>
						<span className="font-semibold text-white">Welcome, Vishal</span>
					</div>
					<div className="flex space-x-4 mt-1 mr-5">
						<div className="flex items-center  px-1 py-2 bg-blue-600 text-white justify-center undefined">
							<p className="ml-1">00:00</p>
						</div>
						<button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-300">
							Logout
						</button>
					</div>
				</div>
			</div>
      <h1 className="flex justify-center mt-40">No Active Question</h1>
		</div>
	);
}

export default QuizPage;
