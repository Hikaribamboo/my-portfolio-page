import type { Metadata } from 'next';
import '@/styles/globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'This is my personal portfolio website.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex">
        <Sidebar />

        <main className="flex-1 ml-64 px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
