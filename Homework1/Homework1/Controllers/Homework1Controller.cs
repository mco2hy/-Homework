using Homework1.Data.Dto;
using Microsoft.AspNetCore.Mvc;

namespace Homework1.Controllers
{
    public class Homework1Controller : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult SendAction([FromBody]Homework1SendActionDto homework1SendActionDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(error: "Bizde yapardık zamanında");
            }
            return new JsonResult("ok");
        }
    }
}