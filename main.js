var app = new Vue({
  el: '#contentsField',
  data: { 
    codes: [
      { title: 'none',
        link: './codes/',
        discription: 'none'},
      { title: '자바 JFrame 개념 설명(1)',
        link: './codes/',
        discription: '자바에서 대표적인 GUI는 JFrame이다. JFrame을 원하는대로 사용하기위해선 JFrame의 구조를 알아야 할 것이다. 먼저 Frame이라는 바탕이 있고, 그 위에 Panel, 그 위에 여러가지 Component들이 깔린다....'},
      { title: '자바 JFrame 창 띄우기',
        link: './codes/',
        discription: '22222...'},
      { title: '3',
        link: './codes/',
        discription: '22222...'},
      { title: '4',
        link: './codes/',
        discription: '22222...'},
      { title: '5',
        link: './codes/',
        discription: '22222...'},
    ],
    notions: [
      { content: '현제 로그인 기능은 지원되지 않습니다. 사이트를 이용하실 분들은 로그인 창에서 어떠한 정보의 입력없이 로그인버튼만 누르면 정상적으로 서비스를 이용하실 수 있습니다.'},
      { content: '현제 업로드 기능은 지원되지 않습니다. 본 페이지 하단에 사이트 호스트에게 메일로 업로드 요청을 하시면 업로드가 가능합나다.'}
    ]
  },
  methods: {
    select: function(event) {
      
    }
  }
});