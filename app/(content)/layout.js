import MainHeader from "@/components/MainHeader";
import "../globals.css";

export const metadata = {
  title: "newses-starting-project",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
