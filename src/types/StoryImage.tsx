export interface StoryImage {
    comics: object,
    description: string,
    events: object,
    id: number,
    modified: string,
    name: string,
    resourceURI: string,
    series: {
      available: string,
    },
    stories: object,
    thumbnail: {
      path: string,
      extension: string,
    },
    hero: object,
    urls: [],
}