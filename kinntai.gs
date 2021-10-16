function doPost(e) {
  //シート名
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート1');


  //Outgoing Webhookのトークン
  var token = 'agf9udafDpKlC6NU6GHfy0kf'

  //送られてきたトークンが正しければ勤怠を記録する
  //parameterは必要に応じて変更してください
  if (token == e.parameter.token){
    var datetime     = new Date();
    var date         = (datetime.getFullYear() + '/' + ('0' + (datetime.getMonth() + 1)).slice(-2) + '/' + ('0' + datetime.getDate()).slice(-2))
    var time         = (('0' + datetime.getHours()).slice(-2) + ':' + ('0' + datetime.getMinutes()).slice(-2));
    var user_name    = e.parameter.user_name;
    var trigger_word = e.parameter.trigger_word;
    var text         = e.parameter.text;

    //追加する配列を作成
    array = [date,time,user_name,trigger_word,text];

    //シートの最下行に配列を記述
    sheet.appendRow(array);
  }

  return
}
