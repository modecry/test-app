import React from "react"
import { ThemeProvider, NearProvider } from "@/helpers/providers"
import { RecoilRoot } from "recoil"
import { RouterProvider } from "react-router-dom"
import { routes } from "@/pages/routes"
import { SnackbarProvider } from "notistack"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <SnackbarProvider>
          <NearProvider>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={routes} />
            </QueryClientProvider>
          </NearProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
