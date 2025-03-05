// ----------
// Equipe
document.addEventListener("DOMContentLoaded", function () {
	const cards = document.querySelectorAll('.equipe');

	// Configuração do Intersection Observer
	const observerOptions = {
		root: null, // observar a viewport
		rootMargin: "0px",
		threshold: 0.2, // 20% do card visível
	};

	const observerCallback = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('in-view');
				observer.unobserve(entry.target); // Para de observar
			}
		});
	};

	// Criando o observer
	const observer = new IntersectionObserver(observerCallback, observerOptions);
	// Observando todos os cards
	cards.forEach(card => {
		observer.observe(card);
	}
	);
});

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});