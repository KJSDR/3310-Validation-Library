import { describe, it, expect } from "vitest"
import { validateStatus } from "../src/index"

describe("validateStatus", () => {
  it("returns valid for 'draft'", () => {
    const result = validateStatus("draft")
    expect(result.valid).toBe(true)
    expect(result.errors).toHaveLength(0)
  })

  it("returns valid for 'published'", () => {
    expect(validateStatus("published").valid).toBe(true)
  })

  it("returns valid for 'archived'", () => {
    expect(validateStatus("archived").valid).toBe(true)
  })

  it("returns invalid for an unknown status", () => {
    const result = validateStatus("pending")
    expect(result.valid).toBe(false)
    expect(result.errors).toContain("Status must be one of: draft, published, archived")
  })

  it("returns invalid for an empty string", () => {
    const result = validateStatus("")
    expect(result.valid).toBe(false)
  })

  it("returns invalid for wrong casing", () => {
    const result = validateStatus("Draft")
    expect(result.valid).toBe(false)
  })
})
