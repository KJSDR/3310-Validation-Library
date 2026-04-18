import { describe, it, expect } from "vitest"
import { validatePost } from "../src/index"

describe("validatePost", () => {
  it("returns valid for a well-formed post", () => {
    const result = validatePost({ title: "My Post", body: "Some content.", status: "draft" })
    expect(result.valid).toBe(true)
    expect(result.errors).toHaveLength(0)
  })

  it("returns invalid when title is empty", () => {
    const result = validatePost({ title: "", body: "Some content.", status: "draft" })
    expect(result.valid).toBe(false)
    expect(result.errors).toContain("Title must not be empty")
  })

  it("returns invalid when body is empty", () => {
    const result = validatePost({ title: "My Post", body: "", status: "draft" })
    expect(result.valid).toBe(false)
    expect(result.errors).toContain("Body must not be empty")
  })

  it("returns invalid when status is not allowed", () => {
    const result = validatePost({ title: "My Post", body: "Content", status: "unknown" })
    expect(result.valid).toBe(false)
    expect(result.errors).toContain("Status must be one of: draft, published, archived")
  })

  it("collects errors from multiple invalid fields", () => {
    const result = validatePost({ title: "", body: "", status: "bad" })
    expect(result.valid).toBe(false)
    expect(result.errors.length).toBeGreaterThanOrEqual(3)
  })
})
