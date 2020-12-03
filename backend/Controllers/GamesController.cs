using System.IO;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace backend.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class GamesController : ControllerBase
    {
        private readonly GamesService _gamesService;
        private readonly IWebHostEnvironment _hosting;
        public GamesController(GamesService gamesService, IWebHostEnvironment hosting)
        {
            _gamesService = gamesService;
            _hosting = hosting;
        }

        [HttpGet]
        public ActionResult<List<Game>> Get()
        {
            // return list of all games
            return _gamesService.Get();
        }

        [HttpGet("{id:length(24)}")]
        public ActionResult<Game> Get(string id) 
        {
            // get single game instance based on id
            var game = _gamesService.Get(id);

            // check if game doesnt exist
            if (game == null) 
            {
                // if it doesnt exits, return 404
                return NotFound();
            }

            // if game exists, return game instance
            return game;
        }

        [HttpPost]
        public ActionResult<Game> Post(Game game)
        {   
            // create instance and return instance created
            _gamesService.Create(game);
            return game;
        }
        
        [Route("[action]")]
        public void UploadImage(IFormFile file){
            string webRootPath = _hosting.WebRootPath;
            string absolutePath = Path.Combine($"{webRootPath}/images/games/{file.FileName}");
            using(var fileStream = new FileStream( absolutePath, FileMode.Create )){
                file.CopyTo( fileStream );
            }
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, Game gameIn)
        {   
            // get single game instance based on id
            var game = _gamesService.Get(id);

            // check if game doesnt exist
            if (game == null) 
            {   
                // if it doesnt exits, return 404
                return NotFound();
            }

            _gamesService.Update(id, gameIn);
            // only return status code
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {   
            // get single game instance based on id
            var game = _gamesService.Get(id);

            // check if game doesnt exist
            if (game == null) 
            {   
                // if it doesnt exits, return 404
                return NotFound();
            }

            _gamesService.Remove(game.Id);
            // only return status code
            return NoContent();
        }

    }

}