using DeadlineService.UI.Models;
using DeadlineService.UI.Models.Auth;
using Microsoft.AspNetCore.Mvc;

namespace DeadlineService.UI.Controllers
{
    public class AuthorizationController : Controller
    {
        public IActionResult Index()
        {
            ResponseModel<LoginDTO> res = new("Неправильные данные");

            return View(res);
        }
        public IActionResult SignIn([FromForm] LoginDTO loginDTO)
        {
            return View();
        }
        public IActionResult RefreshPassword([FromForm] string email)
        {
            return View();
        }
        public IActionResult Registration([FromForm] LoginDTO loginDTO)
        {
            return View();
        }
        public IActionResult Dashboard()
        {
            return View();
        }
    }
}
