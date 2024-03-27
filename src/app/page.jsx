import Link from 'next/link'
import React from 'react'
import styles from '@/styles/components.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>UNO HUB</h1>
      <h2>Comunidades de alumnos, para alumnos.</h2>

      <ul className={styles.list}>
        <Link className={styles.link} href='/communities'>
          <li className={styles.navigation}>
            Comunidades IT
          </li>
        </Link>
        <Link className={styles.link} href='/groups'>
          <li className={styles.navigation}>
            Grupos de materias
          </li>
        </Link>
        <Link className={styles.link} href='/ntrs'>
          <li className={styles.navigation}>
            Sobre NTRS
          </li>
        </Link>
      </ul>
    </div>
  )
}
