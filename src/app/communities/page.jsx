"use client"
import { CommunitiesList } from "@/components/CommunitiesList";
import { withSearch } from "@/components/withSearch";
import { useState } from "react";


export default function Communities() {
  const auxCommunities = [
    {
        name: 'GNUno',
        id: 1,
        link: 'https://t.me/Informatica_UNO',
        image_url: 'https://concepto.de/wp-content/uploads/2019/12/algebra-e1577465340342.jpg',
        description: 'comunidad'
    },
    {
        name: 'NTRS',
        id: 2,
        link: 'https://discord.gg/nYeuZfgK9s',
        image_url: 'https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg',
        description: 'comunidad'
    },
    {
        name: 'GEA',
        id: 1,
        link: 'https://www.instagram.com/autoconvocadosuno',
        image_url: 'https://www.itmastersmag.com/wp-content/uploads/2021/01/shutterstock_1078387013-1536x768.jpg',
        description: 'comunidad'
    }
  ]
  
  const CommunitiesListWithSearch = withSearch(CommunitiesList, auxCommunities);
const [communities, setCommunities] = useState(auxCommunities);

  return (
    <div>
      <h1>Comunidades</h1>
      <CommunitiesListWithSearch />
    </div>
  )
}
