let products = [];

const list = (req, res) => {

    let filteredProducts = products;

    const name = req.query['name'];
    
    if (name !== undefined) {
      filteredProducts = products.filter(product => name.indexOf(product.name) !== -1)
    }
  
    res.json(filteredProducts);

}

const add = (req, res) => {

    products.push({
        name: req.body.name,
        stock: req.body.stock,
        precio: req.body.precio
    })

    res.send();
}

const update = (req, res) => {

   
  let searchedElement = products.find(product => product.name === req.body.name);
  if (searchedElement === undefined) {
    res.status(404).send('Este producto no está en la lista');
    return;
  }

  searchedElement.name = req.body.name;
  searchedElement.stock = req.body.stock;
  searchedElement.precio = req.body.precio;

    res.send()
}

module.exports = {
    add,
    list,
    update
}