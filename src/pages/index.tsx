import {Header} from '../components/Header'
import { MainLayout } from '@/components/layouts/MainLayout';
import Cards from './cards'
import Search from './search'

export default function Home() {

return (   
    <>
    <Header />
    <MainLayout>
      
      <Search />
      <Cards />
    
    </MainLayout>
    </>
  )
}
