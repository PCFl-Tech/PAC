function FindProxyForURL(url, host) {
// If the hostname matches, send direct. 
    //if (shExpMatch(host, "*.googleusercontent.com|*.ggpht.com|*.googlevideo.com"))
if (shExpMatch(host, "*.googleapis.com|*.gvt1.com|*.gvt2.com|*.manageengine.com|*.samsungknox.com|android.apis.google.com|apptics.zoho.com|clients3.google.com|connectivitycheck.gstatic.com|jproxy.zoho.com|play-lh.googleusercontent.com|play.google.com|self.events.data.microsoft.com|wa.me|www.google.com|waze.com"))
       //return "PROXY 127.0.0.1:8080";
  return "DIRECT";
	   
 //default
	//return "DIRECT";
  return "PROXY 127.0.0.1:8080";
}
