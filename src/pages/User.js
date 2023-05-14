import 'tachyons';
import Image from "next/image";
import userPic from '../Images/Rick.jpg';
import Course from '../Images/course.png';
import SideNavbar from '../components/SideNavbar'

function User() {
    let Department = "Student Department";
    let studentID = "1010101010";
    let studentName = "Name LastName";
    let story = "Static images: For images that don't change frequently, you can put them in the public folder at the root of your Next.js project. Then, you can reference them using the /public prefix in the src attribute of an img tag.For example, if you have an image my-image.png in the public folder, you can use it like this:";
    return (
        <>
            <SideNavbar />
            <div className="pa2 userPage shadow-1 bg-transparent">
                <header className="pa2 flex center flex-row">
                    <Image className="pa1  br-100 userImg" src={userPic} alt="user logo" width={50} height={65} />
                    <h2 className="w-80 tc"> Welcome To Your Profile </h2>
                </header>
                <section className="flex flex-row pl2">
                    <div className="w-60">
                        <div className="pa2 shadow-1 grow ma2 bg-white">
                            Student Name: <br />
                            <br />
                            {studentName}
                        </div>
                        <div className="pa2 shadow-2 grow ma2 bg-white">
                            ID: <br />
                            <br />
                            {studentID}
                        </div>
                        <div className="pa2 shadow-3 grow ma2 bg-white">
                            Department: <br />
                            <br />
                            {Department}
                        </div>
                    </div>
                    <div className="w-40 pa2">
                        <Image className='br3 shadow-1 grow' src={userPic} alt="user logo" width={100} height={245} />
                    </div>
                </section>
                <section className="pa2 bg-white ma3 shadow-1">
                    <h2 className='tc'>Story</h2>
                    <p className='tc'>
                        {story}
                    </p>
                </section>
            </div>
        </>
    );
}

export default User;
