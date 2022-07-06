// components
import Wallpaper from './Wallpaper';
import Form from './Form';
// styled components
import { LogInStyles } from '../../styles/login';

function LogIn() {
	return (
		<LogInStyles>
			<Wallpaper />
			<Form />
		</LogInStyles>
	);
}

export default LogIn;
