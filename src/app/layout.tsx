"use client";

// import { Provider } from "react-redux"; // Import Redux Provider

import "./globals.css";
// import { store } from "@/lib/store";

// import {Lexend_Deca} from "next/font/google";
//  const lexendDeca = Lexend_Deca({
//   subsets: ['latin'],
//   variable: '--font-lexend',
// });


//  import cn from '@/utils/class-names';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" 

    >
      <body>
          {children}

      </body>
    </html>
  );
}
