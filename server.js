// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const playlistSchema = new mongoose.Schema({
  name: String,
  author: String,
  active: Boolean,
});

const PlayList = new mongoose.model("Playlist", playlistSchema);

const createDocument = async () => {
  try {
    const reactPlaylist = new PlayList({
      name: "JavaScript",
      author: "Ali",
      active: false,
    });
    const result = await reactPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();
