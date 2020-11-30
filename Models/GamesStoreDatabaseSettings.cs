namespace GamingAPI.Models {

    public interface IGamesStoreDatabaseSettings {
        string GamesCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }

    }

    public class GamesStoreDatabaseSettings : IGamesStoreDatabaseSettings {
        public string GamesCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

}
