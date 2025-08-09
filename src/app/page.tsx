import Header from '@/components/header';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <h1 className="text-4xl font-bold mb-8">Welcome to My App</h1>
      <p className="text-lg mb-4">This is a simple Next.js application.</p>
    </div>   
  );
}
