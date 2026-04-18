import type { ValidationResult } from "./types";
/**
 * Validates a post status.
 * @param status - The status string to validate
 * @returns A ValidationResult with `valid` and an `errors` array
 * @example
 * validateStatus("draft") // { valid: true, errors: [] }
 * validateStatus("pending") // { valid: false, errors: ["Status must be one of: draft, published, archived"] }
 */
export declare function validateStatus(status: string): ValidationResult;
