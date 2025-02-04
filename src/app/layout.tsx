"use client";

import "./globals.css";  // Import your global styles

// Optional Redux integration, uncomment if needed:
// import { Provider } from "react-redux";
// import { store } from "@/lib/store"; // Make sure to configure your Redux store

import { Lexend_Deca } from "next/font/google";
const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lexend',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexendDeca.variable} font-sans`}>
      <body>
        {/* Optional Redux provider wrapper, uncomment if needed */}
        {/* <Provider store={store}> */}
          {children}
        {/* </Provider> */}
      </body>
    </html>
  );
}
