(() =>{

  const verEidit = document.querySelectorAll(".edit");
  verEidit.forEach((e) =>{
    e.addEventListener('click',edit);
  })
   document.querySelector('.edit-popup-box p').addEventListener('click', close);

   const editPoput = document.querySelector(".edit-popup");
    function edit(){
      editPoput.classList.add("popup-open");
      editPoput.classList.remove("popup-close");
      
  }
  function close(){
      editPoput.classList.remove("popup-open");
      editPoput.classList.add("popup-close");
      
  }
})()

// $(document).ready(function(){
//     var editPopupo = document.querySelector("#edit").addEventListener('click',edit);


//     function edit(){
//        editPopupo.classList.add("popup-open");
//       editPopupo.classList.remove("popup-close");
//   }
// })