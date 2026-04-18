const ALLOWED_STATUSES = ["draft", "published", "archived"];
/**
 * Validates a post status.
 * @param status - The status string to validate
 * @returns A ValidationResult with `valid` and an `errors` array
 * @example
 * validateStatus("draft") // { valid: true, errors: [] }
 * validateStatus("pending") // { valid: false, errors: ["Status must be one of: draft, published, archived"] }
 */
export function validateStatus(status) {
    const errors = [];
    if (!ALLOWED_STATUSES.includes(status)) {
        errors.push(`Status must be one of: ${ALLOWED_STATUSES.join(", ")}`);
    }
    return { valid: errors.length === 0, errors };
}
