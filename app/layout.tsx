import Footbar from "@/components/layout/Footbar";
import Headbar from "@/components/layout/Headbar";
import EscapeToHome from "@/components/global/EscapeToHome";

import "./globals.css";

export const metadata = {
  title: "Dioratoret",
  description: "Dioratoret - Commercial Art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-black hide-scrollbar">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-[url('/img/BatikParangKusumo.webp')] opacity-25"
        />

        <div className="relative z-10 flex min-h-screen flex-col">
          <EscapeToHome />
          <Headbar />

          <main className="min-w-0 flex-1">{children}</main>

          <Footbar />
        </div>
      </body>
    </html>
  );
}