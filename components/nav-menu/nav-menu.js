export default function NavMenu (props) {
  const {menuItems} = props;

  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
        {
          menuItems.map((item) => {
            return (
              <li key={item.name} className="nav__item"><a className="nav__link" href={item.link}>{item.name}</a></li>
            );
          })
        }
      </ul>
    </nav>
  )
};
