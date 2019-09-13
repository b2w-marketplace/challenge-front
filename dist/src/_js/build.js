$(function() {
   $.post( "http://www.mocky.io/v2/5a5e38f3330000b0261923a5", function( data ) {
		console.log(data);
		var contbar = 0;
		var profileData = data.profile;
		var imag = profileData.image;
		if(imag == 'https://github.com/b2w-marketplace/code-challenge/blob/master/files/avatar-dev.png'){
			var absoluto = imag.split("/")[imag.split("/").length -1];
			imag = 'https://raw.githubusercontent.com/b2w-marketplace/code-challenge/master/files/'+absoluto;
		}
		$('#header-principal img').attr("src", imag);
		$('#header-principal h1').text(profileData.name);
		$('#header-principal h2').text(profileData.profession);
		$('.profile p').text(profileData.description);

		var txt_contact = "";
			txt_contact += "<p>"+profileData.contact.tel+"<br/>"+profileData.contact.cel+"</p>";
			txt_contact += "<p>"+profileData.contact.address+"</p>";
			txt_contact += "<p><a href='"+profileData.contact.website+"' target='_blank'>"+profileData.contact.website+"</a><br/><a href='mailto:"+profileData.contact.mail+"' target='_blank'>"+profileData.contact.mail+"</a></p>";
		$(".contact .address").append(txt_contact);

		$.each(profileData.skills, function(index, value) {
			contbar++;
			var newdivs = $("<div class='skill-bars'>");
			var txt = "";
			txt += "<h4>"+value.name+"</h4>";
			txt += "<div class='bars a"+contbar+"' >"+value.value+"</div>";
			txt += '</div>';
			newdivs.append(txt);
			$(".skill .conteiner").append(newdivs);
			$("body").append("<style>.skill .conteiner .bars.a"+contbar+"::after{width: "+value.value+" !important;}</style>");
		});
		$.each(profileData.experience, function(index, value) {
			var newdivs = $("<div class='work'>");
			var txt = "";
			txt += "<h3>"+value.name+"</h3>";
			txt += "<h4>"+value.date+"</h4>";
			txt += "<p>"+value.description+"</p>";
			txt += '</div>';
			newdivs.append(txt);
			$("#work .conteiner").append(newdivs);
		});
		$.each(profileData.education, function(index, value) {
			var newdivs = $("<div class='work'>");
			var txt = "";
			txt += "<h3>"+value.name+"</h3>";
			txt += "<h4>"+value.date+"</h4>";
			txt += "<p>"+value.description+"</p>";
			txt += '</div>';
			newdivs.append(txt);
			$("#education .conteiner").append(newdivs);
		});
	}); 
});