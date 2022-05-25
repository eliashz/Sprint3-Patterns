const data = require ('./currency_conversions.json')

const decorator = (articulo) => {
    const divisaConv = articulo.divisa + '_EUR';
    articulo.euros = data[divisaConv] * articulo.precio;
    console.log(articulo);
}
module.exports = decorator;