var app = new Vue({
  el: '#contentsField',
  data: {
    codes: [
    ],
    codeTitle:'',
    codeContents:'',
    tttfile:''
  },
  methods: {
    goto: function(link){
      window.open(link, '_self');
    },/*
      readCodeData: function(){
      const res = fetch('./codesData.txt');
      const blob = res.blob();

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'something.pdf';
      link.innerHTML = 'download';
      document.body.appendChild(link);

      const reader = new FileReader();
  
      reader.onload = function(){
        console.log(reader.result);
      }

      reader.readAsText(res, "UTP-8");

      var codedata = reader.result.split("│");

      for(var i = 0; i < codedata.length / 4; i++){
        this.codes.push({title: codedata[i * 4], codeNum: codedata[i * 4 + 1], contents: codedata[i * 4 + 2], discription: codedata[i * 4 + 3]});
      }
    },*/
    readCodeData: function(){
      if (window.XMLHttpRequest)
        xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET","codesData.txt", false);
      xmlhttp.send();

      codedata=xmlhttp.responseText;
      codedata = reader.result.split("│");

      for(var i = 0; i < codedata.length / 4; i++){
        this.codes.push({title: codedata[i * 4], codeNum: codedata[i * 4 + 1], contents: codedata[i * 4 + 2], discription: codedata[i * 4 + 3]});
      }
    },
    download: function(filename, text) {
      var pom = document.createElement('a');
      pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      pom.setAttribute('download', 'codesData');

      if (document.createEvent) {
          var event = document.createEvent('MouseEvents');
          event.initEvent('click', true, true);
          pom.dispatchEvent(event);
      }
      else {
          pom.click();
      }
    },
    addCode: function(a, b){
      var content;
      app.codes.push({title: a, codeNum: this.codes.length + 1, contents: b, discription: 'hello?'});

      var text = '';

      for(var i = 0; i < this.codes.length; i++){
        text += this.codes[i].title + '│' + this.codes[i].codeNum + '│' + this.codes[i].contents + '│' + this.codes[i].discription
        if(i != this.codes.length)
          text += '│';
      }

      app.download(a, text + b);
    }
  },
  mounted(){
    this.readCodeData()
  }
});