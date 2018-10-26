// Template engine

// Infos

// OBS*** Lembrar de executar Fetch API no lugar de var dados (chamar por uma url API)


function renderTemplate(productTemplateBase, dadosProduto) {
 return productTemplateBase
 	.replace("###IMAGE###", dadosProduto.image)
 	.replace("###NAME###", dadosProduto.name)
 	.replace("##PROFESSION##",  dadosProduto.profession)
}


function renderAllProducts(productTemplateBase, products) {
	var outputHTML = '' 

	for(var i = 0; i < products.length; i++ ) {
	   outputHTML += renderTemplate(productTemplateBase, products[i])
	}

	return outputHTML
}
