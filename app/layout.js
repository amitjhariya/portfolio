import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import './../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body >
        {/* <Header /> */}
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}
