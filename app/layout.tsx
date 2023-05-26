import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
export const metadata = {
  title: 'Iliana Stoyanova',
  description: 'Pianist and piano teacher based in Vienna, Austria',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h1>Iliana Stoyanova</h1>
          <div>
            <Link href="/">Home</Link>|<Link href="/biografie">Biografie</Link>|
            <Link href="/media">Media</Link>|
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </nav>
        {children}
        <footer>
          <h3>Kontakt</h3>
          <ul>
            <li>
              <Image
                src="/logos/email.png"
                width="24"
                height="24"
                alt="email"
              />
            </li>
            <li>
              {' '}
              <Image
                src="/logos/instagram_black.svg"
                width="20"
                height="20"
                alt="instagram"
              />
            </li>
            <li>
              {' '}
              <Image
                src="/logos/facebook.png"
                width="30"
                height="30"
                alt="facebook"
              />
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
