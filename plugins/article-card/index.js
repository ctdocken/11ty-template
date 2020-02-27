module.exports = function(eleventyConfig) {
    eleventyConfig.addNunjucksShortcode('articleCard', function(article) {
        return `<a href="${article.url}">
        <div class="article-card">
            <div class="article-card__timestamp">
                ${article.data.date.toLocaleDateString('en-US', {
                    timeZone: 'UTC',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
                <span>${article.data.categories ? ' - ' : ''}${(article.data.categories || []).join(', ')}</span>
            </div>
            <div class="article-card__title">${article.data.title}</div>
        </div>
        </a>`;
    });
};
