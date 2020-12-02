namespace backend.Models
{
    public interface IBackendstoreDatabaseSettings
    {
        string CharactersCollectionName { get; set; }
        string GamesCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class BackendstoreDatabaseSettings : IBackendstoreDatabaseSettings
    {
        public string CharactersCollectionName { get; set; }
        public string GamesCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}