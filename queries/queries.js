export const heroSectionQuery = `*\[_type == "hero"\][0] {
    title,
    blogURL {
      current
    }
  }`;