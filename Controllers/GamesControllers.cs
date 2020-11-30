using GamingAPI.Models;
using GamingAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace GamingAPI.Controllers{

    [ApiController]
    [Route("[controller]")]
    public class GamesController : ControllerBase {

        private readonly GamesService _gamesService;

        public GamesController(GamesService gamesService){
            _gamesService = gamesService;
        }

        [HttpGet]
        public ActionResult<List<Game>> Get(){
            
            return _gamesService.Get();
        }

        [HttpGet("{id:length(24)}")]

        public ActionResult<Game> Get(string id){
            var game =_gamesService.Get(id);

            if( game == null ) {
                return NotFound();
            }

            return game;
        }

        [HttpPost]

        public ActionResult<Game> Post(Game game){
            _gamesService.Create( game );
            return game;
        }

        [HttpPut]

        public IActionResult Put(string id, Game gameIn) {
            var game = _gamesService.Get(id);

            if(game == null) {
                return NotFound();
            }

            _gamesService.Update(id, gameIn);
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]

        public IActionResult Delete(string id){
            var game = _gamesService.Get(id);

            if ( game == null ){
                return NotFound();
            }

            _gamesService.Remove( game.Id );
            return NoContent();
        }

    }

}
