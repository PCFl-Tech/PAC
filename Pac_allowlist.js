function FindProxyForURL(url, host) {
// If the hostname matches, send direct. 
    //if (shExpMatch(host, "*.googleusercontent.com|*.ggpht.com|*.googlevideo.com|play.google.com|play-lh.googleusercontent.com"))
if (shExpMatch(host, "*.manageengine.com|*.samsungknox.com|*.zoho.com"))
       //return "PROXY 127.0.0.1:8080";
  return "DIRECT";
	   
 //default
	//return "DIRECT";
  return "PROXY 127.0.0.1:8080";
}
