import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
