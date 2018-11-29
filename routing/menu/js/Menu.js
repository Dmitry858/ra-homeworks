const Menu = () => {  
  return (
    <nav className="menu">
      <NavLink to="/" className="menu__item" activeClassName="menu__item-active" exact>Главная</NavLink>
      <NavLink to="/drift" className="menu__item" activeClassName="menu__item-active" exact>Дрифт-такси</NavLink>
      <NavLink to="/timeattack" className="menu__item" activeClassName="menu__item-active" exact>Time Attack</NavLink>
      <NavLink to="/forza" className="menu__item" activeClassName="menu__item-active" exact>Forza Karting</NavLink>
    </nav>
  );
}