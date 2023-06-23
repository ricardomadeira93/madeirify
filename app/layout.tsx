import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Work_Sans } from "next/font/google";

const font = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Madeirify",
  description: "Listen to tree sounds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="forest">
      <body className={font.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
