
import { getComicByCharacter } from '../../../../helpers/UrlsHelper';
import Link from 'next/link';




export const ButtonToComics = (props:any) => {

  const {hero} = props
  const heroId = hero.id
  const heroName = hero.name.toLowerCase()    
  const urlToComics = getComicByCharacter(heroId, heroName)
  console.log(urlToComics)

return (       
    <Link target="_blank" href="/" className="w-full bg-red h-4 table mb-6">
      <p className="text-white text-center py-3">COMICS</p>
    </Link>
  )
}
