import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Sobre } from '@/components/sobre';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Sobre />
    </main>
  );
}
