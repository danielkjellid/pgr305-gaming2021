using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace backend.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class GamesController : ControllerBase
    {
        private readonly GamesService _gamesService;
        public GamesController(GamesService gamesService)
        {
            _gamesService = gamesService;
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