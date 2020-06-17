

let suppliers = [];

const list = (req, res) => {

  let filteredSuppliers = suppliers;

  const name = req.query['name'];
  const place = req.query['place'];
  const price = req.query['price'];
  const services = req.query['services'];
  const score = req.query['score'];


  // No consigo que funcione el cálculo de la media de score
  if (name !== undefined) {
    filteredSuppliers = suppliers
      .filter(supplier => name.indexOf(supplier.name) !== -1)
      .map(function (field) {
        field = {}
        field.name = field.name
        field.place = field.place
        field.price = field.price
        field.services = field.services


        Array.prototype.sum = function (prop) {
          var total = 0
          for (var i = 0, _len = this.length; i < _len; i++) {
            total += this[i][prop]
          }
          return total
        }

        field.score = filteredSuppliers.sum("score") / filteredSuppliers.length

      })
  }

  else if (place !== undefined) {
    filteredSuppliers = suppliers.filter(supplier => place.indexOf(supplier.place) !== -1)
  }
  // filtered products debe ordenar de menor a mayor
  else if (price !== undefined) {

    filteredSuppliers.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));

    //filteredSuppliers = suppliers.sort(suppliers.price)
  }
  else if (services !== undefined) {
    filteredSuppliers = suppliers.filter(supplier => services.indexOf(supplier.services) !== -1)
  }
  // filtered products debe ordenar de mayor a menor
  else if (score !== undefined) {
    filteredSuppliers.sort((a, b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0));
  }

  res.json(filteredSuppliers);

}

const add = (req, res) => {

  suppliers.push({
    name: req.body.name,
    place: req.body.place,
    services: req.body.services,
    price: parseInt(req.body.price),
    score: parseInt(req.body.score)
  })

  res.send();
}



module.exports = {
  add,
  list,
}