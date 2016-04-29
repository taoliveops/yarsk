import React from 'react';
import Header from '../Header';
import FunnelChart from '../Chart/FunnelChart'

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './style';

const Application = () => {
  return <div>
    <div>
      <FunnelChart />
      <Header />
      <main className={styles.body}>
        <p>Seems like creating your own React starter kit is a rite of passage. So, here''s mine.</p>
        <p>For more information, see the <a href="https://github.com/bradleyboy/yarsk#yarsk">Readme</a>.</p>
      </main>
    </div>
  </div>;
};

Application.displayName = 'Application';

export default Application;
