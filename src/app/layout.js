import Navbar from "./components/navbar/Navbar";
import Form from "./components/contact/Form";
import "./globals.css";
import { Inter } from "next/font/google";
import LandingAbout from "./components/landingabout/LandingAbout";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        {children}
        
        <Footer/>
      </body>
    </html>
  );
}
