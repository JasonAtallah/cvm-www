const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/cvm', function (err, db) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  loadBuyer(db)
    .then((buyer) => {
      return Promise.all([
        cleanBuyer(db, buyer),
        cleanVendors(db, buyer)
      ]);
    })
    .then(() => {
      process.exit(0);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    })
});

function loadBuyer(db) {
  return db.collection('buyers').findOne({'gProfile.email': 'cvmtest0001@gmail.com'});
}

function cleanBuyer(db, buyer) {
  const update = {
    $set: {
      gcalendar: null,
      locations: [],
      profile: {
        company: {
          name: null,
          address: null,
          zip: null,
          city: null,
          state: null
        },
        contact: {
          firstName: null,
          lastName: null,
          phone: null,
          email: null
        }
      }
    }
  };

  return db.collection('buyers').update({ _id: new ObjectID(buyer._id) }, update);
}

function cleanVendors(db, buyer) {
  return db.collection('threads').find({ 'buyer._id': new ObjectID(buyer._id)}).toArray()
    .then((threads) => {
      const vendorIds = threads.map(t => t.vendor._id);
      return Promise.all([
        db.collection('vendors').remove({ _id: { $in: vendorIds } }),
        db.collection('threads').remove({ 'buyer._id': new ObjectID(buyer._id)})
      ]);
    });
}
