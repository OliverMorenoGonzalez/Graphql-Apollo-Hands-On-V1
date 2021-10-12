const blogArticles = require('../data/blog.json');
const {DataSource} = require('apollo-datasource');
const _ = require('lodash');

class BlogAPI extends DataSource {
    constructor(){
        super();
    }

    initialize(config){

    }

    getBlogArticles(args) {
        return _.filter(blogArticles, args);
    }

    getBlogArticleById(id) {
        const blogArticle = _.filter(blogArticles, { id: parseInt(id) });
        return blogArticle[0];
    }
}

module.exports = BlogAPI;