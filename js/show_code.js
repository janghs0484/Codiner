var app = new Vue({
  el: '#contentsField',
  data: {
    codes: [
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
    },
    readCodeData: function(){
      if (window.XMLHttpRequest)
        xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET","../data/codesData.txt", false);
      xmlhttp.send();

      codedata = xmlhttp.responseText.split("│");

      for(var i = 0; i < codedata.length / 4; i++){
        this.codes.push({ title: codedata[i * 4], codeNum: codedata[i * 4 + 1], contents: codedata[i * 4 + 2], discription: codedata[i * 4 + 3]});
      }
    },
  },
  mounted(){
    this.readCodeData()
  }
});