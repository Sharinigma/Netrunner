var ExtremblerCookieManager = {
	cookieLiveTime: 100,
    cookieName: '',
    baseUrl: '',
    
  
    setCookieLiveTime: function(value)
    {
        this.cookieLiveTime = value;
    },
    

    setCookieName: function(value)
    {
        this.cookieName = value;
    },
    
 
    unsetCookieName: function(value)
    {
        this.cookieName = '';
    },

    /**
    * setting Base url on cookie if need
    */
    setBaseUrl: function(url)
    {
        this.baseUrl = url;
    },
    

    getBaseUrl: function(url)
    {
        return this.baseUrl;
    },


    createCookie: function(name) {
        if(name != ''){
            this.setCookieName(name);
            var days = this.cookieLiveTime;
            var value = 1;
            var name = this.cookieName;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                var expires = "; expires="+date.toGMTString();
            }
            else var expires = "";
            document.cookie = escape(name)+"="+escape(value)+expires+"; path=/";
        }
    },
    

    readCookie: function(name) {
        if(name != ''){
            this.setCookieName(name);
            var name = this.cookieName;
            var nameEQ = escape(name) + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length,c.length));
            }
            return null;
        }
        return null;
    },
};
