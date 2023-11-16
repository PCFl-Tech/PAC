function FindProxyForURL(url, host) {
// If the hostname matches, send direct. 
    if (shExpMatch(host, "*.googleusercontent.com|*.ggpht.com"))
       return "PROXY 127.0.0.1:8080"; 
	   
 //default
	return "DIRECT";
}
