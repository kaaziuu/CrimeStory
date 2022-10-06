/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly CRIME_STORY_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
