using MongoDB.Driver;
using backend.Models;
using System.Linq;
using System.Collections.Generic;

namespace backend.Services
{

    public class CharactersService
    {

        private readonly IMongoCollection<Character> _characters;

        public CharactersService(IBackendstoreDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _characters = database.GetCollection<Character>(settings.CharactersCollectionName);
        }

        public List<Character> Get()
        {
            return _characters.Find(character => true).ToList();
        }

        public Character Get(string id)
        {
            // get single character instance based on id
            return _characters.Find(character => character.Id == id).SingleOrDefault();
        }

        public Character Create(Character character)
        {
            // create a new character instance, and return created instance
            _characters.InsertOne(character);
            return character;
        }

        public void Update(string id, Character characterIn)
        {
            // replace instance with id with characterIn (new instance)
            _characters.ReplaceOne(character => character.Id == id, characterIn);

        }

        public void Remove(string id)
        {
            // delete instance based on id
            _characters.DeleteOne(character => character.Id == id);
        }

    }

}