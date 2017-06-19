// Ajaxオブジェクトを作成する
function getXMLHttpRequest() {
  var ajax = null;
  if (window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  }
  else {
    console.log("XMLHttpRequestオブジェクトがサポートされていません.");
  }
  return ajax;
}

var ajax_response_id = document.getElementById('ajax-response');

// Ajaxオブジェクトを作成する
var ajax = getXMLHttpRequest();

// サーバからの応答を処理する
ajax.onreadystatechange = function () {
  if (ajax.readyState == 4) {
    if (ajax.status >= 200 && ajax.status < 300 || (ajax.status == 304)) {
      // 応答を処理する
      ajax_response_id.innerHTML = ajax.responseText;
    }
    else {
      console.log(ajax.status); // ステータスエラーを表示する.
    }
  }
}

// 要求を出す
ajax.open("GET", "data/txt");
ajax.send();
