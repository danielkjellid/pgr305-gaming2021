using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GamingAPI.Models{

    public class Game {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]

        public string Id { get; set; }

        public string Title { get; set; }

        public string Genre { get; set; }

        public int Price { get; set; }

        public string Console { get; set; }

    }

}
