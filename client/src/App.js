import { Route, Routes, Navigate } from "react-router-dom";
import Master from "./Components/Master/index";
import Signup from "./Components/SignUp/sign";
import Login from "./Components/LoginUp/login";

function App() {
	const user = localStorage.getItem("token");

	return (
    <>
		<Routes>
			{user && <Route path="/" element={<Master />} />}
			<Route path="/signup"  element={<Signup />} />
			<Route path="/login"  element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
    </>
	);
}

export default App;
