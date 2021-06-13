(() =>{

  const verEidit = document.querySelectorAll(".edit");
  verEidit.forEach((e) =>{
    e.addEventListener('click',edit);
  })
   document.querySelector('.edit-popup-box p').addEventListener('click', close);
   document.querySelector(".update").addEventListener('click', close);

   const editPoput = document.querySelector(".edit-popup");
    function edit(){
      editPoput.classList.add("popup-open");
      editPoput.classList.remove("popup-close");
      
  }
  function close(){
      editPoput.classList.remove("popup-open");
      editPoput.classList.add("popup-close");
      
  }
})();

(() =>{
  //get select row
  //display selected row data in text input
  var table = document.querySelector("#table"),rIndex;
  var tableEdit = document.querySelector("#table .edit"),rIndex;

  for(var i=1; i<table.rows.length; i++){
    table.rows[i].onclick = function(){
      rIndex = this.rowIndex;
      document.querySelector("#exampleInputName1").value = this.cells[0].innerHTML;
      document.querySelector("#exampleInputEmail1").value = this.cells[1].innerHTML;
      document.querySelector("#exampleInputPhone1").value = this.cells[2].innerHTML;
      document.querySelector("#exampleInputRole1").value = this.cells[6].innerHTML;
    }
  }


  document.querySelector(".update").addEventListener('click', updating);
   function updating(){
      table.rows[rIndex].cells[0].innerHTML = document.querySelector("#exampleInputName1").value;
      table.rows[rIndex].cells[1].innerHTML = document.querySelector("#exampleInputEmail1").value;
      table.rows[rIndex].cells[2].innerHTML = document.querySelector("#exampleInputPhone1").value;
      table.rows[rIndex].cells[6].innerHTML = document.querySelector("#exampleInputRole1").value;

}
  
})()
