import type { Post, ValidationResult } from "./types";
/**
 * Validates a full post object by checking its title, body, and status.
 * @param post - The Post object to validate
 * @returns A ValidationResult with `valid` and a combined `errors` array
 * @example
 * validatePost({ title: "Hello", body: "Content", status: "draft" })
 * // { valid: true, errors: [] }
 */
export declare function validatePost(post: Post): ValidationResult;
