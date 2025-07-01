import "./globals.css";
import Nav from '@/components/Nav';
import { headers } from 'next/headers';
import { AppkitProvider } from '@/context/appkit';

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const headersObj = await headers();
  const cookies = headersObj.get('cookie');

  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ margin: '1rem' }}>
          <AppkitProvider cookies={cookies}>{children}</AppkitProvider>
        </main>
      </body>
    </html>
  );
}
