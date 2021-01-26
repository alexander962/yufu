

  $(document).ready(function(){
    $("#myInput").on("keyup",function() {
      var value = $(this).val().toLowerCase();
      $("#myListDrop li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });



  $(document).ready(function(){
    $("#myInputTwo").on("keyup",function() {
      var value = $(this).val().toLowerCase();
      $("#myListDropTwo li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });




  function myFunction() {
  let content = document.getElementById('myDropdown');
  let inp = document.getElementById('myInput');
  content.classList.add('dropdown-contentshow');
  
}

function myFunc(){
  let content = document.getElementById('myDropdown');
  content.classList.remove('dropdown-contentshow');
}





  function myFunctionTwo() {
  console.log('Вызвана');
  let content = document.getElementById('myDropdownTwo');
  console.log(content);
  content.classList.add('dropdown-contentshow_two');
}

function myFuncTwo(){
  console.log('вызвана');
  let content = document.getElementById('myDropdownTwo');
  content.classList.remove('dropdown-contentshow_two');
}




  function headerDropNo() {
  console.log('Вызвана');
  let content = document.getElementById('headerDropdown');
  console.log(content);
  content.classList.add('dropdown-header_show');
}

function headerDrop(){
  console.log('вызвана');
  let content = document.getElementById('headerDropdown');
  content.classList.remove('dropdown-header_show');
}
