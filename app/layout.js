import { Outfit, Ovo } from "next/font/google";
import "./globals.css";



const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
}); 

export const metadata = {
  title: "Portfolio - Emuch",
  description: "Portfolio website of Emuch",
};

/**
 * Root layout component for the application.
 * @param {{ children: React.ReactNode }} props - The children elements to render inside the layout.
 * @returns {JSX.Element} The root layout structure.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
      
         
        {children}
          
       
      </body>
    </html>
  );
}
