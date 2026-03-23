import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "莫森 | Emerson - 个人作品集",
  description: "个人简介、职业历程、核心成就、业务范围、联系方式",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
