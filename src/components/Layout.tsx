import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import MobileBottomBar from "./MobileBottomBar";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 pt-0 pb-14 md:pb-0">{children}</main>
    <Footer />
    <WhatsAppButton />
    <MobileBottomBar />
  </div>
);

export default Layout;
