
function newItem() {
  var item = document.getElementById('input').value;
  var ul = document.getElementById('list');
  var li = document.createElement('option');
    li.setAttribute("id","thing");


  var inpuT = document.getElementById('input').value;
  if(inpuT === ""){
    return alert("Sorry you need to type and item");
    }
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
  li.ondblclick = removeItem;
}


function removeItem(e) {
  e.target.parentElement.removeChild(e.target);
}

function seaknDestoy() {
  var src = document.getElementById('list') ;
  for(var count = src.options.length-1; count >= 0 ; count--){
    if(src.options[count].selected == true) {
      try {
        src.remove(count, null);
      } catch(error){
        src.remove(count);
      }
    }
  }
}
