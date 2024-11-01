function onLoad ()
{
    // 객체 찾기.
    const btnOpen = document.querySelector("#open");
    const btnClose = document.querySelector("#close");
    const idObj = document.querySelector("#userid");
    const pwdObj = document.querySelector("#pwd");

    
    // 팝업창(윈도우)의 윈도우 핸들 값. === window.
    let win = null;

    // 이벤트 리스너 등록 및 핸들러 처리.
    btnOpen.addEventListener("click", () =>
    {
        // 윈도우 창 열기.
        win = window.open("./ex8_2_formName.html", "_blank", "width=400, height=400, left=30, top=30");
        setTimeout(() =>
        {
            win.document.querySelector("#userid").value = idObj.value;
            win.document.querySelector("#pwd").value = pwdObj.value;
        }, 100);
        // const userID = win.document.querySelector("#userID");  // 8_2창임.
        // userID.value = idObj.value;
    });

    btnClose.addEventListener("click", () =>
    {
        // 윈도우 창이 닫아짐. 그 창의 윈도우니까.
        win.close();
    });
}