const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.nocadernin.com.br";
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5551999999999";

export const SIGNUP_URL = `${APP_URL}/cadastro`;
export const LOGIN_URL = `${APP_URL}/login`;
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const VIDEO_ID = process.env.NEXT_PUBLIC_FOUNDER_VIDEO_ID ?? "";

export const SITE_URL = "https://nocadernin.com.br";
export const BRAND_NAME = "No Cadernin";
