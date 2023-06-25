import React, { useEffect, useState } from 'react';
import 'tachyons';
import INavbar from '../components/InstructorSideNavbar';

export default function AttendanceList() {
  const [list, setList] = useState([]);
  console.log(list)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/attendance');
        const data = await res.json();
        console.log(data)
        setList(data);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <INavbar />
      <table className='tc w-100 mw8 center ba b--black-20 br3 mt4'>
        <thead className='bg-light-gray'>
          <tr>
            <th className='pa3'>ID</th>
            <th className='pa3'>First Name</th>
            <th className='pa3'>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ student }) => (
            <tr style={{ color: 'white' }} key={student.id}>
              <td className='pa3'>{student.id}</td>
              <td className='pa3'>{student.fNmame}</td>
              <td className='pa3'>{student.fLmame}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
