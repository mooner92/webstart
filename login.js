//ID란에 입력된 값을 팝업창에 띄우기
function popId() {
    function compareVariable() {
        let num1;
        const num2 =1;
    }
    let userid = document.getElementById('txt_id').value;
    if (!userid){
        //document.getElementById('txt_id').value=="" 이와 if문의 내용은 동일함
        alert('아이디를 입력해주세요.')
    }
    else
        alert(userid);
}
//나만의 함수 만들고 호출하기
function myfunction() {
    alert('clicked1');
    alert('clicked2');
    alert('clicked3');
}