declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'staging' | 'production';
    NEXT_PUBLIC_FEATURE_FLAG_HOST: string;
    NEXT_PUBLIC_FEATURE_FLAG_CLIENT_KEY: string;
  }
}
