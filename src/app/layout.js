import CustomCursor from "./components/customCursor/customCursor";
import "./globals.css";

export const metadata = {
  title: "Growth Kar",
  description: "Growth Kar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
        </body>
    </html>
  );
}
