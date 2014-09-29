function foodSearch(){

	var foodURL="https://www.kimonolabs.com/api/2s22kqm8?apikey=zCUC8nH4XcYSSme7P7RcWQq07Ekb2AFB";
	$.ajax({
		url:foodURL,
		type:'GET',
		dataType:'jsonp',
		error:function(data){
			console.log("something went wrong...");
		},
		success:function(data){
			console.log("HOORAY!");

			console.log(data["results"]["collection1"]);
			var theSearchResults=data["results"]["collection1"];

			var theResultsString='<div class="row">';

			for (var i=0;i<theSearchResults.length;i++)
			{
				theResultsString+="<div class='col-md-4'>"+theSearchResults[i]["item"]+"</div>";
			}
			theResultsString+='</div>';
			$("#theResults").append(theResultsString);
		}
	});

}

function fbNews(){
	var facebookURL="http://graph.facebook.com/855748381116759/comments";
	$.ajax({
		url:facebookURL,
		type:'GET',
		dataType:'jsonp',
		error:function(data){
			console.log("god damn it, facebook!");
		},
		success:function(data){
			console.log("good job facebook!");
			console.log(data);
			var theNum=data['data'].length-1;
			var lastMessage=data['data'][theNum]['message'] + '  -- ' + data['data'][theNum]['from']['name'];
			console.log(lastMessage);
//			console.log(data[theNum]['message']);
			$("#news").html();
			$("#news").append(lastMessage);
		}
	})	
}
	




$(document).ready(function(){
	console.log("We are loaded");
	foodSearch();
	fbNews();
	theFade();
})

function theFade(){
    var quotes = $(".quotes");
    var quoteIndex = -1;
    var theWords=['Samurai','Beijing Restaurant','Foodlands'];
	function nextFade(){
		++quoteIndex;
		console.log(quoteIndex);
        quotes.text(theWords[quoteIndex%3])
            .fadeIn(500)
            .fadeOut(500,nextFade);
        
    }
    nextFade();
};