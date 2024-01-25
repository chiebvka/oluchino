import { GeistSans } from "geist/font/sans";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Deluccis Online Store",
  description: "Buy all your household items and furnitures at deluccis. Get all your household items, appliances and fuurnitures for the best combination of cheap prices and best quality in Nigeria and West Africa ",
  // description: "Your best online store for household items, appliances and furnitures in Nigeria and West Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
