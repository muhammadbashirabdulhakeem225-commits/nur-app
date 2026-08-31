// Point this at your own backend (see /server in this project) which holds
// your Anthropic API key server-side. Never ship an API key inside the app.
export const GUIDE_API_URL = process.env.EXPO_PUBLIC_GUIDE_API_URL || "http://localhost:3000/guide";
