using DAL.Data.DataModel;
using DAL.Data.IDataModel;
using DAL.Services.Service;
using DAL.Services.IService;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

// Add services to the container.

builder.Services.AddControllersWithViews();

#region Services
builder.Services.AddScoped<IGenericService, GenericService>();
builder.Services.AddScoped<IAuthData, AuthData>();
builder.Services.AddScoped<IUserData, UserData>();
builder.Services.AddScoped<ILocationData, LocationData>();
builder.Services.AddScoped<ICategoryData, CategoryData>();
//builder.Services.AddScoped<IIntegrationData, IntegrationData>();
#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();
app.UseRouting();
//app.UseCors();

//app.MapControllerRoute(
//    name: "default",
//    pattern: "{controller}/{action=Index}/{id?}");

//app.MapFallbackToFile("index.html"); ;
app.MapControllers();
app.Run();
