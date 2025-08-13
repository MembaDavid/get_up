import BlogReadPage from "@/components/blogs/blog3";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <BlogReadPage />
      <Footer />
    </div>
  );
}