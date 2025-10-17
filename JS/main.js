let trilho = document.getElementById('trilho');
let body = document.querySelector('body')
trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')

    if (trilho.classList.contains('dark')) {
        trilho.style.backgroundColor = 'gray';
    } else {
        trilho.style.backgroundColor = 'gray';
    }
}); 