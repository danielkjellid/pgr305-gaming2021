using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace backend.Models
{
    public class Character
    {
        // When using MongoDB id is not a number.
        // Id will be a object id string
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Name { get; set; }

        public string Image { get; set; }

        public string Gender { get; set; }
        
        public string HomeWorld { get; set; }
        
        // games character are associated with
        public string[] gamesId { get; set; } 
    }
}