using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace backend.Models 
{
    public class Game 
    {
        // When using MongoDB id is not a number.
        // Id will be a object id string
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Title { get; set; }

        public string Image { get; set; }
        
        public string Genre { get; set; }

        public int Price { get; set; }
        
        public string Console { get; set; }
    }
}