import './globals.css'
import { Inter } from 'next/font/google'
import { ConfigProvider } from 'antd'
import MainLayout from '../components/layout/main-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Modern Dashboard',
  description: 'Professional dashboard layout with modern features',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#389E0D',
            },
            components: {
              Menu: {
                colorPrimary: '#389E0D',
                itemSelectedColor: '#389E0D',
                itemSelectedBg: '#D9F7BE',
                itemHoverColor: '#52c41a',
              },
              Button: {
                colorPrimary: '#389E0D',
              },
              Input: {
                colorPrimary: '#389E0D',
              },
              Select: {
                colorPrimary: '#389E0D',
              },
            },
          }}
        >
          <MainLayout>{children}</MainLayout>
        </ConfigProvider>
      </body>
    </html>
  )
}
