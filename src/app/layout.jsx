import {Montserrat ,Lalezar } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const bodyFont =Montserrat({ subsets: ["latin"] ,weight:["400","700","900"]});

export const metadata = {
  title: "MMR - Home",
  description: "MMR is Ashopping website which stands For Mazen , Mohab and Rose. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
      <ThemeProvider>
      <div className="container">
        <Navbar/>
        {children}
        <Footer/>
      </div>
      </ThemeProvider>

      </body>
    </html>
  );
}
