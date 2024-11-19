// ye file sare item specific route ko store kregi
const express = require('express')
const router = express.Router()

// // middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// }
// router.use(timeLog)

router.post('/items',(req,res)=>{
    // res.send("Got a Post Request")
    res.json({
        "user": {
          "id": 12345,
          "name": "John Doe",
          "email": "johndoe@example.com",
          "isActive": true,
          "preferences": {
            "theme": "dark",
            "notifications": {
              "email": true,
              "sms": false
            },
            "language": "en"
          }
        },
        "products": [
          {
            "productId": 101,
            "name": "Laptop",
            "price": 999.99,
            "inStock": true,
            "tags": ["electronics", "computers"]
          },
          {
            "productId": 102,
            "name": "Wireless Mouse",
            "price": 29.99,
            "inStock": false,
            "tags": ["electronics", "accessories"]
          }
        ],
        "order": {
          "orderId": 9876,
          "date": "2024-11-19",
          "total": 1029.98,
          "status": "pending",
          "items": [
            {
              "productId": 101,
              "quantity": 1
            },
            {
              "productId": 102,
              "quantity": 1
            }
          ]
        }
      }
      )
})

router.put('/items/:id',(req,res)=>{
    res.send("Got a Put Request")
})

router.delete('/item/:id',(req,res)=>{
    res.send("Got a delete Request")
})

router.listen(port, () => {
  console.log(`express app listening on port ${port}`)
})

module.exports = router