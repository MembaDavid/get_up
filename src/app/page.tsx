import Header from '@/components/header';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />     
    </div>   
  );
}
