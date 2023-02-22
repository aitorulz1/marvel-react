import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react';
import {Md5} from 'ts-md5'
import axios from 'axios'
import {Header} from '../components/Header'
import { MainLayout } from '@/components/layouts/MainLayout';
import Cards from './cards'
import Search from './search'
import CardId from './cards/[id]';


export default function Home() {

return (   
    <>
    <Header />
    <MainLayout>
      
      <Search />
      <Cards />
      <CardId />
    
    </MainLayout>
    </>
  )
}
