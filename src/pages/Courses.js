import 'tachyons';
import SideNavbar from '../components/SideNavbar'
import QRCode from 'qrcode.react';
import Footer from 'No/components/Footer';

function Courses() {
	let courseName = "Course Name";
	let courseCode = "Course Code";
	const qrCodeValue = "h1";
	const qrCodeValue2 = "h2";
	const qrCodeValue3 = "h3";
	const qrCodeValue4 = "h4";
	const qrCodeValue5 = "h5";
	return (
		<>
			<SideNavbar />
			<section className='pa2 shadow-1 bg-transparent'>
				<h1 className="tc white">Courses</h1>
				<p className="mb5 tc white">Check out your Course List</p>
				<section className="center shadow-1 pa4 flex flex-row scroll-x w-95">
					<div className="pa3 center fit-content bn bg-white-70 mr2 w-50 shadow-1">
						<QRCode value="192.168.3.241:3000/Login" />
						<h3> {courseName} </h3>
						<p> {courseCode} </p>
						<button disabled className="grow shadow-1"> Course materials </button>
					</div>
				</section>
			</section>
			<Footer />
		</>
	);
}

export default Courses;