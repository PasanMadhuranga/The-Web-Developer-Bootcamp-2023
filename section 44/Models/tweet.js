const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://127.0.0.1:27017/relationshipDemo")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!");
    console.log(err);
  });

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "Profile" },
});

const Profile = mongoose.model("Profile", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweets = async () => {
  const user = new Profile({ username: "chickenfan99", age: 61 });
  const tweet = new Tweet({ text: "omg I love my chicken family", likes: 0 });
  tweet.user = user;
  user.save();
  tweet.save();
};

const findTweet = async () => {
  const t = await Tweet.find({}).populate("user", "username"); // only return the username
  console.log(t);
};

// makeTweets();
findTweet();
