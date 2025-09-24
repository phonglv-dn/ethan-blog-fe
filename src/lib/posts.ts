import { TPost } from "@/types/post"

export const posts: TPost[] = [
  {
    slug: "react-performance-tips",
    title: "React Performance Tips Every Developer Should Know",
    description: "Một số cách tối ưu hiệu năng React mà bạn cần nắm.",
    date: "2025-09-01",
    tags: ["react", "performance"],
    content: `
      ## React Performance Tips
      1. Dùng React.memo để tránh re-render
      2. Dùng useCallback, useMemo đúng chỗ
      3. Virtualization cho list lớn
    `
  },
  {
    slug: "ai-in-web-dev",
    title: "How AI is Changing Web Development",
    description: "Công nghệ AI đang tác động thế nào tới dev frontend.",
    date: "2025-09-10",
    tags: ["ai", "webdev"],
    content: `
      ## AI in Web Dev
      AI đang giúp dev tạo code nhanh hơn, gợi ý component, và tự động hóa test.
    `
  }
]
