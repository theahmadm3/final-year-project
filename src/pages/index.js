import 'tachyons';
import Login from './Login';
import HomePage from './HomePage';
import Footer from 'No/components/Footer';

export default function Home() {
  let num = 0;
  if(num < 70) {
    return(
      <>
    <HomePage />
      </>
  )} 
  else{
    return(
      <>
    <Login />
    <Footer />
      </>
    );}
}
