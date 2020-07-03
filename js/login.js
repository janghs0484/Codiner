var app = new Vue({
  el:'#loginField',
  data:{
    username:'',
    password:''
  },
  methods:{
    loginCheck: function(){
      if (app.username == 'Leantn' && app.password == 'janghs0501') {
        window.open('logined_home.html', '_self');
        alert('Welcome, Leantn');
      } else{
        alert('Wrong Username or Password');
      }
    }
  }
});