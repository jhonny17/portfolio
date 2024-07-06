import cx from 'classnames';

import cl from './MaintenanceMode.module.css';

export const MaintenanceMode = () => (
  <main className={cl.maintenanceMode}>
    <div className={cl.container}>
      <div className={cx(cl.lightEffect, 'animate-pulse')} />
      <div className={cl.card}>
        <div className={cl.cardContainer}>
          <h1 className={cl.title}>Jhonny Vargas Arias</h1>
          <span className={cl.subtitle}>Portfolio</span>
          <div className={cl.divider} />
          <p>This page is currently under development.</p>
          <p>Stay tuned for updates!</p>
        </div>
      </div>
    </div>
  </main>
);
