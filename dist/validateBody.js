const MIN_LENGTH = 1;
const MAX_LENGTH = 100000;
/**
 * Validates a post body.
 * @param body - The body string to validate
 * @returns A ValidationResult with `valid` and an `errors` array
 * @example
 * validateBody("Some content here") // { valid: true, errors: [] }
 * validateBody("   ") // { valid: false, errors: ["Body must not be empty"] }
 */
export function validateBody(body) {
    const errors = [];
    const trimmed = body.trim();
    if (trimmed.length < MIN_LENGTH) {
        errors.push("Body must not be empty");
    }
    else if (trimmed.length > MAX_LENGTH) {
        errors.push(`Body must not exceed ${MAX_LENGTH} characters`);
    }
    return { valid: errors.length === 0, errors };
}
