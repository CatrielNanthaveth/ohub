import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>UNO HUB</h1>
      <h2>Comunidades de alumnos, para alumnos.</h2>

      <ul>
        <li>
          <Link href='/communities'>Comunidades IT</Link>
        </li>
        <li>
          <Link href='/groups'>Grupos de materias</Link>
        </li>
        <li>
          <Link href='/ntrs'>Sobre NTRS</Link>
        </li>
      </ul>
    </div>
  )
}
