export type PostStatus = "draft" | "published" | "archived"

export interface Post {
  title: string
  body: string
  status: PostStatus | string
}

export interface ValidationResult {
  valid: boolean
  errors: string[]
}
