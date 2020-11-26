using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RemindEd.API.Data;
using RemindEd.API.Models;

namespace RemindEd.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController: Controller
    {
        private readonly IArticleRepository articleRepository;

        public ArticleController(IArticleRepository articleRepository) {
            this.articleRepository = articleRepository;
        }

        [HttpPost("CreateArticle")]
        public async Task<IActionResult> CreateArticle(Article article)
        {
            var savedArticle = this.articleRepository.CreateArticle(article);
            if(await savedArticle != null)
                return Created("Article Created", article);

            throw new Exception($"Creating new Article failed...");

        }

        [HttpPut("UpdateArticle")]
        public async Task<IActionResult> SaveArticle(Article article)
        {
            var savedArticle = this.articleRepository.UpdateArticle(article);
            if(await savedArticle != null)
                return Ok(savedArticle);

            throw new Exception($"Creating new Article failed...");

        }

        [HttpGet("GetArticle/{userId}")]
        public async Task<IActionResult> GetArticle(int userId) 
        {
            var articles = await this.articleRepository.GetArticleByArticleId(userId);

            if(articles != null) {
                return Ok(articles);
            }

            throw new Exception($"Could not retrieve articles for user {userId}");
        }

        [HttpGet("GetArticles/{userId}")]
        public async Task<IActionResult> GetArticles(int userId) 
        {
            var articles = await this.articleRepository.GetArticlesByUserId(userId);

            if(articles != null) {
                return Ok(articles);
            }

            throw new Exception($"Could not retrieve articles for user {userId}");
        }


    }
}