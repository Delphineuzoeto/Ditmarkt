function passwordDisplay(element){
    $password = $('#password');
    if($password.attr('type') == 'password'){
      $password.attr('type', 'text');
      $(element).text('Hide');
    } else{
      $password.attr('type', 'password');
      $(element).text('Show');
    }
}

function newUserLogin(){
  // swing|linear
  $('.email-holder').toggle(200, 'linear');
}