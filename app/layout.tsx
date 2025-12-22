import './globals.css';
// import { Inter } from 'next/font/google';
// import { Playfair_Display } from 'next/font/google';
import { Poppins, Playfair_Display } from 'next/font/google';


// const inter = Inter({ subsets: ['latin'] });
// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   // weight: ['400', '600', '700'],
// });
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
  return (
    <html lang="en">
     <body
  className={`${poppins.variable} ${playfair.variable} antialiased`}
>
  {children}
</body>
    </html>
  );
}