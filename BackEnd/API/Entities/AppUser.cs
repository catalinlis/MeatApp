using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace API.Entities;

public class AppUser : IdentityUser<int> {
    [Required(ErrorMessage = "Firstname is required")]
    public string Firstname { get; set; } = string.Empty;
    [Required(ErrorMessage = "Lastname is required")]
    public string Lastname { get; set; } = string.Empty;
    [Required(ErrorMessage = "Email is required")]
    public override string Email { get; set; } = string.Empty;
    [Required(ErrorMessage = "Gender is required")]
    public string Gender { get; set; } = string.Empty;
    [Required(ErrorMessage = "Date of Birth required")]
    public DateTime DateOfBirth { get; set; }
    [Required(ErrorMessage = "Country is required")]
    public string Country { get; set; } = string.Empty;
    [Required(ErrorMessage = "City is required")]
    public string City { get; set; } = string.Empty;
}