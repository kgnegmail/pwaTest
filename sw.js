self.addEventListener("install",function(event){
    console.log("SW Installed");
    event.waitUntil(
        caches.open("static").then(function(cache){
            cache.addAll([
                "",
                "index.html",
                "images/480x480.jpeg",
                "jquery-3.1.1.min.js"
            ]);
        })
    );

});

self.addEventListener("activate",function(){
    console.log("SW Activated");
});

self.addEventListener("fetch",function(event){
    event.respondWith(
        caches.match(event.request).then(function(res){
            if(res){
                return res;
            }else {
                fetch(event.request);
            }
        })
    );
});