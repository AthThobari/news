export type StoryType = {
  id?: number,
  title?: string,
  url?: string,
  by?: string,
  time?: number
}

export const SelectFields = ({ id, by, url, time, title }: StoryType = {}) => ({
  id,
  by,
  url,
  time,
  title,
});
