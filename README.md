# cloning-free-website-design-template-

이번 클론 코딩으로 배운 점 정리

1. position : absolute를 쓰면 flex에서 빠짐

2. width : 100%를 주지않으면 웹페이지 크기를 줄일 때 비율에 맞게 줄어들지 않는다.

3. 자바스크립트로 클릭 이벤트를 주고, css에 다른 요소에 위치주면 움직이는 것처럼 안보임 항상 확인할 것 !

4. display: none, display: block형태로 움직이는 것처럼 효과를 줄 수 없음.
참고 : ( https://velog.io/@dev-tinkerbell/display-none%EC%9D%B4-transition%EC%9D%B4-%EC%95%88%EB%A8%B9%ED%9E%88%EB%8A%94-%EC%9D%B4%EC%9C%A0)

5. margin : 0 auto; > 가운데 정렬

6. list-style : none은 css에서 li에서도 되고 ul에서도 되는데 구글링 결과
사람들은 ul에서 많이 씀 이유는 잘 모르겠음

7. transition 
linear : 전환 효과가  처음부터 끝까지 일정한 속도
ease : 기본값, 천천히 시작 빨라지고 다시 느려짐
ease-in : 전환효과가 천천히 시작됨
ease-out: 전환속도가 천천히 끝남
ease-in-out: 전환 효과가 천천히 시작되어, 천천히 끝남.

8. 반응형
@media screen and (max-width: (101010)px)

9. grid-template-column : repeat(auto-fit, minmax(300px, 1fr));
                                 반복횟수, 반복값
                                 
minmax는 최솟값 최댓값
자동으로 반복하고
최소 300px 최대 1:1:1 비율

10. transform: scale(1.01)
1.5했다가 엄청 크게 커져서 놀랬음. 1.01만 해도 충분히 크기변화를 확인할 수 있음.

11.root:{
}
css 저작자가 정의하는 개체, 문서 전반적으로 재사용할 임의의 값을 담는다
아주 유용한 기능인듯 무조건 써야겠다.
