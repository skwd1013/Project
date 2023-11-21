TODO APP만들기

1. 헤더에 todos앱(로고) 새로운 TODO 추가하기 (버튼) 생성
2. 새로운 TODO 추가하기 버튼 누르면 새로운 li 생성(자바스크립트)
3. 맨 위에는 텅 비어있는 todo list 하나 생성된게 기본 화면(create child)
4. 오른쪽 연필 버튼 누르면 todo 작성가능
5. -누르면 삭제(자바스크립트 remove child)
6. 앞에 체크박스 체크하면 todo 지워지기


구조
backgroun-color : colorpink
body 
    app
        header
        {
            logo,button
        }
        main (button 누르면 계속 생성)
        {
            todos
                checkbox,text,edit,delete
        }



<div app>
<header>
<h1>Todos 앱<h1>  
<button>새로운 TODO 추가하기(클릭시 TODO 생성)</button>
</header>
<!-- 자바스크립트 이용해서 todo 만들기 -->
<main> 
    <div todo-list>
        <div>
            <div>
                <input type=checkbox> => 누르면 글자 지우기
                <input type=text value:disabled>
                    <div>
                        <button edit> => 누르면 text 수정
                        <button remove> => 누르면 삭제
                    </div>
            </div>
        </div> 
    </div>
</main>
</div app>