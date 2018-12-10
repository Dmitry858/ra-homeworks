const {withRouter} = window.ReactRouterDOM;

const HeaderComponent = ({location}) => {
  const articleId = location.pathname.match(/^\/article\/(\d+)\/?$/i);
  const id = articleId && articleId[1];

  return (
    <nav className="navbar navbar-light bg-light">
      {id
        ? <p className="navbar-brand">Уникальный идентификатор статьи: {id}</p>
        : <p className="navbar-brand">Статья не выбрана</p>
      }
    </nav>
  );
};

const Header = withRouter(HeaderComponent);
