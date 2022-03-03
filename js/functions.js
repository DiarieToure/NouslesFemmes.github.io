function registerFromlogin(){
    document.getElementById('login-box').style.display='none';
    document.getElementById('register-box').style.display='flex';
   };

   function forgotpwd()
   {
    document.getElementById('login-box').style.display='none';
    document.getElementById('forgot-box').style.display='flex';
   }
   
   function loginFromForgot() {
    document.getElementById('forgot-box').style.display='none';
    document.getElementById('login-box').style.display='flex';
   }