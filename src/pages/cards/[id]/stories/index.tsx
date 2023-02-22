import StoryImages from './storyImages'

export const Stories = (props:any) => {

  const {hero} = props
  const heroStories = hero.stories.items
  
  const lastFour = heroStories.slice(heroStories.length - 4)
  
return (      
    <div className="pb-24 table">
        {lastFour.map((story:any) => (
            <div key={story.resourceURI} className="md:w-2/4 lg:w-1/4 float-left p-2">
              <div className="h-20">
                <p className="text-sm text-center pb-4 text-red-800">{story.name}</p>                                
              </div>
                <StoryImages storyId={story.resourceURI.slice(story.resourceURI.length - 5)} />                
            </div>
        ))}
    </div>
  )
}
