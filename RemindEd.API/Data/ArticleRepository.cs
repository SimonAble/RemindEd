using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using RemindEd.API.DTO;
using RemindEd.API.Models;

namespace RemindEd.API.Data
{
    public class ArticleRepository : IArticleRepository
    {
        private readonly DataContext context;

        public ArticleRepository(DataContext context)
        {
            this.context = context;
        }

        public async Task<Article> CreateArticle(Article article)
        {
            article.LastUpdatedByID = article.UserID;
            article.LastUpdatedDate = DateTime.Now;
            article.CreatedByID = article.UserID;
            article.CreatedDate = DateTime.Now;

            this.context.Article.Add(article);
            await this.context.SaveChangesAsync();

            return article;
        }

        public void DeleteArticleById(int articleId)
        {
            throw new NotImplementedException();
        }

        public void FollowArticle(int userId, int articleId)
        {
            throw new NotImplementedException();
        }

        public Task<ICollection<Article>> GetAllArticles()
        {
            throw new NotImplementedException();
        }

        public async Task<Article> GetArticleByArticleId(int id)
        {
            var article = await this.context.Article
                .Where(a => a.ArticleID == id)
                .FirstOrDefaultAsync();

            return article;
        }

        public async Task<ICollection<Article>> GetArticlesByUserId(int id)
        {
            var articles = await this.context.Article
                .Where(a => a.UserID == id)
                .OrderByDescending(a => a.LastUpdatedDate)
                .ToListAsync();

            return articles;
        }

        public void UnfollowArticle(int userId, int articleId)
        {
            throw new NotImplementedException();
        }

        public async Task<Article> UpdateArticle(Article article)
        {
            if(article != null) {
                var articleFromRepo = this.context.Article.FirstOrDefault(a => a.ArticleID == article.ArticleID);

                articleFromRepo.ArticleTitle = article.ArticleTitle;
                articleFromRepo.ArticleContents = article.ArticleContents;
                articleFromRepo.ArticleDescription = article.ArticleDescription;
                articleFromRepo.LastUpdatedByID = article.UserID;
                articleFromRepo.LastUpdatedDate = DateTime.Now;

                await this.context.SaveChangesAsync();

                return articleFromRepo;
            }
            
            throw new Exception ("Article Does not exist");
        }
    }
}