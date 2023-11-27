import Link from 'next/link';
import homeStyles from '@/styles/home.module.scss';

const Home = () => {
  return (
    <div className={homeStyles.home}>
      <Link href={'/dashboard'}>Go to app</Link>
    </div>
  );
};

export default Home;
