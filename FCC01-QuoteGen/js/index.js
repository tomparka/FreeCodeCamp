function getQuote() {

	console.log("button clicked");

	$.ajaxSetup ({cache:false});

    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  		$(".quote-container").html(a[0].content + "<p id=\"author\">— " + a[0].title + "</p>")
	});
};
