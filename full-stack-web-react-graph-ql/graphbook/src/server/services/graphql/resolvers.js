const posts = [
  {
    id: 2,
    text: "Lorem ipsum",
    user: {
      avatar:
        "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
      username: "Test User"
    }
  },
  {
    id: 1,
    text: "Lorem ipsum ok",
    user: {
      avatar:
        "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
      username: "Test User 2"
    }
  }
];

const resolvers = {
  RootQuery: {
    posts(root, args, context) {
      return posts;
    }
  }
};

export default resolvers;
