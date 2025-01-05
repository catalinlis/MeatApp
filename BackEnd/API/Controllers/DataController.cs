using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Authorize]
public class DataController : BaseController{

    [HttpGet("check")]
    public IActionResult Check(){
        var username = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Name)?.Value;

        return Ok(new {username});
    }

}