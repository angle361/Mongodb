const mongoose = require("mongoose");
// Connection URL
//mongoose.connect("mongodb://localhost:27017/fruitsDB");  //if db is not there already it will create it
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,             //structure of our db
    review: String,
});

const Fruit =mongoose.model("Fruit", fruitSchema);  //it will change Fruit --> Fruits
                                                    //it will follow fruitSchema structure
const apple= new Fruit(                             //Fruit is an instance of collection named "fruits"
    {
    name:"Apple",
    rating :5,
    review: "good"
    }
);
const orange= new Fruit(
    {
    name:"orange",
    rating :6,
    review: "good"
    }
);
const banana= new Fruit(
  {
  name:"banana",
  rating :4,
  review: "best"
  }
);

// fruit.save();  //to save fruit document in Fruits collection in fruitsDB db
// fruit2.save();

Fruit.insertMany([apple,orange,banana], function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("success");
  }
})
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(fruits)
      callback(fruits);
    });
  }