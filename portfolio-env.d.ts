/// <reference types="next/image-types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'test' | 'staging' | 'production';
    NEXT_PUBLIC_GITHUB_USERNAME: string;
  }
}
