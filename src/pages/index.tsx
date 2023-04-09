
import Image from 'next/image';
import { Inter } from 'next/font/google';



const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
    <h2 className="heading">Header2</h2>
    <h1 className="heading--large">Header2</h1>
    <h3 className="heading--small">Header2</h3>
    </>
  );
}
