"use client"
import { SubjectsList } from "@/components/SubjectsList";
import { withSearch } from "@/components/withSearch";
import { useState } from "react";

export default function Groups() {
  const auxSubjects = [
    {
        name: 'Álgebra y Geometría Analítica',
        id: 1,
        link: 'https://chat.whatsapp.com/ITrA2AVtfOqLgVCzN41q54',
        image_url: 'https://concepto.de/wp-content/uploads/2019/12/algebra-e1577465340342.jpg',
        careers: ['Lic. en Informática', 'Téc. en Tecnologías Web']
    },
    {
        name: 'Programación Web 1',
        id: 2,
        link: 'https://chat.whatsapp.com/JBk3WBPpTnlAhZ5xrJQgTH',
        image_url: 'https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg',
        careers: ['Téc. en Tecnologías Web']
    },
    {
        name: 'Programación Web 2',
        id: 1,
        link: 'https://chat.whatsapp.com/DqEGXzoAcMG1Tom6YrwZtn',
        image_url: 'https://www.itmastersmag.com/wp-content/uploads/2021/01/shutterstock_1078387013-1536x768.jpg',
        careers: ['Téc. en Tecnologías Web']
    }
]

const [subjecs, setSubjects] = useState(auxSubjects);

const SubjectsListWithSearch = withSearch(SubjectsList, subjecs);

  return (
    <div>
      <h1>Grupos de materias</h1>
      <SubjectsListWithSearch />
    </div>
  )
}
