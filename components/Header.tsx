import headerStyles from '@/styles/Header.module.scss';

export const Header = () => {
  return (
    <header className={headerStyles.header}>
      <span>Icon</span>
      <span>Icon 2</span>
      <span>Date and Time</span>
    </header>
  );
};
