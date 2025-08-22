
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Toaster} from "sonner"
import { ApolloProvider } from '@apollo/client/react'
import client from './apolloClient.ts'
import { ThemeProvider } from './components/theming/theme-provider.tsx'
createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <ApolloProvider client={client}>
    <App />
    <Toaster/>
  </ApolloProvider>
  </ThemeProvider>
  
)
