import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image
          src="/images/IMG_8636.jpg"
          width="200"
          height="300"
          alt="Iliana Stoyanova"
        />
      </div>
      <div>
        <h2>2023</h2>
        <div>
          <h4>25 Mai</h4>
          <h5>Russisches Kulturzentrum</h5>
          <h3>Konzert zum 150. Geburtstag von Sergei Rachmaninov</h3>
        </div>
        <div>
          <h4>25 Mai</h4>
          <h5>Russisches Kulturzentrum</h5>
          <h3>Recital in der Wiener Musikverein</h3>
        </div>
        <h2>2022</h2>
        <div>
          <h4>25 Mai</h4>
          <h5>Russisches Kulturzentrum</h5>
          <h3>Recital in der Wiener Musikverein</h3>
        </div>
        <div>
          <h4>25 Mai</h4>
          <h5>Russisches Kulturzentrum</h5>
          <h3>Konzert zum 150. Geburtstag von Sergei Rachmaninov</h3>
        </div>
      </div>
    </main>
  );
}
