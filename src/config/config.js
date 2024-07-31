const config = {
    appwriteUrl: String(import.meta.env.VITE_APWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APWRITE_BUCKET_ID),
    apikeys: String(import.meta.env.MY_KEY)
}

export default config