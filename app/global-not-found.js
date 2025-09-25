import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
	title: '404 - Page Not Found',
	description: 'The page you are looking for does not exist.',
};

export default function GlobalNotFound() {
	return (
		<html lang='en' className={montserrat.className}>
			<body className='notfoundpage'>
				<h1 className='notfound-title'>404</h1>
				<p className='notfound-subtitle'>Sorry, Page Not Found</p>
				<p className='notfound-text'>
					Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet.
					Pulvinar neque laoreet suspendisse interdum consectetur libero id
					faucibus nisl.
				</p>
				<a className='notfound-link' href='/'>
					Back to home
				</a>
			</body>
		</html>
	);
}
