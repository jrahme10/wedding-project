using Microsoft.AspNetCore.Mvc;
using WeddingBackend.Models;
using WeddingBackend.Services;

namespace WeddingBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VendorsController : ControllerBase
    {
        private readonly IVendorService _vendorService;

        public VendorsController(IVendorService vendorService)
        {
            _vendorService = vendorService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vendor>>> GetAllVendors()
        {
            var vendors = await _vendorService.GetAllVendorsAsync();
            return Ok(vendors);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Vendor>> GetVendor(int id)
        {
            var vendor = await _vendorService.GetVendorByIdAsync(id);
            if (vendor == null)
            {
                return NotFound();
            }
            return Ok(vendor);
        }

        [HttpGet("category/{category}")]
        public async Task<ActionResult<IEnumerable<Vendor>>> GetVendorsByCategory(string category)
        {
            var vendors = await _vendorService.GetVendorsByCategoryAsync(category);
            return Ok(vendors);
        }

        [HttpPost]
        public async Task<ActionResult<Vendor>> AddVendor(Vendor vendor)
        {
            var id = await _vendorService.AddVendorAsync(vendor);
            vendor.Id = id;
            return CreatedAtAction(nameof(GetVendor), new { id = vendor.Id }, vendor);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVendor(int id, Vendor vendor)
        {
            if (id != vendor.Id)
            {
                return BadRequest();
            }

            var updated = await _vendorService.UpdateVendorAsync(vendor);
            if (!updated)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVendor(int id)
        {
            var deleted = await _vendorService.DeleteVendorAsync(id);
            if (!deleted)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}