let gear1 = document.getElementById('gear1');
let gear2 = document.getElementById('gear2');
let header = document.getElementById('header');
let logoHolder = document.getElementById('logoHolder');
let logo = document.createElement('img');
let headerBase = document.getElementById('headerBase');
let headerTooth = document.querySelectorAll('.headerTooth');
let category = document.querySelectorAll('.category')
let categoryContent = document.querySelectorAll('.categoryContent')
let orbit = document.querySelectorAll('.orbit');
let orbitGearContainer = document.querySelectorAll('.orbitGearContainer');
let orbitGear = document.querySelectorAll('.orbitGear')
let orbitOne = document.getElementById('orbitOne');
let orbitTwo = document.getElementById('orbitTwo');
let orbitThree = document.getElementById('orbitThree');
let spokes = document.querySelectorAll('.spoke');
let spokes2 = document.querySelectorAll('.spoke2');
let spokes3 = document.querySelectorAll('.spoke3');
let baseOdd = document.querySelectorAll('.baseTOdd');
let baseEven =  document.querySelectorAll('.baseTEven');
logo.src = './assets/whitesmokeLogo.png';
logo.setAttribute('id', 'logo');

console.log(baseOdd, baseEven)

window.onscroll = function(){
  gear1.style.transform = `rotate(${window.pageYOffset + 22.5}deg)`;
  gear2.style.transform = `rotate(-${window.pageYOffset}deg)`;

  for(gear of baseEven){
    gear.style.transform = `rotate(${window.pageYOffset + 22.5}deg)`;
  }
  for(gear of baseOdd){
    gear.style.transform = `rotate(-${window.pageYOffset}deg)`;
  }


  if (window.scrollY > 100) {
    header.style.backgroundColor = 'rgba(115, 157, 245, .95)';
    header.style.transition = 'all .3s';
    header.style.borderBottom = '1px solid whitesmoke';
    logoHolder.appendChild(logo);
    headerBase.style.border = '.5em solid rgba(255, 215, 0)';
    headerBase.style.backgroundColor = 'rgb(115, 157, 245)';
    headerBase.style.transition = '.3s';
    headerTooth.forEach(tooth => {
      tooth.style.backgroundColor = 'rgba(255, 215, 0)';
      tooth.style.transition = '.3s';
    });
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.transition = 'all .3s';
    header.style.borderBottom = 'transparent';
    logoHolder.removeChild(logo);
    headerBase.style.border = '.5em solid rgb(150, 150, 150)';
    headerBase.style.backgroundColor = 'white';
    headerBase.style.transition = '.3s'
    headerTooth.forEach(tooth => {
      tooth.style.backgroundColor = 'rgb(150, 150, 150)';
      tooth.style.transition = '.3s';
   });
}
}

for (let i = 0; i < spokes.length; i++){
  spokes[i].style.transform = `rotate(${(360/spokes.length)*(i)}deg)`
  spokes2[i].style.transform = `rotate(${(360/spokes.length)*(i)}deg)`
  spokes3[i].style.transform = `rotate(${(360/spokes.length)*(i)}deg)`
}

let alreadyRunning = [false, false, false,]

for (let i = 0; i < orbit.length; i++){

  orbit[i].addEventListener('click', e =>{
    orbit.forEach(item => {
      item.style.boxShadow =' 0 0 0 black';
    })
    orbitGearContainer.forEach(item => {
      // item.style.transform = `rotate(${window.getComputedStyle(item).transform}deg)`;
      item.style.animationPlayState = 'paused';
    })
    orbitGear.forEach(item => {
      // item.style.transform = `rotate(${window.getComputedStyle(item).transform}deg)`;
      item.style.animationPlayState = 'paused';
    })
    categoryContent.forEach(item => item.style.display = 'none');
    if(alreadyRunning[i]){
      orbit[i].style.boxShadow =' 0 0 0 black';
      orbitGearContainer[i].style.animationPlayState = 'pause';
      orbitGear[i*2].style.animationPlayState = 'pause';
      orbitGear[(i*2)+1].style.animationPlayState = 'pause';
      categoryContent[i].style.display = 'none';
      alreadyRunning[i] = false;
      console.log(alreadyRunning)
      category[i].style.marginBottom = '0';
    }else if(e){
      orbit[i].style.boxShadow =' 0 0 3em rgba(255, 215, 0, 1)';
      orbitGearContainer[i].style.animationPlayState = 'running';
      orbitGear[i*2].style.animationPlayState = 'running';
      orbitGear[(i*2)+1].style.animationPlayState = 'running';
      alreadyRunning = [false, false, false];
      alreadyRunning[i] = true;
      categoryContent[i].style.display = 'flex';
      category[i].style.marginBottom = '21em';
      console.log(category)
    }
  })
}
