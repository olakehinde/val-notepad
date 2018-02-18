// this is the template for the acordion where the data i.e poems will appear
var notepad = {
	template: '<div class="panel panel-info">' +
				    '<div class="panel-heading" role="tab" id="heading{{i}}">' +
				      '<h4 class="panel-title">' +
				        '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse{{i}}" aria-expanded="true" aria-controls="collapse{{i}}">' +
				          '{{title}}' +
				        '</a>' +
				      '</h4>' +
				    '</div>' +
				    '<div id="collapse{{i}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading{{i}}">' +
				      '<div class="panel-body">' +
				        '{{body}}' +
				      '</div>' +
				    '</div>' +
				  '</div>',
	init: function(){
		var data = notepad.fetch();

		notepad.display(data);

		$("#save").click(function(e){
			var title = $("#note-heading").val();
			var body = $("#note-body").val();

			notepad.save(title, body);
		});
		$("#clear").click(notepad.clear);
    },
    
    // this function saves data to the local storage
	save: function(title, body){
		var data = notepad.fetch();

		data.push({
			title: title,
			body: body
		});

		notepad.display(data);

        // this line is used to convert the json object to a string before saving it in the localstorage
		localStorage["notes"] = JSON.stringify(data);
    },
    
    // this function clears the poem title and poem body by setting their value to an empty ""
	clear: function(){
		$("#note-heading").val("");
		$("#note-body").val("");
    },
    
    // this function fetches data from the localStorage
	fetch: function(){
		var data = localStorage["notes"];
		if(typeof data == "undefined")
			data = [];
		else
			data = JSON.parse(data);

		return data;
    },
    
    // this funtion displays data in the accordion
	display: function(data){
		var HTML = "";
		var output = "";
		for(i = 0; i < data.length; i++){
			HTML = notepad.template;
			HTML = HTML.replace("{{i}}", i);
			HTML = HTML.replace("{{i}}", i);
			HTML = HTML.replace("{{i}}", i);
			HTML = HTML.replace("{{i}}", i);
			HTML = HTML.replace("{{i}}", i);
			HTML = HTML.replace("{{title}}", data[i].title);
			HTML = HTML.replace("{{body}}", data[i].body);
			output += HTML;
		}

		$("#accordion").html(output);
	}
}

// this function executes when page has loaded
$(document).ready(notepad.init);