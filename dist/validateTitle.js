const MIN_LENGTH = 1;
const MAX_LENGTH = 200;
/**
 * Validates a post title.
 * @param title - The title string to validate
 * @returns A ValidationResult with `valid` and an `errors` array
 * @example
 * validateTitle("Hello World") // { valid: true, errors: [] }
 * validateTitle("") // { valid: false, errors: ["Title must not be empty"] }
 */
export function validateTitle(title) {
    const errors = [];
    const trimmed = title.trim();
    if (trimmed.length < MIN_LENGTH) {
        errors.push("Title must not be empty");
    }
    else if (trimmed.length > MAX_LENGTH) {
        errors.push(`Title must not exceed ${MAX_LENGTH} characters`);
    }
    return { valid: errors.length === 0, errors };
}
