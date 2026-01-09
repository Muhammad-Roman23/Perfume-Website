// app/layout.tsx

'use client'; 

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import './globals.css';
import { Poppins, Playfair_Display } from 'next/font/google';
import { usePathname } from 'next/navigation'; 


import { Provider } from "react-redux";
import { store } from './Redux/Store';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-playfair',
});

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); 

  const hideHeaderFooterPages = ['/login', '/register',"/admin","/admin/create"];

  const showHeaderFooter = !hideHeaderFooterPages.includes(pathname);

     

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} antialiased`}>
           <Provider store={store}>

        {showHeaderFooter && <Navbar />}
        {children}
        {showHeaderFooter && <Footer />}
           </Provider>
      </body>
    </html>
  );
} 