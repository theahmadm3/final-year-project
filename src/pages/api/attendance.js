const attendances = [];

export default function handler(req, res) {
  if (req.method == 'POST') {
    console.log(req.body)
    attendances.push(req.body);
    res.status(200).json({ name: 'John Doe' });
  } else if(req.method == 'GET'){
    res.json(attendances)
  }
}
