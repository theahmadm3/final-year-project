app.post('/take-attendance', (req, res)=>{
  new Attendance({ id: uuid() }).save()
})

app.post('/attendance', (req, res)=>{
  const {studentId, attendanceId} = req.body
  Attendance.get(attendanceId).push(studentId)
  connections[attendanceId].send(getStudent(studentId))
})

websoket.onrequest((req)=>{
  req.accept()
  
})