import "./globals.css";
import { inter } from "@/styles/fonts";

export const metadata = {
  title: "UNO hub",
  description:
    "Hub de comunidades y links de la Universidad Nacional del Oeste.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
