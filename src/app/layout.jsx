import "./globals.css";

export const metadata = {
  title: "UNO hub",
  description:
    "Hub de comunidades y links de la Universidad Nacional del Oeste.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        {children}
      </body>
    </html>
  );
}
