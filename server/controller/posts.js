let postModel = require("../model/post");
const { MongoClient } = require("mongodb");

const getAllPost = async (req, res) => {
  try {
    const post = await postModel.find().sort({ createAt: -1 });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(`Error in Getting All Posts, Error: ${error}`);
  }
};

const getPostByURL = async (req, res) => {
  const { url } = req.params;

  try {
    const post = await postModel.find({ permalink: url });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(`Error in Getting Single Post, Error: ${error}`);
  }
};

// Get all the Post
const postPagination = async (req, res) => {
  const page = req.query.page || 0;
  const postPerPage = 20;

  try {
    const getPost = await postModel
      .find()
      .skip(page * postPerPage)
      .limit(postPerPage);
    // .sort({ createdAt: -1 });
    res.status(200).json(getPost);
  } catch (error) {
    res.status(500).json(`Error in Getting Pagination Post, Error: ${error}`);
  }
};

const categoryPost = async (req, res) => {
  const { type } = req.params;

  try {
    const post = await postModel.find({ category: type });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(`Error in Getting Category Posts, Error: ${error}`);
  }
};

const createPost = async (req, res) => {
  const {
    title,
    image,
    file,
    name,
    size,
    language,
    rating,
    category,
    rom,
    isdraft,
    permalink,
  } = req.body;

  try {
    const createdPost = await postModel.create({
      title,
      image,
      file,
      name,
      size,
      language,
      rating,
      category,
      rom,
      isdraft,
      permalink,
    });

    res.status(200).json(createdPost);
  } catch (error) {
    res.status(500).json(`Error Creating Post, Error: ${error}`);
  }
};

// Update Post
const updatePost = async (req, res) => {
  const {
    id,
    title,
    image,
    file,
    name,
    size,
    language,
    rating,
    category,
    rom,
    isdraft,
    permalink,
  } = await req.body;

  try {
    const updatepost = await postModel.findByIdAndUpdate(
      { _id: id },
      {
        title,
        image,
        file,
        name,
        size,
        language,
        rating,
        category,
        rom,
        isdraft,
        permalink,
      }
    );

    res.status(200).json(updatepost);
  } catch (error) {
    res.status(200).json(`Error Updating Post, Error: ${error}`);
  }
};

// Delete Post
const deletePost = async (req, res) => {
  const { id } = await req.params;

  try {
    const deletePost = await postModel.findByIdAndDelete(id);
    res.status(200).json(deletePost);
  } catch (error) {
    res.status(500).json(`Error Deleting Post, Error: ${error}`);
  }
};

// Get Search Post
const searchPost = async (req, res) => {
  const { query } = req.params;
  try {
    const agg = [
      {
        $search: {
          index: "bigroms",
          text: {
            query: query,
            path: {
              wildcard: "*",
            },
          },
        },
      },
    ];

    const client = await MongoClient.connect(`${process.env.MONGODB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const coll = client.db("test").collection("posts");
    const cursor = coll.aggregate(agg);
    const result = await cursor.toArray();

    res.status(200).json(result);
    await client.close();
  } catch (error) {
    res.status(500).json(error);
  }
};

const uploadGameIcon = async (req, res) => {
  let featuredimage = req.file ? req.file.originalname : null;

  try {
    res.status(200).json({ featuredimage });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  getAllPost,
  getPostByURL,
  postPagination,
  categoryPost,
  createPost,
  updatePost,
  deletePost,
  searchPost,
  uploadGameIcon,
};
