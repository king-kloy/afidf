/**
 * @class ArticleAPI runs CRUD operations on Article model
 * @constructor articleModel
 */

export default class ArticleAPI {
  constructor(articleModel) {
    this.articleModel = articleModel;
  }

  async getArticle(filter) {
    return await this.articleModel.findOne(filter);
  }

  async getArticles(filter) {
    return await this.articleModel.find(filter);
  }

  async sortArticlesBymetaTagsDesc(filter) {
    return await this.articleModel.find(filter, {}, { sort: { metaTags: -1 } });
  }

  async sortArticlesBymetaDescriptionDesc(filter) {
    return await this.articleModel.find(
      filter,
      {},
      { sort: { metaDescription: -1 } }
    );
  }

  async sortArticlesByDateDesc(filter) {
    return await this.articleModel.find(
      filter,
      {},
      { sort: { createdDate: -1 } }
    );
  }

  async getArticlesByDate(date) {
    return await this.articleModel.find({
      $and: [{ createdDate: { $gte: date } }],
    });
  }

  async addNewArticle(article) {
    const newArticle = this.articleModel(article);
    await newArticle.save();

    return newArticle;
  }

  async removeArticle(articleId) {
    return await this.articleModel.findByIdAndDelete(articleId);
  }

  async updateArticle(articleId, articleData) {
    return await this.articleModel.findOneAndUpdate(
      {
        _id: articleId,
      },
      {
        $set: articleData,
      }
    );
  }
}
