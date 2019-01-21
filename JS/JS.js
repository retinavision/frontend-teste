
$.getJSON('http://gateway.marvel.com/v1/public/comics?format=graphic%20novel&ts=1&apikey=fb7c4430debd3461714de4deebf3d6a5&hash=3c2d64d6a94cb20ec8f4e8fbb36bc236',

  
    function(data) {

//Footer and section selection

var tmp = document.getElementById("mvl-section")
var foot = document.getElementById("mvl-footer")

      var string =""
      string +="<div class='mvl-grid'>";

      //Picking results

      for(var i = 0; i<data.data.results.length; i++) {
                 var element = data.data.results[i] ;

      //Applying

          string += "<div class='mvl-box'>"
          string += "<h4>" +element.title+ "</h4>" 
          string += "<img src='"+ element.thumbnail.path +"/portrait_incredible."+element.thumbnail.extension+"'/>";
          string += "<h4>" + "$" + +element.prices[0].price+ "</h4>"
          string += "<button>" + "More info" + "</button>"
          string +=  "</div>"

        tmp.innerHTML = string;

        foot.innerHTML = data.attributionHTML;
        "</div>"
      }

});



