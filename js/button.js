const para = document.querySelector('p');
para.addEventListener('click',updateName);

function updateName(){
    let name = prompt('Enter a name');
    para.textContent='Player 1: '+name;
}

document.addEventListener("DOMContentLoaded", function() {
    function createParagraph() {
      let para = document.createElement('p');
      para.textContent = 'You clicked the button!';
      document.body.appendChild(para);
    }
  
    const buttons = document.querySelectorAll('button');
  
    for(let i = 0; i < buttons.length ; i++) {
      buttons[i].addEventListener('click', createParagraph);
    }
    let head2 = document.createElement('h2');
    head2.textContent="title";
    buttons[0].appendChild(head2);
  });
