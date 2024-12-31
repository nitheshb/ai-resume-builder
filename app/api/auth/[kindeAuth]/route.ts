import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
console.log('value of clerk redirect is ', process.env.KINDE_ISSUER_URL)
export const GET = handleAuth();
