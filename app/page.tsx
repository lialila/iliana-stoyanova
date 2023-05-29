import './globals.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div>
        <Image
          src="/images/IMG_8636.jpg"
          width="200"
          height="300"
          alt="Iliana Stoyanova"
        />
      </div>
      <div>
        <h2 className="text-darkViolet text-xs sm:text-base md:text-lg lg:text-3xl m-2">
          2023
        </h2>
        <div>
          <h4 className="text-[#be9742]">25 Mai</h4>
          <h5>Russisches Kulturzentrum</h5>
          <h3>Konzert zum 150. Geburtstag von Sergei Rachmaninov</h3>
        </div>
        <div>
          <h4>25 Mai</h4>
          <h5>Russisches Kulturzentrum</h5>
          <h3>Recital in der Wiener Musikverein</h3>
        </div>
        <h2 className="m-2">2022</h2>
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
