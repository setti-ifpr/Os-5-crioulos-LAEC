function toggleDarkMode(){
        document.body.classList.toggle('dark-mode');
    }

    // Carousel logic
    let imgs = document.querySelectorAll('#carousel img');
    let current = 0;

    function showImg(idx){
        imgs.forEach((img,i)=>img.classList.toggle('active',i===idx));
    }
    function prevImg(){
        current = (current + imgs.length - 1)%imgs.length;
        showImg(current);
    }
    function nextImg(){
        current = (current + 1)%imgs.length;
        showImg(current);
    }

    // Optionally, auto-advance carousel
    setInterval(()=>{nextImg()},4200);

    // LOGO SVG
    document.getElementById('logo').innerHTML = `
    <svg class="logo" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="20" r="18" fill="#222"/>
      <circle cx="25" cy="20" r="12" fill="#ffdf28"/>
      <circle cx="55" cy="20" r="18" fill="#222"/>
      <circle cx="55" cy="20" r="12" fill="#ffdf28"/>
      <text x="10" y="37" fill="#222" font-size="10" font-family="Arial" font-weight="bold">Os Cinco</text>
      <text x="58" y="37" fill="#222" font-size="10" font-family="Arial" font-weight="bold">Crioulos</text>
    </svg>
    `;