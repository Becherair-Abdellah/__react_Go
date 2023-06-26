
import s1 from '../assets/single.png';
import s2 from '../assets/double.png';
import s3 from '../assets/triple.png';
import Plan from './Plan'; 
export default function Plans() {
  return (
    <div className='bg-white px-10 py-5 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
      <Plan srcImg={s1} namePlan='single user' price='$149' storage='500GB storage' user='1 user allowed' sending='send up to 2GB' />
      <Plan srcImg={s2} namePlan='single user' price='$149' storage='500GB storage' user='1 user allowed' sending='send up to 2GB' style='bg-gray-50' />
      <Plan srcImg={s3} namePlan='single user' price='$149' storage='500GB storage' user='1 user allowed' sending='send up to 2GB' />
    </div>
  )
}
