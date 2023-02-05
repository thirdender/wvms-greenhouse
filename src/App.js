import styles from './App.module.scss';
import Dial from './Dial';

function App() {
  return (
    <div className={styles.App}>
      <header>
        <h1>Greenhouse</h1>
      </header>
      <main>
        <div>
          <Dial />
          <h3>Temperature</h3>
        </div>
        <div>
          <Dial />
          <h3>Humidity</h3>
        </div>
      </main>
    </div>
  );
}

export default App;
