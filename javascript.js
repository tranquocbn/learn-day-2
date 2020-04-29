var btnShow = document.getElementById('btn_show');
btnShow.addEventListener('click', function() {
	let content = document.getElementById('content');
	if(content.textContent === 'Learn day 2')
		content.textContent = 'Tran Quoc';
	else if(content.textContent === 'Tran Quoc')
		content.textContent = 'Learn day 2';
});