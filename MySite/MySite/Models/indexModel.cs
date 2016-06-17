using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Configuration;
using System.Net;
using System.ComponentModel.DataAnnotations;

namespace MySite.Models
{
    public class indexModel
    {
        public class SendEmailModel
        {
            [Required]
            public string FirstName { get; set; }

            [Required]
            public string Email { get; set; }

        }
        public async static Task SendEmail(string email, string subject, string message)
        {
            try
            {
                var _email = "gabrielbashe@gmail.com";
                var _epass = ConfigurationManager.AppSettings["EmailPassword"];
                var _dispName = "Blabla";
                MailMessage myMessage = new MailMessage();
                myMessage.To.Add(email);
                myMessage.From = new MailAddress(_email, _dispName);
                myMessage.Body = message;
                myMessage.IsBodyHtml = true;

                using (SmtpClient smtp = new SmtpClient())
                {
                    smtp.EnableSsl = true;
                    smtp.Host = "smtp.gmail.com";
                    smtp.Port = 465;
                    smtp.UseDefaultCredentials = false;
                    smtp.Credentials = new NetworkCredential(_email, _epass);
                    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                    smtp.SendCompleted += (s, e) => { smtp.Dispose(); };
                    await smtp.SendMailAsync(myMessage);
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}