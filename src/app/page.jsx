import Link from 'next/link'
import React from 'react'
import styles from '@/styles/components.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>UNO HUB</h1>
      <h2>Comunidades de alumnos, para alumnos.</h2>

      <ul>
        <li className={styles.navigation}>
          <Link href='/communities'>Comunidades IT</Link>
        </li>
        <li className={styles.navigation}>
          <Link href='/groups'>Grupos de materias</Link>
        </li>
        <li className={styles.navigation}>
          <Link href='/ntrs'>Sobre NTRS</Link>
        </li>
      </ul>
    </div>
  )
}
