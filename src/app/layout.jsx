import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const inter = Geist({
  variable: "inter",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} antialiased`}
    >
      
      <body>{children}</body>
    </html>
  );
}
