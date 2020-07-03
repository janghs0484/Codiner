var app = new Vue({
  el: '#contentsField',
  data: {
    codes: [
    ],
    codeTitle:'',
    codeContents:'',
    nextCodeCount: 0
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

      console.log(codedata.length);

      for(var i = 0; i < codedata.length / 4; i++){
        this.codes.push({title: codedata[i * 4], codeNum: codedata[i * 4 + 1], contents: codedata[i * 4 + 2], discription: codedata[i * 4 + 3]});
      }

      console.log(codedata.length / 4);

      this.nextCodeCount = codedata.length / 4 + 1;
    }
  },
  mounted(){
    this.readCodeData();
  }
});