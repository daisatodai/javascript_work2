function emailValidation() {
  const emailConfirm = document.getElementById('email_confirm');
  const email = document.getElementById('email');
  
  emailConfirm.addEventListener('input', e => {
    e.preventDefault();
    
    if (emailConfirm.value !== email.value) {
      const element = document.createElement('p');
      const message = document.createTextNode("Eメールが一致しません");
      const mytable = document.getElementsByTagName("table")[0];
      const mytr = mytable.insertRow(3);
      const mytd = mytr.insertCell(0);
      mytd.colSpan = "2";

      //ここからemail_confirmのセルにエラー時に赤くセルが光るようにする。
      const confirmForm = document.getElementById('alert_cell');
      confirmForm.classList.add("alert_cell");
      const emailConfirm = document.getElementById('email_confirm');
      emailConfirm.classList.add("alert_cell");
      mytd.appendChild(element);//ここまで追加したセルに要素を入れる準備

      element.appendChild(message);
      element.classList.add("alert");
      //追加したセルにalertを入れる

      //ここからemail_confirmのセルにエラー時に赤くセルが光るようにする。

      setTimeout(() => {
        mytable.deleteRow(mytr.rowIndex);
      }, 3000);
    }
  });
}
window.onload = emailValidation;


//やりたいことは大きく２点
//addEventListenerをつけて、メールアドレスと確認用メールアドレスが一致しないと即座にアラートを出す
//アラートを確認用メールアドレスの下に出す

//emailのドキュメント
//Eメールとemail_confirmのID使用し対象のDOMを取得。
//email_confirmに関してはイベントリスナー入力。input、引数に関数をセット。最初の入力欄と確認の入力欄をチェックする。もし両方が違ったら違った時点で入力欄が赤くなる。もしあってたら間違ってますよっていうのを消す。
//insert htmlで挟み込む。//
//表を1行追加。追加したtrの時だけ出るようにする、一度要素を入れてみてHTMLを確認してみる