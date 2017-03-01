angular.module('biography').controller('BiographyController', BiographyController);

function BiographyController(biographyService) {
	let vm = this;

	biographyService.ReturnBiography().then(function onSuccess(response) {
		vm.profile = {
			thumb: response.data.thumb,
			name: response.data.name,
			profession: response.data.profession,
			title: response.data.profile.title,
			description: response.data.profile.description
		};

		vm.objective = {
			title: response.data.objective.title,
			description: response.data.objective.description,
		};

		vm.personalSkill = {
			title: response.data.personalSkill.title,
			management: response.data.personalSkill.management,
			teamWork: response.data.personalSkill.teamWork,
			creative: response.data.personalSkill.creative,
			communication: response.data.personalSkill.communication
		};

		vm.contactMe = {
			title: response.data.contactMe.title,
			address: response.data.contactMe.address,
			tel: response.data.contactMe.tel,
			email: response.data.contactMe.email,
			webSite: response.data.contactMe.webSite
		};

		vm.education = {
			title: response.data.education.title,
			university: response.data.education.university
		};

		vm.experience = {
			title: response.data.experience.title,
			company: response.data.experience.company
		};

		vm.professionalSkill = {
			title: response.data.professionalSkill.title,
			tools: response.data.professionalSkill.tools
		};

		vm.award = {
			title: response.data.award.title,
			month: response.data.award.month,
			year: response.data.award.year,
			awardName: response.data.award.awardName,
			awardCity: response.data.award.city,
			description: response.data.award.description
		};
	}, function onError(erro) {
		console.log(erro);
	});
}