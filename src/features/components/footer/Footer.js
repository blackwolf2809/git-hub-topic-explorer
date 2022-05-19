import React from 'react';

import styles from './Footer.module.css';
export function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p>This demo was developed by <a href='https://github.com/blackwolf2809'><b>Víctor Rodríguez</b></a></p>
      </footer>
    </div>
  );
}
