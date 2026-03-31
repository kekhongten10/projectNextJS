import Script from "next/script";
import Top from "./Components/Top";
import Bottom from "./Components/Bottom";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Fruitables - Vegetable Website Template</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="deScription" />
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@600;800&display=swap"
          rel="stylesheet"
        />
        {/* Icon Font Stylesheet */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        {/* Libraries Stylesheet */}
        <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link
          href="lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        {/* Customized Bootstrap Stylesheet */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        {/* Template Stylesheet */}
        <link href="css/style.css" rel="stylesheet" />
      </head>

      <body>
        <AuthProvider>
        <Top />
        
        <CartProvider>
        {children}
        </CartProvider>
        
        <Bottom />
        </AuthProvider>

        <Script async src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></Script>
        <Script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
        <Script async src="lib/easing/easing.min.js"></Script>
        <Script async src="lib/waypoints/waypoints.min.js"></Script>
        <Script async src="lib/lightbox/js/lightbox.min.js"></Script>
        <Script async src="lib/owlcarousel/owl.carousel.min.js"></Script>
        <Script async src="js/main.js"></Script>
      </body>
    </html>
  );
}
