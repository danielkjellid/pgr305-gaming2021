using MongoDB.Driver;
using backend.Models;
using System.Linq;
using System.Collections.Generic;

namespace backend.Services
{

    public class GamesService
    {

        private readonly IMongoCollection<Game> _games;

        public GamesService(IBackendstoreDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _games = database.GetCollection<Game>(settings.GamesCollectionName);
        }

        public List<Game> Get()
        {
            return _games.Find(game => true).ToList();
        }

        public Game Get(string id)
        {
            // get single game instance based on id
            return _games.Find(game => game.Id == id).SingleOrDefault();
        }

        public Game Create(Game game)
        {
            // create a new game instance, and return created instance
            _games.InsertOne(game);
            return game;
        }

        public void Update(string id, Game gameIn)
        {
            // replace instance with id with gameIn (new instance)
            _games.ReplaceOne(game => game.Id == id, gameIn);
            
        }

        public void Remove(string id)
        {
            // delete instance based on id
            _games.DeleteOne(game => game.Id == id);
        }

    }

}