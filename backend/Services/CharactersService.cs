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
            return _characters.Find(character => character.Id == id).SingleOrDefault();
        }

    }

}