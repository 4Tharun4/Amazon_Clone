const images = document.querySelectorAll('.header-slider ul img');
const prev = document.querySelector('.control-prev');
const next = document.querySelector('.control-next');

let n = 0;
function change_slide(){
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
        
    }
    images[n].style.display = 'block';

}
change_slide();

prev.addEventListener('click',(e)=>{
  if(n > 0){
    n--;
  } else{
    n = images.length - 1;
  }
  change_slide();
})
next.addEventListener('click',(e)=>{
    if(n < images.length -1){
      n++;
    } else{
      n = 0 ;
    }
    change_slide();
  })

const scroll_bar = document.querySelectorAll('.products');
for(const item of  scroll_bar){
    item.addEventListener('wheel',(evt)=>{
      evt.preventDefault();
      item.scrollLeft += evt.deltaY; 
    });
  }


  // const url = ('https://countryinfoapi.com/api/languages');
  // fetch(url)
  // .then(response=>response.json())
  // .then(data=>console.log(data));
    
 
  