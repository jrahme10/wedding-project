using WeddingBackend.Data;
using WeddingBackend.Models;

namespace WeddingBackend.Services
{
    public class VendorService : IVendorService
    {
        private readonly IVendorRepository _vendorRepository;

        public VendorService(IVendorRepository vendorRepository)
        {
            _vendorRepository = vendorRepository;
        }

        public async Task<IEnumerable<Vendor>> GetAllVendorsAsync()
        {
            return await _vendorRepository.GetAllVendorsAsync();
        }

        public async Task<Vendor?> GetVendorByIdAsync(int id)
        {
            return await _vendorRepository.GetVendorByIdAsync(id);
        }

        public async Task<IEnumerable<Vendor>> GetVendorsByCategoryAsync(string category)
        {
            return await _vendorRepository.GetVendorsByCategoryAsync(category);
        }

        public async Task<int> AddVendorAsync(Vendor vendor)
        {
            return await _vendorRepository.AddVendorAsync(vendor);
        }

        public async Task<bool> UpdateVendorAsync(Vendor vendor)
        {
            return await _vendorRepository.UpdateVendorAsync(vendor);
        }

        public async Task<bool> DeleteVendorAsync(int id)
        {
            return await _vendorRepository.DeleteVendorAsync(id);
        }

        public async Task<IEnumerable<VendorCategory>> GetAllCategoriesAsync()
        {
            return await _vendorRepository.GetAllCategoriesAsync();
        }
    }
}