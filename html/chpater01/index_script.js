// 객체 가져오기. -> JavaScript라는 함수가 작동되는 것. new된 객체를 가져와야 코딩 후 사용 가능한 것.

// 전역 정적 클래스
// ID로 div객체를 찾아야 함.
// var, let divBox = window.document.getElementById("box");  // 객체를 찾았으니, 객체 참조 변수에 저장을 해야 함.
                                        // 객체클래스 객체참조 변수 = window.document.getElementById("box");

// div의 #을 갖고 있는 box객체를 가져온다.
// 객체 가져왔으니, 멤버변수 다 사용할 수 있음. 높이/폭/색상 등.
// ★★★★★★★★★★★★
let box = window.document.getElementById("box");
// box.style.color

let position = 0;   // 값에 의해 type이 결정됨. let

function moveBox ()
{
    if (position < 200)
    {
        position += 1;
        box.style.left = position + "px";   // px를 안주면 적용이 안되니까, 숫자 + 문자 하여 문자열로 변경.
        // 계속해서 moveBox를 호출하는 callBack기능을 부여한다.
        // window.requestAnimationFrame(moveBox)  // 화면이 그려질 때마다 불러주는 기능.
    }else
    {
        position = 0;
        box.style.left = position + "px";
    }
    // 계속해서 moveBox를 호출하는 callBack기능을 부여한다.
    window.requestAnimationFrame(moveBox)
}

moveBox();
