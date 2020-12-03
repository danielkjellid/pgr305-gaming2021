namespace backend.Models
{
    public interface IBackendstoreDatabaseSettings
    {
        string GamesCollectionName { get; set; }
        string CharactersCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class BackendstoreDatabaseSettings : IBackendstoreDatabaseSettings
    {
        public string GamesCollectionName { get; set; }
        public string CharactersCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}