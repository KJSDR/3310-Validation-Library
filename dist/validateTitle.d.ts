import type { ValidationResult } from "./types";
/**
 * Validates a post title.
 * @param title - The title string to validate
 * @returns A ValidationResult with `valid` and an `errors` array
 * @example
 * validateTitle("Hello World") // { valid: true, errors: [] }
 * validateTitle("") // { valid: false, errors: ["Title must not be empty"] }
 */
export declare function validateTitle(title: string): ValidationResult;
