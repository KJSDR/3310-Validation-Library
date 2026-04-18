import type { ValidationResult } from "./types";
/**
 * Validates a post body.
 * @param body - The body string to validate
 * @returns A ValidationResult with `valid` and an `errors` array
 * @example
 * validateBody("Some content here") // { valid: true, errors: [] }
 * validateBody("   ") // { valid: false, errors: ["Body must not be empty"] }
 */
export declare function validateBody(body: string): ValidationResult;
