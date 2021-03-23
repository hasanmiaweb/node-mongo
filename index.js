var express = require('express')
var app = express()
const bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
const users = ["Asad", "Moin", "Sabed","hasan"];
app.get('/', (req, res) => {
const fruit = {
  product: 'ada',
  price: 200
}
  res.send(fruit)

});

app.get('/fruits/banana',(req,res) =>{
  res.send({fruit:"banana",quantity:1000, price:9000})
});


app.get('/users/:id', (req, res) =>{
  const id = req.params.id;
  const name = users[id]
  res.send({id,name})
})

// 

app.post('/addUser', (req, res) =>{
  console.log(req.body);
})




app.listen(3000, () => console.log("Listenting to port 3000"))