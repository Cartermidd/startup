const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('rockcanyon');
const userCollection = db.collection('users');
const productCollection = db.collection('products');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}


function getProducts() {
}

async function removeProduct(productId) {
    await productCollection.deleteOne({ productId });
}

async function addProduct(product) {
    await productCollection.insertOne(product);
}



module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  getProducts,
  removeProduct,
  addProduct,
//   addScore,
//   getHighScores,
};
