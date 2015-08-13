function onLoad(){
	console.log("onLoad!");
	$("#form_submit").click(formSubmit);
	$("#form_reset").click(formReset);
	$("#form_delete").click(formDelete);
	refreshTable();
}
function formSubmit(){
	console.log("submit!");
	var c = {};
	c.id = $("#id_field").prop('value');
	c.name = $("#name_field").prop('value');
	c.surname = $("#surname_field").prop('value');
	c.city = $("#city_field").prop('value');
	c.phone = $("#phone_field").prop('value');

	$.ajax({
		url: "/api/save",
		method: "POST",
		contentType: "application/json",
		data: JSON.stringify(c),
		statusCode: {
			400: function() {
				alert("bad request");
			},
			204: function() {
				alert("saved");
				refreshTable();
			}
		}
	});
}
function formReset(){
	$("#id_field").prop('value','');
	$("#name_field").prop('value','');
	$("#surname_field").prop('value','');
	$("#city_field").prop('value','');
	$("#phone_field").prop('value','');
	$("#form_delete").addClass("hidden");
}
function formDelete(){
	if (confirm("Delete contact ?")) {
		$.ajax({
			url: "/api/delete/" + $("#id_field").prop('value'),
		}).done(function(){
			alert("deleted");
			formReset();
			refreshTable();
		})
	}
}
function refreshTable(){
	$.ajax({
		url: "/api/all",
		method: "GET",
	}).done(function(data){
		var table = $("#data_table tbody");
    	table.empty();
		data.forEach(function(c){
			console.log(c);
			var row = $(document.createElement("tr"));
			var col;
            col = $(document.createElement("td") );
            var edit_btn = $(document.createElement("button") );
            edit_btn.addClass("btn");
            edit_btn.click(function(c){ return function(){
                console.log("edited: ",c);
                $("#id_field").prop('value',c.id);
                $("#name_field").prop('value',c.name);
                $("#surname_field").prop('value',c.surname);
                $("#city_field").prop('value',c.city);
                $("#phone_field").prop('value',c.phone);
                $("#form_delete").removeClass("hidden");
            }}(c));
            edit_btn.text("Edit");
            col.append(edit_btn);
            row.append(col);

			col = $(document.createElement("td") );
            col.text(c.name);
			row.append(col);
			col = $(document.createElement("td") );
			col.text(c.surname);
			row.append(col);
			col = $(document.createElement("td") );
			col.text(c.city);
			row.append(col);
			col = $(document.createElement("td") );
			col.text(c.phone);
			row.append(col);
			table.append(row);
		})
	})
}