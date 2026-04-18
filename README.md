# postkit-validation

**Purpose:** Validates post data before saving or publishing. Used to check titles, body text, status values, and full post objects for correctness.

---

## Exports

### `validateTitle`
- **Input:** `title: string`
- **Output:** `ValidationResult`
- **Description:** Checks that the title is non-empty (after trimming) and does not exceed 200 characters.

### `validateBody`
- **Input:** `body: string`
- **Output:** `ValidationResult`
- **Description:** Checks that the body is non-empty (after trimming) and does not exceed 100,000 characters.

### `validateStatus`
- **Input:** `status: string`
- **Output:** `ValidationResult`
- **Description:** Checks that the status is one of the allowed values: `"draft"`, `"published"`, or `"archived"`. Case-sensitive.

### `validatePost`
- **Input:** `post: Post`
- **Output:** `ValidationResult`
- **Description:** Validates a full post object by running `validateTitle`, `validateBody`, and `validateStatus` together. All errors from each field are collected into a single result.

---

## Types

```ts
interface Post {
  title: string
  body: string
  status: string
}

interface ValidationResult {
  valid: boolean
  errors: string[]
}

type PostStatus = "draft" | "published" | "archived"
```

---

## Example Usage

```ts
import { validateTitle, validateBody, validateStatus, validatePost } from 'postkit-validation'

validateTitle("My First Post")
// → { valid: true, errors: [] }

validateTitle("")
// → { valid: false, errors: ["Title must not be empty"] }

validateStatus("draft")
// → { valid: true, errors: [] }

validateStatus("pending")
// → { valid: false, errors: ["Status must be one of: draft, published, archived"] }

validatePost({ title: "Hello", body: "Some content.", status: "published" })
// → { valid: true, errors: [] }

validatePost({ title: "", body: "", status: "bad" })
// → { valid: false, errors: ["Title must not be empty", "Body must not be empty", "Status must be one of: draft, published, archived"] }
```

---

## Edge Cases

- Whitespace-only title or body → treated as empty, returns invalid
- Status string with wrong casing (e.g. `"Draft"`) → invalid; matching is case-sensitive
- All three fields invalid → `validatePost` collects all errors into one result; `valid` is `false`
- Valid post → `errors` array is empty and `valid` is `true`

---

## Design Notes

- Each validator returns a `ValidationResult` object rather than a plain boolean so callers can surface specific error messages to users.
- `validatePost` delegates to the individual validators rather than duplicating logic, so rules stay in one place.
- Allowed statuses are intentionally a closed set. Adding a new status requires an explicit code change.
