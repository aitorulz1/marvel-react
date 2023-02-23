import StoryImages from './storyImages'
import { StoryImage } from '../../../../types/StoryImage';

interface Props {
  storyImage: StoryImage
}

export const Stories = (props:Props) => {

  const { hero } = props

  if(!hero) {
    return
  }
  console.log(hero)
  const heroStories = hero.stories.items
  
  const lastFour = heroStories.slice(heroStories.length - 4)
  
return (      
    <div className="pb-24 table">
        {lastFour.map((story:StoryImage) => (
            <div key={story.resourceURI} className="md:w-2/4 lg:w-1/4 float-left p-2">
              <div className="h-20">
                <p className="text-sm text-center pb-4 text-red-800">{story.name}</p>                                
              </div>
                <StoryImages key={story.id} storyId={story.resourceURI.slice(story.resourceURI.length - 5)} />                
            </div>
        ))}
    </div>
  )
}

