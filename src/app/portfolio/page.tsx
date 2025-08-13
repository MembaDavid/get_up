import Header from "@/components/header";
import Footer from "@/components/footer";
import Portfolio from "@/components/portfolio";

export default function Portfolio_page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}