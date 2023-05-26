import Image from 'next/image';
import Link from 'next/link';
export default function MediaPage() {
  return (
    <>
      <h1>Media</h1>
      <div>
        {/* <Image
          src="/backgrounds/piano4.jpg"
          width="307"
          height="230"
          alt="Iliana Stoynova"
        />{' '} */}
        <Link href="/">Photo</Link>
        <Link href="/">Audio</Link>
        <Link href="/">Video</Link>
      </div>
    </>
  );
}
