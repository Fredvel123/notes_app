// components
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<LogIn />} />
				<Route path="signup" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
