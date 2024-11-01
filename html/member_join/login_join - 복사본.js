// 회원가입
function onLoad(){
  let id_pattern = /^[\w]{3,}$/; 

  let id = document.getElementById("input-id");
  id.addEventListener("blur",()=>{
     validate(id, id_pattern, " 아이디는 영문자, 숫자, _만 입력 가능. 최소 3자 이상 입력하세요.");
  }); 

  function validate(userinput, pattern, message) {
    if (!userinput.value.match(pattern)) {
      userinput.nextSibling.innerHTML = message;
      userinput.nextSibling.style.color = "tomato";
      userinput.value="";
      userinput.focus();
    } else {
      userinput.nextSibling.innerHTML = "성공";
    }
  }
  
}

const joinMember = () => {
  let id = document.getElementById("input-id");
  let pw1 = document.getElementById("input-pw1");
  let pw2 = document.getElementById("input-pw2");
  let name = document.getElementById("input-name");
  let nickname = document.getElementById("input-nickname");
  let email = document.getElementById("input-email");
  let tel = document.getElementById("input-tel");
  let mobile = document.getElementById("input-mobile");
  let auto_check = document.getElementById("auto-check");

  let id_pattern = /^[\w]{3,}$/;   //\w는 알파벳 대소문자(a-z, A-Z), 숫자(0-9), 언더스코어(_) 표현
  let pw_pattern = /^[\w]{6,10}$/;
  let name_pattern = /^[가-힣]{2,4}|[a-zA-Z]{1}[a-zA-Z\x20]{1,9}$/; //공백은 \x20로 표현
  let nickname_pattern = /^[\w가-힣]{4,}$/;
  let email_pattern = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
  let tel_pattern = /^\d{2,3}-\d{3,4}-\d{4}$/;
  let mobile_pattern = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/; //(?:...)는 캡처하지 않는 그룹을 의미함.

  // 아이디
  validate(id, id_pattern, " 아이디는 영문자, 숫자, _만 입력 가능. 최소 3자 이상 입력하세요.");
  // 비밀번호
  validate(pw1, pw_pattern, " 비밀번호는 영문자와 숫자 6~10자리입니다");

  if (pw2.value !== pw1.value) {
    pw2.nextSibling.innerHTML = " 비밀번호가 일치하지 않습니다";
    pw2.nextSibling.style.color = "tomato";
    pw2.value = "";
    pw2.focus();
  }else {
    pw2.nextSibling.innerHTML = "";
  }

  // 이름
  validate(name, name_pattern, " 이름은 영문자(2~10), 한글(2~4)으로 입력해주세요");
  // 닉네임
  validate(nickname, nickname_pattern, " 닉네임은 공백없이 한글,영문,숫자만 4자 이상으로 입력해주세요");
  // 이메일
  validate(email, email_pattern, " 양식에 맞게 이메일을 작성해주세요");
  // 전화번호
  validate(tel, tel_pattern, " -를 포함하여 전화번호 형식을 맞춰주세요");
  // 휴대폰 번호
  validate(mobile, tel_pattern, " -를 포함하여 휴대폰번호 형식을 맞춰주세요");
  // 자동등록방지
  if(auto_check.value !== '378291'){
      alert("자동등록방지 문자를 다시 입력해주세요");
      auto_check.value="";
  }
}

const validate = (userinput, pattern, message) => {
  if (!userinput.value.match(pattern)) {
    userinput.nextSibling.innerHTML = message;
    userinput.nextSibling.style.color = "tomato";
    userinput.value="";
    userinput.focus();
  } else {
    userinput.nextSibling.innerHTML = "";
  }
}

execPostcode = () => {
  new daum.Postcode({
    oncomplete: function(data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드
      console.log('zipcode', data.zonecode); 
      console.log('data.roadAddress', data.roadAddress); 

      document.getElementById("zipcode").value = data.zonecode;
      document.getElementById("addr1").value = data.roadAddress;
    }
  }).open();
}
