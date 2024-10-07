import localFont from "next/font/local";
import "./globals.css";
import NavMenu from "./components/NavMenu";
import FooterComponent from "./components/FooterComponent";
import { ConfigProvider } from "antd";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Toko Komputer Maju Jaya Abadi",
  description:
    "Temukan Perangkat dan Aksesoris Komputer Terbaik untuk Semua Kebutuhan Anda!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100 min-h-screen flex flex-col`}
      >
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#59c978",
              borderRadius: 16,
            },
          }}
        >
          <NavMenu />
          <div className="mt-[64px] flex-1">{children}</div>
          <FooterComponent />
        </ConfigProvider>
      </body>
    </html>
  );
}
