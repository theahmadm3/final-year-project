import React, { useState } from 'react';
import Image from 'next/image';
import User from '../Images/user.png';
import Course from '../Images/course.png';
import AttendancePic from '../Images/attendance.png';
import Link from 'next/link';


function Navbar() {
  const [showNav, setShowNav] = useState(false);
  function toggleNav() {
    setShowNav(!showNav);
  }
  function closeNav() {
    setShowNav(false);
  }
  return (
    <div className='fl pa2'>
      <button className="nav-toggle shadow-1" onClick={toggleNav}>
        {showNav ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <nav className={`nav ${showNav ? "show" : ""}`}>
        <button className="nav-close black bg-white" onClick={closeNav}>
          X
        </button>
        <Link href='/User' className='tc flex flex-column menu-item pointer w-10 pa3 bg-gray white'>
          <Image src={User} alt="user logo" width={90} height={65} />
          Profile
        </Link>
        <Link href='/Courses' className='tc flex flex-column menu-item pointer w-10 pa3 bg-gray white'>
          <Image src={Course} alt="user logo" width={90} height={65} />
          Courses
        </Link>
        <Link href='/Attendance' className='tc flex flex-column menu-item pointer w-10 pt3 pb3 bg-gray white'>
          <Image className='pl3' src={AttendancePic} alt="user logo" width={70} height={65} />
          Attendance
        </Link>
        <Link href='/Login' className='tc flex flex-column menu-item pointer w-10 pt3 pb3 bg-gray white'>
          <Image className='pl3' src={AttendancePic} alt="user logo" width={70} height={65} />
          Sign Out
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
