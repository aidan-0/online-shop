import { Inter } from "next/font/google";
import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online Store",
  description: "This is an online store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <div className="gradient">Hello</div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
