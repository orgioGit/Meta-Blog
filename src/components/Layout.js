import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/Header/Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;