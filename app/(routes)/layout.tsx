"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { useState } from "react";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


    const [isLoading , setIsLoading] = useState(true)
  const [isContentShow , setIsContentShow] = useState(false)

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setIsContentShow(true), 450);
    setIsLoading(true)
  };

  return (
    <html lang="en">
      <body >
      {isContentShow ? (
        <div >
            <Header/>
            {children}
            {/* <Footer/> */}
        </div>
          )
          :
          <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
        }
        
        </body>
    </html>
  );
}
