/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_DEPOSIT_JETTON_ID: string;
  readonly VITE_S3_AVATARS_URL: string;
  readonly VITE_CONFIG_INDEXER_DESTINATION_ADDRESS: string;
  readonly VITE_ENVIRONMENT_TYPE: 'development' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
