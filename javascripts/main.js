// Choose branch based on query string
var query = window.location.search;
if (query) {
	var branch = query.replace("?", "");
} else {
	var branch = "master";
}

// Load readme content
$.ajax({
	url: "https://rawgit.com/dbashyal/Magento_PHP_Web_Developer/"+branch+"/README.md",
	dataType: 'text',
	success: function(data) {

		// Convert readme from markdown to html
		var converter = new Markdown.Converter();

		// Show html
		$(".readme").html(converter.makeHtml(data));

	}
});