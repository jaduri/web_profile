window.addEventListener('load', aboutMe)
function aboutMe(){
  var tabs = document.getElementsByClassName('tab');
  var sections = document.getElementsByClassName('about-section');
  tabs[0].style.backgroundColor = 'white';
  tabs[0].style.color = 'black'
  sections[0].style.display = "flex";
  for (var x=0; x<tabs.length; x++){
    tabs[x].addEventListener('click', switchTab);
  }
  function switchTab(){
    for (var i=0; i<tabs.length; i++){
      if(this == tabs[i]){
        tabs[i].style.backgroundColor = 'white';
        tabs[i].style.color = 'black';
        sections[i].style.display = "flex";
        sections[i].style.flexGrow = "1";
      }else {
        tabs[i].style.backgroundColor = 'rgb(29, 41, 81)';
        tabs[i].style.color = 'white';
        sections[i].style.display = "none";
      }
    }
  }
};
