import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Premium 3 & 4 BHK Villas Off Avinashi Road, Coimbatore | Harmony",
  description: "Experience luxury living in premium 3 & 4 BHK villas at Harmony, off Avinashi Road, Coimbatore. Starting at ₹3.2 Cr*. Enquire today!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
