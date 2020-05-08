const content = document.querySelector('.content');
const cross = document.querySelector('.cross');
cross.addEventListener('click', () => {
	content.classList.add('is-hidden');
});
