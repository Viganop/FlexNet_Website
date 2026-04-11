import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Metricas } from '@/components/metricas';
import { Vantagens } from '@/components/vantagens';
import { Planos } from '@/components/planos';
import { ComoFunciona } from '@/components/como-funciona';
import { Depoimentos } from '@/components/depoimentos';
import { Contato } from '@/components/contato';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Metricas />
      <Planos />
      <Vantagens />
      <ComoFunciona />
      <Depoimentos />
      <Contato />
      <Footer />
    </main>
  );
}
