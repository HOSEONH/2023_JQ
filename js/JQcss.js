// html head에 cdn으로 값을 가져온 후
// 다른 JS에서도 제이쿼리에 접근할 수 있다

// .css() 를 이용해서 style값을 바꿀 수 있다
$("#header").css("color", "blue"); // 문자열로 작성하면 된다 ""
// 값을 여러개 넣고 싶을 때는 객체 형태로 작성
// 속성이름을 적을 때 -있다면 첫 글자 대문자로 작성 ?????
// 값 안에 변수나 자바스크립트 계산식을 적고 싶다면 `${}` 이용 가능
$("#header").css({
    backgroundColor:"gray",
    "fontSize":`${3}rem`
});
// 자바스크립트로 스타일에 들어가려면 갯수만큼 작성했어야 했는데 
// 객체를 통해 원하는 값을 한꺼번에 작성 가능
// 객체 형태로만 넣고 원하는 값을 변수에 넣어 사용가능하기 때문에 
// ""를 써서 넣는 것은 자바스크립트에 css에 접근하는 것이기 때문에 ?????

// 버튼을 클릭했을 때, hidden 클래스 추가
$("#btn").on("click", function() { // 이벤트 타입, function 실행할 내용
    // 형제 태그를 통해서 p태그를 찾고 클래스 추가
    // this 통해서 현재 이벤트가 실행된 태그를 가져올 수 있다
    $(this).prev().addClass("hidden");
    console.log($(this));
})

// 버튼을 클릭했을 때, header가 숨김/보임
$("#toggle-button").on("click", function() {
    $("#header").toggleClass("hidden");
    console.log($(this));
})

// todo의 input를 클릭했을 때 체크 유무에 따라서
// 디자인을 바꿈
$("#todo input[type='checkbox']").on("click", function(e){ // 이벤트 객체
    // 제이쿼리를 사용하면서 자바스크립트의 내용 사용 가능
    console.log(e.target.checked);
    
    // this를 통해서 이벤트가 발생한 태그를 가져올 수 있음
    // .prop(속성이름)을 통해서 속성값을 가져올 수 있다
    console.log($(this).prop("checked"));

    if(e.target.checked) {
        $("#todo").css("color", "gray").addClass("checked");
    } else {
        $("#todo").css("color", "").removeClass("checked");
    }
})


// 자바스크립트를 이용하여 버튼에 이벤트 넣기
const btns = document.querySelectorAll("#number-btns button");
// for(let i=0; i<btns.length; i++) {
//     btns[i].addEventListener("click", function(e){
//         e.target.style.color = "red";
//         e.target.disabled = "true";
//     })  
// }

// 제이쿼리로 접근한 여러개의 태그는
// 배열로 처리하지 않고 바로 메소드를 이용해 모두 적용할 수 있다.
console.log($("#number-btns button"));
$("#number-btns button").css({
    "color" : "blue"
})

// 제이쿼리로 여러개의 태그에 이벤트 추가
$("#number-btns button").on("click", function(){
    $(this).css("color", "red").prop("disabled", "true");
    console.log($(this));
})




// $("#number-btns td>button").on("click", function(e) {
//     $(this).prop("disabled", "true").css("color", "red");

//     console.log($(this));
// })