/*
 * Markimago
 * Simplified resources loader
 *
 * By : Nathaniel Mannawi (nmimagine)
 */
var Markimago = {
    createMarker : function(marks){
        this.marks = marks;
    },
    mark : function(options){
        var defaultopt = {alt : true, title : true};
        if(options == null || options == undefined)
            options = defaultopt;
            
            for(var m in this.marks){            
                var img = document.getElementsByTagName("img");
                for(var i = 0; i < img.length; i++){
                    if(img[i].getAttribute("name") == m){
                        document.getElementsByTagName("img")[i].setAttribute("src", Markimago.marks[m]);
                        
                        if(options.alt == true)
                        {
                            document.getElementsByTagName("img")[i].setAttribute("alt", m);
                        }
                        else if(options.alt == false || options.alt == undefined){
                            document.getElementsByTagName("img")[i].setAttribute("alt", "");
                        }
                        if(options.title == true)
                        {                        
                            document.getElementsByTagName("img")[i].setAttribute("title", m);
                        }
                        else if(options.title == false || options.title == undefined){
                            document.getElementsByTagName("img")[i].setAttribute("title", "");
                        }                        
                    }
                    else{
                        
                    }
                }
                
                var a = document.getElementsByTagName("a");
                for(var i = 0; i < a.length; i++){
                    if(a[i].getAttribute("name") == m){
                        document.getElementsByTagName("a")[i].setAttribute("href", Markimago.marks[m]);
                        
                        if(options.title == true)
                        {                        
                            document.getElementsByTagName("a")[i].setAttribute("title", m);
                        }
                        else if(options.title == false || options.title == undefined){
                            document.getElementsByTagName("a")[i].setAttribute("title", "");
                        }                        
                    }
                    else{
                        
                    }
                }
                
                var script = document.getElementsByTagName("script");
                for(var i = 0; i < script.length; i++){
                    if(script[i].getAttribute("name") == m){
                        document.getElementsByTagName("script")[i].setAttribute("src", Markimago.marks[m]);
                        document.getElementsByTagName("script")[i].setAttribute("type", "text/javascript");
                    }
                    else{
                        
                    }
                }
                
                var link = document.getElementsByTagName("link");
                for(var i = 0; i < link.length; i++){
                    if(link[i].getAttribute("name") == m){
                        document.getElementsByTagName("link")[i].setAttribute("href", Markimago.marks[m]);
                    }
                    else{
                        
                    }
                }                
            }
    }
};
