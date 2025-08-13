import Footer from "@/components/footer";
import Header from "@/components/header";
import Blog from "@/components/blog";

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
        <Blog />
      <Footer />
    </div>
  );
}