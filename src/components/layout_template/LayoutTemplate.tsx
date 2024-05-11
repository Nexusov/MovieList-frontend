import React, { ReactNode } from 'react';
import Header from '../header/Header';
import styles from './LayoutTemplate.module.scss';

type LayoutProps = {
  children: ReactNode;
  section: string
};

const LayoutTemplate: React.FC<LayoutProps> = ({ children, section }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <section aria-label={section} className={styles.section}>
          {children}
        </section>
      </main>
    </div>
  );
};

export default LayoutTemplate;
