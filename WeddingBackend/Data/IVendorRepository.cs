using WeddingBackend.Models;

namespace WeddingBackend.Data
{
    public interface IVendorRepository
    {
        Task<IEnumerable<Vendor>> GetAllVendorsAsync();
        Task<Vendor?> GetVendorByIdAsync(int id);
        Task<IEnumerable<Vendor>> GetVendorsByCategoryAsync(string category);
        Task<int> AddVendorAsync(Vendor vendor);
        Task<bool> UpdateVendorAsync(Vendor vendor);
        Task<bool> DeleteVendorAsync(int id);
        Task<IEnumerable<VendorCategory>> GetAllCategoriesAsync();
    }
}