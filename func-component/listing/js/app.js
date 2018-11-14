'use strict';

const container = document.getElementById('root');

function getPrice(code, price) {
  if (code === 'USD') return `\$${price}`;
  if (code === 'EUR') return `€${price}`;
  return `${price} ${code}`;
};

function getBalanceLevel(quantity) {
  if (quantity <= 10) {
    return 'item-quantity level-low';
  }
  if (quantity > 10 && quantity <= 20) {
    return 'item-quantity level-medium';
  }
  return 'item-quantity level-high';
}

function getTitle(title) {
  if (title.length <= 50) return title;
  return `${title.substring(0, 50)}...`;
}

const Listing = function({items}) {
  const itemsList = items.map(item => (
    <div className="item" key={item.listing_id}>
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{getTitle(item.title)}</p>
        <p className="item-price">{getPrice(item.currency_code, item.price)}</p>
        <p className={getBalanceLevel(item.quantity)}>{item.quantity} left</p>
      </div>
    </div>
  ));
  return <div className="item-list">{itemsList}</div>;
};

Listing.defaultProps = { items: [] };

fetch('https://neto-api.herokuapp.com/etsy')
  .then((res) => {
    if (200 <= res.status && res.status < 300) {
    return res;
    }
    throw new Error(response.statusText);
  })
  .then((res) => { 
    return res.json(); 
  })
  .then((data) => {
    ReactDOM.render(<Listing items={data} />, container);
  })
  .catch((error) => {
    console.log(error); 
  });
