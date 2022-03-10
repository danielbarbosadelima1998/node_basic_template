/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TESTE: string
    readonly TESTE2: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }