import React from "react"
import { ThemeProvider, NearProvider } from "@/helpers/providers"
import { AppRouter } from "@/pages/routes"
import { SnackbarProvider } from "notistack"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <NearProvider>
          <QueryClientProvider client={queryClient}>
            <AppRouter />
          </QueryClientProvider>
        </NearProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
