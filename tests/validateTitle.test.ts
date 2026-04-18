import { describe, it, expect } from "vitest"
import { validateTitle } from "../src/index"

describe("validateTitle", () => {
  it("returns valid for a normal title", () => {
    const result = validateTitle("Hello World")
    expect(result.valid).toBe(true)
    expect(result.errors).toHaveLength(0)
  })

  it("returns invalid for an empty string", () => {
    const result = validateTitle("")
    expect(result.valid).toBe(false)
    expect(result.errors).toContain("Title must not be empty")
  })

  it("returns invalid for a whitespace-only string", () => {
    const result = validateTitle("   ")
    expect(result.valid).toBe(false)
    expect(result.errors).toContain("Title must not be empty")
  })

  it("returns invalid for a title exceeding 200 characters", () => {
    const result = validateTitle("a".repeat(201))
    expect(result.valid).toBe(false)
    expect(result.errors).toContain("Title must not exceed 200 characters")
  })

  it("returns valid for a title exactly 200 characters long", () => {
    const result = validateTitle("a".repeat(200))
    expect(result.valid).toBe(true)
  })
})
