using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GamingAPI.Models {

    public class Character {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]

        public string Id { get; set; }

        public string Name { get; set; }

        public string Species { get; set; }

        public string Gender { get; set; }

        public string Homeworld { get; set; }

        public int gameId { get; set; }

    }

}
