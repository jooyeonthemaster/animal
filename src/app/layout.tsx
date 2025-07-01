import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "나의 완벽한 동물친구 찾기 🐾",
  description: "당신의 라이프스타일에 맞는 최고의 반려동물을 찾아드려요!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gradient-to-br from-pastel-blue via-pastel-pink to-pastel-purple">
        <div className="min-h-screen backdrop-blur-sm bg-white/30">
          {children}
        </div>
      </body>
    </html>
  );
}
