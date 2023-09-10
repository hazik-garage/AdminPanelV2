using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Data.ImageUpload
{
    public class uploadImage
    {
        public string UploadImage(string image, string folderName, IWebHostEnvironment _env)
        {
            try
            {
                var chkImage = IsBase64Encoded(image
                    .Replace("data:image/png;base64,", "")
                    .Replace("data:image/jpg;base64,", "")
                    .Replace("data:image/jpeg;base64,", "")
                    .Replace("data:image/svg+xml;base64,", ""));

                if (chkImage)
                {
                    if (image != null && image != "")
                    {
                        image = uploadFiles(image, folderName, _env);
                    }
                }
            }
            catch { }

            return image;
        }

        
        private string uploadFiles(string image, string folderName, IWebHostEnvironment env)
        {
            try
            {
                if (image != null && image.ToString() != "")
                {

                    byte[] bytes = Convert.FromBase64String(image.Replace("data:image/png;base64,", "")
                        .Replace("data:image/jpg;base64,", "")
                        .Replace("data:image/jpeg;base64,", "")
                        .Replace("data:image/svg+xml;base64,", ""));

                    string webRootPath = env.WebRootPath;
                    string contentRootPath = env.ContentRootPath;
                    string extension = image.Contains("data:image/svg+xml;base64") ? ".svg" : ".jpg";
                    string path = "/ClientApp/src/assets/Upload/" + folderName + "/" + Path.GetFileName(Guid.NewGuid() + extension);
                    string filePath = contentRootPath + path;

                    System.IO.File.WriteAllBytes(filePath, bytes);

                    image = path.Replace("/ClientApp/src", "");

                }
                else
                {
                    image = "";
                }
            }
            catch (Exception ex)
            {
                image = "";
            }
            return image;
        }

        private bool IsBase64Encoded(string v)
        {
            try
            {
                // If no exception is caught, then it is possibly a base64 encoded string
                byte[] data = Convert.FromBase64String(v);
                // The part that checks if the string was properly padded to the
                // correct length was borrowed from d@anish's solution
                return (v.Replace(" ", "").Length % 4 == 0);
            }
            catch
            {
                // If exception is caught, then it is not a base64 encoded string
                return false;
            }
        }
    }
}
