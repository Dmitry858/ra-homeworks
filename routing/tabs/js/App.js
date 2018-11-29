const App = () => {
  return (
    <Router>
      <div className="tabs">
        <nav className="tabs__items">
          <NavLink className="tabs__item" activeClassName="tabs__item-active" to="/" exact>Рефераты</NavLink>
          <NavLink className="tabs__item" activeClassName="tabs__item-active" to="/creator" exact>Криэйтор</NavLink>
          <NavLink className="tabs__item" activeClassName="tabs__item-active" to="/fortune" exact>Гадалка</NavLink>
        </nav>
        <div className="tabs__content">
          <Route exact path="/" component={Essay} />
          <Route exact path="/creator" component={Creator} />
          <Route exact path="/fortune" component={Fortune} />
        </div>
      </div>
    </Router> 
  );
}