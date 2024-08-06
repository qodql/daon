document.addEventListener("DOMContentLoaded", () => {
    /* 
    // 비밀번호 패턴검사 정규식
    let pwChecker = (pw) => {
        //정규식 조건: 영문소문자/숫자/특문 조합 8~15자
        const pwPattern = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,15}$/;
        //비번 추가조건1: 연속 3개 이상의 문자/숫자/특문이 오지 않도록
        const pwAdditional1 = /(.)\1{2,}/;
        //비번 추가조건2: 아이디와 4글자 이상 겹치지 않도록
        // const pwAdditional2 = id.substring();

        //비밀번호 패턴 검증
        if(!pwPattern.test(pw)){
            return false;
        } else if(pwAdditional1.test(pw)){ //추가조건1
            return false;    
        // }
        // else if(pwAdditional2.test(pw)){  //추가조건2
        //     return false;
        }else{
            return true;
        }
    }
    */

    // 로그인+회원가입 공통
    // 로그인
    const REST_API_KEY = "b87b0bf5c70402fe02aec9e63d71cf0a",
          REDIRECT_URI = "http://127.0.0.1:5501/login.html";    //작업 완료 후 index.html로 바꾸기
    let AUTHORIZE_CODE = new URLSearchParams(location.search),  //매번 랜덤하게 바뀜
        ACCESS_TOKEN = "";  //매번 랜덤하게 바뀜
    const kakao = document.querySelector('.kakao');

    // 1. 인가코드 받기(주소창에 파라미터(?code=형태)로 들어옴) //login.js
    function loginWithKakao() {
        Kakao.Auth.authorize({
          redirectUri: REDIRECT_URI
        });
        console.log(AUTHORIZE_CODE);
        // 
        // userInfoFunc()
    }
    kakao.addEventListener('click',loginWithKakao);
    

    // 2. 액세스 토큰 발급(인가코드 있어야 발급 가능)   //common.js(로그인 성공 후 메인으로 이동, 다른 페이지에서 로그인 정보 계속 사용)
    function displayToken() {
        //액세스 토큰(ACCESS_TOKEN = 주소창의?code=)가져오기
        if(AUTHORIZE_CODE.get('code')){ //인가 코드가 있을 때 실행
            fetch("https://kauth.kakao.com/oauth/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE.get('code')}`
            })
            .then(res => res.json())
            .then(res => {
                console.log(ACCESS_TOKEN);  //엑세스 토큰 들어왔는지 확인
                ACCESS_TOKEN = res.access_token;    //액세스 토큰을 로그인시 쿠키에 저장-로그아웃시 삭제해서 로그인 여부를 알게 됨
                Kakao.Auth.setAccessToken(ACCESS_TOKEN);

                //엑세스 토큰 유효기간 설정하기
                const endDate = new Date(); 
                endDate.setHours(endDate.getHours+24);  //24시간 설정
                document.cookie = `access_token=${ACCESS_TOKEN};expires=${endDate.toGMTString()};`; //쿠키에 엑세스 토큰, 유효기간 저장
                userInfoFunc(); //3. 사용자 정보 받기 실행
            })
        }
    }
    displayToken();  // 2. 액세스 토큰 발급 실행

    //3. 사용자 정보 받기   //common.js(다른 페이지에서 로그인 정보 계속 사용)
    function userInfoFunc(){
        fetch("https://kapi.kakao.com/v2/user/me", {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`
            }
        })
        .then(res => res.json())
        .then(res => {
            //사용자 정보 받은 것 확인
            console.log(res.properties.nickname);
        })
    }

    //4. 로그아웃   //common.js(다른 페이지에서 로그인 정보 계속 사용)
    function kakaoLogout() {
        Kakao.Auth.logout()
        .then(function() {
            alert('logout ok\naccess token -> ' + Kakao.Auth.getAccessToken());
            // deleteCookie();
            document.cookie = `access_token=;expires=;`;
            console.log('로그아웃 성공');
        })
        .catch(function() {
            alert('로그인하지 않았습니다.');
        });
    }
    // 회원가입
    // 회원가입 완료
})  