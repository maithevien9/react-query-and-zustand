export const upperFirstChar = (text: string) =>
  text.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1))
