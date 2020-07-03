var app = new Vue({
  el: '#contentsField',
  data: {
    codes: [
    ],
    isEmpty: false
  },
  methods: {
    goto: function(link){
      window.open(link, '_self');
    },
    readCodeData: function(){
      if (window.XMLHttpRequest)
        xmlhttp = new XMLHttpRequest();

      xmlhttp.open("GET","../data/codesData.txt", false);
      xmlhttp.send();

      codedata = xmlhttp.responseText.split("│");

      for(var i = 0; i < codedata.length / 4; i++){
        this.codes.push({title: codedata[i * 4], codeNum: codedata[i * 4 + 1], contents: codedata[i * 4 + 2], discription: codedata[i * 4 + 3]});
      }
    }
  },
  mounted(){
    this.readCodeData();
  }
});