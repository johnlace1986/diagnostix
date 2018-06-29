using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace diagnostix.SSO.Models.AccountViewModels
{
    public class LoggedOutViewModel
    {
        public Boolean AutomaticRedirectAfterSignOut { get; set; }
        public String PostLogoutRedirectUri { get; set; }
        public String ClientName { get; set; }
        public String SignOutIframeUrl { get; set; }
        public String LogoutId { get; set; }
        public String ExternalAuthenticationScheme { get; set; }
    }
}
