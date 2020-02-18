var app = new Vue({
    el: '#app',
    data: {
      colors: [
        { bg_color : "pink"},
        { bg_color : "orange"},
        { bg_color : "blue"},
        { bg_color : "yellow"},
        { bg_color : "green"}
      ]
    },
    methods: {
      setRedColor: function (obj, color) {
        obj['bg_color']=color;
      }
    }              
  })
  