using System.Collections.Generic;
using System.Threading.Tasks;
using RemindEd.API.Models;

namespace RemindEd.API.Data
{
    public interface IArticleRepository
    {
        Task<Article> CreateArticle(Article article);
        Task<Article> UpdateArticle(Article article);
        Task<Article> GetArticleByArticleId(int id);
        Task<ICollection<Article>> GetArticlesByUserId(int id);
        Task<ICollection<Article>> GetAllArticles();
        void DeleteArticleById(int articleId);
        void FollowArticle(int userId, int articleId);
        void UnfollowArticle(int userId, int articleId);
    }
}