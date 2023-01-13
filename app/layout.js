"use client";
import Sidebar from "../components/Sidebar";
import "./../styles/globals.css";
import Particles from "../components/Particles/particles";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Sidebar />
        {children}
        <Particles id="tsparticles" />
      </body>
    </html>
  );
}
