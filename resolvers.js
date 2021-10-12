module.exports = {
    Query: {
      blog: (parent, args, { dataSources }, info) => {
        return dataSources.blogAPI.getBlogArticles(args);
      },
      blogById: (parent, { id }, { dataSources }, info) => {
        return dataSources.blogAPI.getBlogArticleById(id);
      },
    },
  };
  