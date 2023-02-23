import {Header} from '../components/Header'
import { MainLayout } from '@/components/layouts/MainLayout';
import Search from './search'

export default function Home() {

return (   
    <>
    <Header />
    <MainLayout>
      <Search />
    </MainLayout>
    </>
  )
}
