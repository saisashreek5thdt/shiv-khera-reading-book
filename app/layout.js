import "./globals.css";

export const metadata = {
  title: "Shiv Khera Books",
  description: "Read Books in your own way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
