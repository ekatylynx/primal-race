import Header from '../../components/Header/Header';
// import Footer from ...;

export default function WithLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<main>{children}</main>
			{/* <Footer /> */}
		</>
	);
}
