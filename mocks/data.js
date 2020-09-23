const menus = [
  {
    name: `Планирование численности`,
    link: `#`,
  },
  {
    name: `Мастер 2020`,
    link: `#`,
  },
  {
    name: `Таблица`,
    link: `#`,
  },
  {
    name: `Организационный дизайн`,
    link: `#`,
  },
  {
    name: `Позиции`,
    link: `#`,
  },
  {
    name: `Мои прямые подчиненные`,
    link: `#`,
  },
];

const properties = [
  {
    title: `Общая информация`,
    items: [
      {
        name: `Документ`,
        value: `Профиль требований к должности`,
        nested: false,
      },
      {
        name: `Должность`,
        value: `Инженер`,
        nested: false,
      },
      {
        name: `Функциональное направление`,
        value: `Логистика`,
        nested: false,
      },
      {
        name: `Специализация`,
        value: `Обслуживание и ремонт механического, энергетического и электрооборудования`,
        nested: false,
      }
    ]
  },
  {
    title: `Образование`,
    items: [
      {
        name: `Степень`,
        value: `Высшее/Среднее высшее`,
        nested: false,
      },
      {
        name: `Специализация`,
        value: `Инженерно-техническая`,
        nested: false,
      }
    ]
  },
  {
    title: `Корпоративные компетенции`,
    items: [
      {
        name: `Сотрудничество`,
        value: `1`,
        nested: false,
      },
      {
        name: `Коммуникация и убеждения`,
        value: `2`,
        nested: false,
      },
      {
        name: `Достижение результата`,
        value: `3`,
        nested: false,
      },
      {
        name: `Системное мышление`,
        value: `3`,
        nested: false,
      },
      {
        name: `Культура безопасности`,
        value: `2`,
        nested: false,
      },
    ]
  },
  {
    title: `Дополнительные требования`,
    items: [
      {
        name: `Сотрудничество`,
        nested: true,
        items: [
          {
            name: `SAP ERP`,
            value: `Продвинутый уровень`,
            nested: false,
          },
          {
            name: `SAP HR`,
            value: `Продвинутый уровень`,
            nested: false,
          },
        ],
      },
      {
        name: `Иностранные языки`,
        nested: true,
        items: [
          {
            name: `Английский`,
            value: `Продвинутый уровень`,
            nested: false,
          },
        ],
      }
    ]
  }
];

export {menus, properties};
