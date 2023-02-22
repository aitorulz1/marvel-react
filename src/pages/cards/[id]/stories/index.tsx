import getStorieUrl from "../../../../helpers/UrlsHelper"

export const Stories = (props:any) => {

  const {hero} = props
  const heroStories = hero.stories.items
  
  const heroId:number = hero.id
  const lastFour = heroStories.slice(heroStories.length - 4)
  
  const gettingComicsImage = getStorieUrl(heroId)
  console.log(gettingComicsImage)
  
return (      
  <>
    <div>
        {lastFour.map((story:any) => (
            <div key={story.resourceURI} className="w-1/4 float-left">
                <p className="text-lg">{story.name}</p>
                <p>{story.resourceURI}</p>
            </div>
        ))}
    </div>
  </> 
  )
}
