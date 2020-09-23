import Head from 'next/head';
import NavMenu from '../components/nav-menu/nav-menu';
import Properties from '../components/properties/properties';

import {menus, properties} from '../mocks/data'

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Axes</title>
      </Head>

      <div className="container">
        <header className="header">
          <NavMenu menuItems={menus}/>
        </header>
        <main className="main">
          <h1 className="visually-hidden">Мои прямые подчиненные</h1>
          <ul className="main__description description__list">
            <li className="description__item">Свойства</li>
            <li className="description__item">Значение</li>
          </ul>
          <Properties properties={properties}/>
        </main>
      </div>
    </>
  )
};
