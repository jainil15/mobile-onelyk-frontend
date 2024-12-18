import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Support from "@/components/support";
import Footer from "@/components/footer";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import ReactQueryProvider from "@/context/react-query-provider";
import { baseUrl } from "../environment/environment";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onelyk",
  description: "Onelyk guest portal",
};

const guestId: string = "66bf3bbcaa00b3d544d92869";
const getGuest = async (guestId: string) => {
  const guest = await fetch(`${baseUrl}/guest/${guestId}`);
  return guest.json();
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen w-full flex flex-col">
              <Navbar />
              <main className=" flex items-center justify-center  w-full flex-col">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
