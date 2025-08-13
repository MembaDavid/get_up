import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Hero1 from '@/components/hero1';
import Hero2 from '@/components/hero2';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />     
      <Hero1 />
      <Hero2 />
      <Footer />
    </div>   
  );
}
