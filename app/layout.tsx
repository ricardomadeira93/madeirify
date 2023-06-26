import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import SupabaseProvider from "@/providers/supabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";

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
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
