import { validateTitle } from "./validateTitle";
import { validateBody } from "./validateBody";
import { validateStatus } from "./validateStatus";
/**
 * Validates a full post object by checking its title, body, and status.
 * @param post - The Post object to validate
 * @returns A ValidationResult with `valid` and a combined `errors` array
 * @example
 * validatePost({ title: "Hello", body: "Content", status: "draft" })
 * // { valid: true, errors: [] }
 */
export function validatePost(post) {
    const titleResult = validateTitle(post.title);
    const bodyResult = validateBody(post.body);
    const statusResult = validateStatus(post.status);
    const errors = [...titleResult.errors, ...bodyResult.errors, ...statusResult.errors];
    return { valid: errors.length === 0, errors };
}
