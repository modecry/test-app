declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_PRIVATE_KEY: string
    }
  }
}

export {}
