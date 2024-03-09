const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/relationshipDemo")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!");
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      _id: { _id: false },
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
  const u = new User({
    first: "Ravindu",
    last: "madhuranga",
  });
  u.addresses.push({
    city: "Matara",
    state: "Southern",
    country: "Sri Lanka",
  });
  const res = await u.save();
  console.log(res);
};

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    city: "Colombo",
    state: "Western",
    country: "Sri Lanka",
  });
  const res = await user.save();
  console.log(res);
};

// makeUser();
addAddress("65ebcfb45430f63db107eeb9");
