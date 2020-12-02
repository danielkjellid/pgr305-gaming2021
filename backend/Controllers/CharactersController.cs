using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace backend.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class CharactersController : ControllerBase
    {
        private readonly CharactersService _charactersService;
        public CharactersController(CharactersService charactersService)
        {
            _charactersService = charactersService;
        }

        [HttpGet]
        public ActionResult<List<Character>> Get()
        {
            return _charactersService.Get();
        }

    }

}