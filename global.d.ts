declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_APP_URL: string
    }
  }
}

export {}
