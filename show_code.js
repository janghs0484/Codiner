/*import codePostsData from 'raw-loader!./codePostsDatas.txt';*/

var app = new Vue({
  el: '#contentsField',
  data: {
    codes: [
      { title: '자바 JFrame 개념 설명(1)',  
        codeNum: 1,
        contents: 'asdasdasd',
        discription: '자바에서 대표적인 GUI는 JFrame이다. JFrame을 원하는대로 사용하기위해선 JFrame의 구조를 알아야 할 것이다. 먼저 Frame이라는 바탕이 있고, 그 위에 Panel, 그 위에 여러가지 Component들이 깔린다....'},
      { title: '자바 JFrame 창 띄우기',
        codeNum: 2,
        contents: 'asdasdasd',
        discription: '22222...'}
    ],
    nowCodeNum: 1,
    codeContents: '',
    codeTitle: '',
  },
  methods: {
    read: function(){
      var url = unescape(location.href);
      var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
      this.nowCodeNum = parameters[0].split('=')[1];
    }/*,
    readCodePostData: function(){
      var post = codePostsData.slice('│');
      for(int i = 0; i < post.length/4; i++){
        app.codes[post.length / 4].title.push(post[post.length / 4]);
        app.codes[post.length / 4].codeNum.push(post[post.length / 4 + 1]);
        app.codes[post.length / 4].contents.push(post[post.length / 4 + 2]);
        app.codes[post.length / 4].discription.push(post[post.length / 4 + 3]);
      }
    }*/
  }
});