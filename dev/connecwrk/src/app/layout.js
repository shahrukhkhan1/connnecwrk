import "./globals.css"; 

export const metadata = {
  title: "CONNECWRK - log in or sign up",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         {children} 
      </body>
    </html>
  );
}
