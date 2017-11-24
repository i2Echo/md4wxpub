require("./index.scss");
var $ = require("jquery");
var Zepto = require("zepto");

var _save = function(data){
  localStorage.setItem("autosave", JSON.stringify(data));
}

var _read = function(){
  return localStorage.getItem("autosave");
}

var data = {
  content: null,
  date: null
}

$('document').ready(function () {
  if(_read()){
      $("#test-editormd > textarea").value = JSON.parse(_read()).content;
  }
});

setInterval(function(){
  data.content = $("#test-editormd > textarea");
  data.date = new Date.now();
  _save(data);
}, 60*1000);