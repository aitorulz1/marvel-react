export interface Character {
    id: number,
    comics: {
      available: number,
      collectionURI: string,
      items: [],
      returned: number
    },
    description: string,
    events: object,
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
    inputText: string | undefined,
    urls: [],
  }

