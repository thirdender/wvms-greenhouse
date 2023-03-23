import React, { useState } from 'react';
import Dial from './Dial';
import Chart from './Chart';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header>
        <h1>Greenhouse</h1>
      </header>
      <main>
        <div className={styles.Row}>
          <div className={styles.Dial}>
            <Dial />
            <h3>Temperature</h3>
          </div>
          <div className={styles.Chart}>
            <Chart />
          </div>
        </div>
        <div className={styles.Row}>
          <div className={styles.Dial}>
            <Dial />
            <h3>Humidity</h3>
          </div>
          <div className={styles.Chart}>
            <Chart />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
