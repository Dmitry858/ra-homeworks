'use strict';

const Stars = function({count}) {
  if (count < 1 || count > 5 || typeof count !== 'number') {
    return null;  
  }
  const starsArray = new Array(count).fill(<li><Star /></li>);
  return <ul className="card-body-stars u-clearfix">{starsArray}</ul>;
}

Stars.defaultProps = { count: 0 };