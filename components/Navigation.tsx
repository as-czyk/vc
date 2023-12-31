import React from 'react';
import navigationStyles from '@/styles/navigation.module.scss';
import Link from 'next/link';

export const Navigation = (props: any) => {
  return (
    <section className={navigationStyles.navigation}>
      <div className={navigationStyles.logo}></div>
      <nav className={navigationStyles.navContainer}>
        {props.links.map((link: any) => {
          return (
            <Link href={link.href} key={link.href}>
              <div className={navigationStyles.container}>
                <span>{link.icon}</span>
                <span className={navigationStyles.label}>{link.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};
