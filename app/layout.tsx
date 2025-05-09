import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "Admin Dashboard | Hage Architecture",
  description: "Manage your architecture projects efficiently with our admin dashboard.",
  keywords: "admin, dashboard, architecture, projects, management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
    <html lang="en">
      <body className='antialiased'>
        <AppSidebar />
        <div className="flex flex-col bg-[#71717118] w-full">
          <SidebarTrigger />
          <div className="w-full px-7 py-5">
            {children}
          </div>
        </div>
      </body>
    </html>
    </SidebarProvider>
  );
}
