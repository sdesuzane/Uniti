import { TOKEN_ENUM } from "../enum/token.enum";

export function setAuthToken(token: string): void {
  localStorage.setItem(TOKEN_ENUM.ACCESS_TOKEN, token);
}

export function getAuthToken(): string | null {
  return localStorage.getItem(TOKEN_ENUM.ACCESS_TOKEN);
}

export function removeAuthToken(): void {
  localStorage.removeItem(TOKEN_ENUM.ACCESS_TOKEN);
}
