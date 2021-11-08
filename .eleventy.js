const Nunjucks = require('nunjucks');
const pluginRss = require('@11ty/eleventy-plugin-rss');

const articleCard = require('./plugins/article-card');

const now = new Date();

module.exports = function(config) {
    let nunjucksEnvironment = new Nunjucks.Environment(new Nunjucks.FileSystemLoader('_includes'));
    config.setLibrary('njk', nunjucksEnvironment);

    config.addPassthroughCopy('static');

    config.addLayoutAlias('post', 'layouts/post.njk');
    config.addLayoutAlias('default', 'layouts/index.njk');

    config.addPlugin(pluginRss);

    config.addCollection('articles', function(collection) {
        return collection.getFilteredByGlob('./src/articles/*.*').filter(item => {
            return item.data.draft !== true && item.data.date <= now;
        });
    });

    config.addPlugin(articleCard);

    return {
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: './src',
            output: './dist'
        }
    };
};
