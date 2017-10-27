'use strict'



const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

  const listedPrice =
  listing =>
  name =>
    name === listing.name
      ? listing.price
      : 0

      const listings = [
        listing('detergent', 10),
        listing('hennessey', 100),
        listing('carlo rozzi', 20),
        listing('coffee', 5),
        listing('cookies', 6),
        listing('mountain dew', 2)
      ]
     

  const itemPrice = (listingArray, Item) => {
    let a = listingArray.map((i) => listing(Item, listedPrice(i)(Item)))
    return (a.map((p) => p = p.price)).reduce((total, next) => total + next, 0)    
}


/**
 * should return an array with the `itemName` repeated `count` number of times
 * ['carlo rossi', 'carlo rossi' ...6x]
 */
const itemRepeater =
  itemName =>
    count => { 
        let i = 1
        let array = []
        while (i++ <= count){
        array.push(({name:itemName, price: itemPrice(listings, itemName)}))      
        }
      return array    
    }
   
/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => {
      return customers.map((c) => ({name: c.name, list: entries(c.shoppingList).map( (i) => ({itemName: i[0], count: i[1]}))}))
                  .map( (element) => ({name: element.name, cart: element.list.map((itm) => itemRepeater(itm.itemName)(itm.count))}) )
    }

  
    

    const customers = [
      customer('adam', {
        'carlo rozzi': 6
      }),
      customer('david', {
        'detergent': 1,
        'hennessey': 1,
        'coffee': 1
      }),
      customer('michael', {
        'coffee': 3,
        'hennessey': 3
      }),
      customer('dillon', {
        'cookies': 3,
        'mountain dew': 3
      })
    ]
    
   
    

module.exports = {
  listing, 
  customer,
  constructCarts 
}
