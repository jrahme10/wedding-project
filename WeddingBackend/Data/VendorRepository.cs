using System.Data;
using System.Data.SqlClient;
using WeddingBackend.Models;

namespace WeddingBackend.Data
{
    public class VendorRepository : IVendorRepository
    {
        private readonly IConfiguration _configuration;

        public VendorRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        private SqlConnection GetConnection()
        {
            return new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        }

        public async Task<IEnumerable<Vendor>> GetAllVendorsAsync()
        {
            var vendors = new List<Vendor>();
            
            using var connection = GetConnection();
            await connection.OpenAsync();
            
            using var command = new SqlCommand("SELECT Id, Name, Category, Description, ContactPerson, Email, Phone, Address, Price, ImageUrl, CreatedAt, UpdatedAt FROM Vendors ORDER BY Name", connection);
            using var reader = await command.ExecuteReaderAsync();
            
            while (await reader.ReadAsync())
            {
                vendors.Add(new Vendor
                {
                    Id = reader.GetInt32("Id"),
                    Name = reader.GetString("Name"),
                    Category = reader.GetString("Category"),
                    Description = reader.GetString("Description"),
                    ContactPerson = reader.GetString("ContactPerson"),
                    Email = reader.GetString("Email"),
                    Phone = reader.GetString("Phone"),
                    Address = reader.GetString("Address"),
                    Price = reader.GetDecimal("Price"),
                    ImageUrl = reader.GetString("ImageUrl"),
                    CreatedAt = reader.GetDateTime("CreatedAt"),
                    UpdatedAt = reader.IsDBNull("UpdatedAt") ? null : reader.GetDateTime("UpdatedAt")
                });
            }
            
            return vendors;
        }

        public async Task<Vendor?> GetVendorByIdAsync(int id)
        {
            using var connection = GetConnection();
            await connection.OpenAsync();
            
            using var command = new SqlCommand("SELECT Id, Name, Category, Description, ContactPerson, Email, Phone, Address, Price, ImageUrl, CreatedAt, UpdatedAt FROM Vendors WHERE Id = @Id", connection);
            command.Parameters.AddWithValue("@Id", id);
            
            using var reader = await command.ExecuteReaderAsync();
            
            if (await reader.ReadAsync())
            {
                return new Vendor
                {
                    Id = reader.GetInt32("Id"),
                    Name = reader.GetString("Name"),
                    Category = reader.GetString("Category"),
                    Description = reader.GetString("Description"),
                    ContactPerson = reader.GetString("ContactPerson"),
                    Email = reader.GetString("Email"),
                    Phone = reader.GetString("Phone"),
                    Address = reader.GetString("Address"),
                    Price = reader.GetDecimal("Price"),
                    ImageUrl = reader.GetString("ImageUrl"),
                    CreatedAt = reader.GetDateTime("CreatedAt"),
                    UpdatedAt = reader.IsDBNull("UpdatedAt") ? null : reader.GetDateTime("UpdatedAt")
                };
            }
            
            return null;
        }

        public async Task<IEnumerable<Vendor>> GetVendorsByCategoryAsync(string category)
        {
            var vendors = new List<Vendor>();
            
            using var connection = GetConnection();
            await connection.OpenAsync();
            
            using var command = new SqlCommand("SELECT Id, Name, Category, Description, ContactPerson, Email, Phone, Address, Price, ImageUrl, CreatedAt, UpdatedAt FROM Vendors WHERE Category = @Category ORDER BY Name", connection);
            command.Parameters.AddWithValue("@Category", category);
            
            using var reader = await command.ExecuteReaderAsync();
            
            while (await reader.ReadAsync())
            {
                vendors.Add(new Vendor
                {
                    Id = reader.GetInt32("Id"),
                    Name = reader.GetString("Name"),
                    Category = reader.GetString("Category"),
                    Description = reader.GetString("Description"),
                    ContactPerson = reader.GetString("ContactPerson"),
                    Email = reader.GetString("Email"),
                    Phone = reader.GetString("Phone"),
                    Address = reader.GetString("Address"),
                    Price = reader.GetDecimal("Price"),
                    ImageUrl = reader.GetString("ImageUrl"),
                    CreatedAt = reader.GetDateTime("CreatedAt"),
                    UpdatedAt = reader.IsDBNull("UpdatedAt") ? null : reader.GetDateTime("UpdatedAt")
                });
            }
            
            return vendors;
        }

        public async Task<int> AddVendorAsync(Vendor vendor)
        {
            using var connection = GetConnection();
            await connection.OpenAsync();
            
            using var command = new SqlCommand(
                "INSERT INTO Vendors (Name, Category, Description, ContactPerson, Email, Phone, Address, Price, ImageUrl, CreatedAt) " +
                "VALUES (@Name, @Category, @Description, @ContactPerson, @Email, @Phone, @Address, @Price, @ImageUrl, @CreatedAt); " +
                "SELECT CAST(SCOPE_IDENTITY() as int)", connection);
            
            command.Parameters.AddWithValue("@Name", vendor.Name);
            command.Parameters.AddWithValue("@Category", vendor.Category);
            command.Parameters.AddWithValue("@Description", vendor.Description);
            command.Parameters.AddWithValue("@ContactPerson", vendor.ContactPerson);
            command.Parameters.AddWithValue("@Email", vendor.Email);
            command.Parameters.AddWithValue("@Phone", vendor.Phone);
            command.Parameters.AddWithValue("@Address", vendor.Address);
            command.Parameters.AddWithValue("@Price", vendor.Price);
            command.Parameters.AddWithValue("@ImageUrl", vendor.ImageUrl);
            command.Parameters.AddWithValue("@CreatedAt", DateTime.UtcNow);
            
            var result = await command.ExecuteScalarAsync();
            return Convert.ToInt32(result);
        }

        public async Task<bool> UpdateVendorAsync(Vendor vendor)
        {
            using var connection = GetConnection();
            await connection.OpenAsync();
            
            using var command = new SqlCommand(
                "UPDATE Vendors SET Name = @Name, Category = @Category, Description = @Description, " +
                "ContactPerson = @ContactPerson, Email = @Email, Phone = @Phone, Address = @Address, " +
                "Price = @Price, ImageUrl = @ImageUrl, UpdatedAt = @UpdatedAt WHERE Id = @Id", connection);
            
            command.Parameters.AddWithValue("@Id", vendor.Id);
            command.Parameters.AddWithValue("@Name", vendor.Name);
            command.Parameters.AddWithValue("@Category", vendor.Category);
            command.Parameters.AddWithValue("@Description", vendor.Description);
            command.Parameters.AddWithValue("@ContactPerson", vendor.ContactPerson);
            command.Parameters.AddWithValue("@Email", vendor.Email);
            command.Parameters.AddWithValue("@Phone", vendor.Phone);
            command.Parameters.AddWithValue("@Address", vendor.Address);
            command.Parameters.AddWithValue("@Price", vendor.Price);
            command.Parameters.AddWithValue("@ImageUrl", vendor.ImageUrl);
            command.Parameters.AddWithValue("@UpdatedAt", DateTime.UtcNow);
            
            var rowsAffected = await command.ExecuteNonQueryAsync();
            return rowsAffected > 0;
        }

        public async Task<bool> DeleteVendorAsync(int id)
        {
            using var connection = GetConnection();
            await connection.OpenAsync();
            
            using var command = new SqlCommand("DELETE FROM Vendors WHERE Id = @Id", connection);
            command.Parameters.AddWithValue("@Id", id);
            
            var rowsAffected = await command.ExecuteNonQueryAsync();
            return rowsAffected > 0;
        }

        public async Task<IEnumerable<VendorCategory>> GetAllCategoriesAsync()
        {
            var categories = new List<VendorCategory>();
            
            using var connection = GetConnection();
            await connection.OpenAsync();
            
            using var command = new SqlCommand("SELECT Id, Name, Description FROM VendorCategories ORDER BY Name", connection);
            using var reader = await command.ExecuteReaderAsync();
            
            while (await reader.ReadAsync())
            {
                categories.Add(new VendorCategory
                {
                    Id = reader.GetInt32("Id"),
                    Name = reader.GetString("Name"),
                    Description = reader.GetString("Description")
                });
            }
            
            return categories;
        }
    }
}