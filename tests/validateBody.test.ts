import { describe, it, expect } from "vitest"
import { validateBody } from "../src/index"

describe("validateBody", () => {
  it("returns valid for normal body text", () => {
    const result = validateBody("This is some post content.")
    expect(result.valid).toBe(true)
    expect(result.errors).toHaveLength(0)
  })

  it("returns invalid for an empty string", () => {
    const result = validateBody("")
    expect(result.valid).toBe(false)
    expect(result.errors).toContain("Body must not be empty")
  })

  it("returns invalid for a whitespace-only string", () => {
    const result = validateBody("   \n\t  ")
    expect(result.valid).toBe(false)
    expect(result.errors).toContain("Body must not be empty")
  })

  it("returns invalid for body exceeding 100000 characters", () => {
    const result = validateBody("a".repeat(100001))
    expect(result.valid).toBe(false)
    expect(result.errors).toContain("Body must not exceed 100000 characters")
  })

  it("returns valid for body exactly 100000 characters long", () => {
    const result = validateBody("a".repeat(100000))
    expect(result.valid).toBe(true)
  })
})
