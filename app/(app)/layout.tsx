import { Navigation } from '@/components/Navigation';
import { Header } from '@/components/Header';
import appstyles from '@/styles/app.module.scss';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: 'D' },
  { href: '/settings', label: 'Setting', icon: 'S' },
];

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={appstyles.gridContainer}>
      <Navigation links={links} />
      <Header />
      {children}
    </main>
  );
};

export default AppLayout;
