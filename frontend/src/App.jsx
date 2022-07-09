import { useEffect } from 'react';
// components
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from './redux/slices/auth';

function App() {
	// storing data auth in localstorage
	const auth = useSelector((state) => state.auth.value);
	const dispatch = useDispatch();

	useEffect(() => {
		const data = localStorage.getItem('auth');
		if (data !== null) {
			dispatch(setAuth(JSON.parse(data)));
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		localStorage.setItem('auth', JSON.stringify(auth));
	}, [auth]);

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
