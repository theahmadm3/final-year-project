import 'tachyons';
import SideNavbar from '../components/SideNavbar'
function Courses() {
	let courseName = "Course Name";
	let courseCode = "Course Code";
	return (
		<>
			<SideNavbar />
			<section>
				<h1 className="tc white">Courses</h1>
				<p className="mb5 tc white">Check out your Course List</p>
				<section className="center shadow-1 pa4 flex flex-row scroll-x w-90">
					<div className="pa3 fit-content bn bg-white-70 mr2 w-50 shadow-1">
						<div className="pa5 bg-black">
						</div>
						<h3> {courseName} </h3>
						<p> {courseCode} </p>
						<button disabled className="grow shadow-1"> Course materials </button>
					</div>
					<div className="pa3 bn bg-white-70 mr2 w-50 shadow-1">
						<div className="pa5 bg-black">
						</div>
						<h3> {courseName} </h3>
						<p> {courseCode} </p>
						<button disabled className="grow shadow-1"> Course materials </button>
					</div>
					<div className="pa3 bn bg-white-70 mr2 w-50 shadow-1">
						<div className="pa5 bg-black">
						</div>
						<h3> {courseName} </h3>
						<p> {courseCode} </p>
						<button disabled className="grow shadow-1"> Course materials </button>
					</div>
					<div className="pa3 bn bg-white-70 mr2 w-50 shadow-1">
						<div className="pa5 bg-black">
						</div>
						<h3> {courseName} </h3>
						<p> {courseCode} </p>
						<button disabled className="grow shadow-1"> Course materials </button>
					</div>
					<div className="pa3 bn bg-white-70 mr2 w-50 shadow-1">
						<div className="pa5 bg-black">
						</div>
						<h3> {courseName} </h3>
						<p> {courseCode} </p>
						<button disabled className="grow shadow-1"> Course materials </button>
					</div>
					<div className="pa3 bn bg-white-70 mr2 w-50 shadow-1">
						<div className="pa5 bg-black">
						</div>
						<h3> {courseName} </h3>
						<p> {courseCode} </p>
						<button disabled className="grow shadow-1"> Course materials </button>
					</div>
					<div className="pa3 bn bg-white-70 mr2 w-50 shadow-1">
						<div className="pa5 bg-black">
						</div>
						<h3> {courseName} </h3>
						<p> {courseCode} </p>
						<button disabled className="grow shadow-1"> Course materials </button>
					</div>
					<div className="pa3 bn bg-white-70 mr2 w-50 shadow-1">
						<div className="pa5 bg-black">
						</div>
						<h3> {courseName} </h3>
						<p> {courseCode} </p>
						<button disabled className="grow shadow-1"> Course materials </button>
					</div>
				</section>
			</section>

		</>
	);
}

export default Courses;