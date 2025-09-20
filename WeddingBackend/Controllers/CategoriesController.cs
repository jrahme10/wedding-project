using Microsoft.AspNetCore.Mvc;
using WeddingBackend.Models;
using WeddingBackend.Services;

namespace WeddingBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly IVendorService _vendorService;

        public CategoriesController(IVendorService vendorService)
        {
            _vendorService = vendorService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<VendorCategory>>> GetAllCategories()
        {
            var categories = await _vendorService.GetAllCategoriesAsync();
            return Ok(categories);
        }
    }
}