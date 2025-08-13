import ContactPage from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";

function Contact() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <ContactPage />
      <Footer />
    </div>
  );
}
export default Contact;