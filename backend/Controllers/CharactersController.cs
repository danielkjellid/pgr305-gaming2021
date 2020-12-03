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
    public class CharactersController : ControllerBase
    {
        private readonly CharactersService _charactersService;
        private readonly IWebHostEnvironment _hosting;
        public CharactersController(CharactersService charactersService, IWebHostEnvironment hosting)
        {
            _charactersService = charactersService;
            _hosting = hosting;
        }

        [HttpGet]
        public ActionResult<List<Character>> Get()
        {
            // return list of all characters
            return _charactersService.Get();
        }

        [HttpGet("{id:length(24)}")]
        public ActionResult<Character> Get(string id) 
        {
            // get single character instance based on id
            var character = _charactersService.Get(id);

            // check if character doesnt exist
            if (character == null) 
            {
                // if it doesnt exits, return 404
                return NotFound();
            }

            // if character exists, return character instance
            return character;
        }

        [HttpPost]
        public ActionResult<Character> Post(Character character)
        {   
            // create instance and return instance created
            _charactersService.Create(character);
            return character;
        }

        [Route("[action]")]
        protected void SavePicture(IFormFile file) {
            string webrootPath = _hosting.WebRootPath;
            string absolutePath = Path.Combine($"{webrootPath}/images/characters/{file.FileName}");

            using(var fileStream = new FileStream(absolutePath, FileMode.Create)) 
            {
                file.CopyTo(fileStream);
            }
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, Character characterIn)
        {   
            // get single character instance based on id
            var character = _charactersService.Get(id);

            // check if character doesnt exist
            if (character == null) 
            {   
                // if it doesnt exits, return 404
                return NotFound();
            }

            _charactersService.Update(id, characterIn);
            // only return status code
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {   
            // get single character instance based on id
            var character = _charactersService.Get(id);

            // check if character doesnt exist
            if (character == null) 
            {   
                // if it doesnt exits, return 404
                return NotFound();
            }

            _charactersService.Remove(character.Id);
            // only return status code
            return NoContent();
        }

    }

}