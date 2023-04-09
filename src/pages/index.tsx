
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Htag } from '@/components';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
    <Htag tag="h2">Header2</Htag>
    </>
  );
}
