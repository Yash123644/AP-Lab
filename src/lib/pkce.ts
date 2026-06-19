import crypto from "crypto";

/**
 * Generates a random state string for CSRF protection.
 */
export function generateState(): string {
  return crypto.randomBytes(16).toString("hex");
}

/**
 * Generates a random PKCE code verifier (base64url format, length between 43 and 128).
 */
export function generateCodeVerifier(): string {
  return crypto.randomBytes(32).toString("base64url");
}

/**
 * Generates a SHA-256 base64url encoded challenge from the code verifier.
 */
export function generateCodeChallenge(verifier: string): string {
  return crypto
    .createHash("sha256")
    .update(verifier)
    .digest("base64url");
}
