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

    /* 공통 변수 */
    //(1) 서비스 주소(로그인 버튼 있는 페이지)
    const SERVICE_URI = "http://127.0.0.1:5501/login.html";
    //(2) 콜백할 주소(리디렉트)
    const REDIRECT_URI = "http://127.0.0.1:5501/login.html";
    //(3) 콜백 후 이동할 주소(메인)
    const LINK_URI = "http://127.0.0.1:5501/";

    /* 카카오 */
    const REST_API_KEY = "b87b0bf5c70402fe02aec9e63d71cf0a";
    let AUTHORIZE_CODE_KAKAO = new URLSearchParams(location.search),  //매번 랜덤하게 바뀜
        ACCESS_TOKEN_KAKAO = "";  //매번 랜덤하게 바뀜
    const kakao = document.querySelector('.kakao'); //로그인 버튼

    // 1. 인가코드 받기(주소창에 파라미터(?code=형태)로 들어옴) //login.js
    function loginWithKakao() {
        Kakao.Auth.authorize({
          redirectUri: REDIRECT_URI
        });
        // console.log(AUTHORIZE_CODE_KAKAO);   //인가 코드 확인하기
    }
    kakao.addEventListener('click',loginWithKakao);
    

    // 2. 액세스 토큰 발급(인가코드 있어야 발급 가능)   //common.js(로그인 성공 후 메인으로 이동, 다른 페이지에서 로그인 정보 계속 사용)
    function displayToken() {
        //액세스 토큰(ACCESS_TOKEN_KAKAO = 주소창의?code=)가져오기
        if(AUTHORIZE_CODE_KAKAO.get('code')){ //인가 코드가 있을 때 실행
            fetch("https://kauth.kakao.com/oauth/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE_KAKAO.get('code')}`
            })
            .then(res => res.json())
            .then(res => {
                console.log(ACCESS_TOKEN_KAKAO);  //엑세스 토큰 들어왔는지 확인
                ACCESS_TOKEN_KAKAO = res.access_token;    //액세스 토큰을 로그인시 쿠키에 저장-로그아웃시 삭제해서 로그인 여부를 알게 됨
                Kakao.Auth.setAccessToken(ACCESS_TOKEN_KAKAO);

                //엑세스 토큰 유효기간 설정하기
                const endDate = new Date(); 
                endDate.setHours(endDate.getHours+24);  //24시간 설정
                document.cookie = `access_token=${ACCESS_TOKEN_KAKAO};expires=${endDate.toGMTString()};`; //쿠키에 엑세스 토큰, 유효기간 저장
                userInfoFunc(); //3. 사용자 정보 받기 실행
            })
        }
    }
    displayToken();

    //3. 사용자 정보 받기   //common.js(다른 페이지에서 로그인 정보 계속 사용)
    function userInfoFunc(){
        fetch("https://kapi.kakao.com/v2/user/me", {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN_KAKAO}`
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
        Kakao.Auth.logout() //카카오 로그아웃 함수 호출
        .then(function() {
            alert('logout ok\naccess token -> ' + Kakao.Auth.getAccessToken());
            // deleteCookie();
            document.cookie = `access_token=;expires=;`;
            alert('로그아웃 성공');
        })
        .catch(function() {
            alert('로그인하지 않았습니다.');
        });
    }
    //로그아웃 버튼 클릭 시 4번 호출
    // const elLogoutBtn = document.querySelector('.?');
    // elLogoutBtn.addEventListener('click', kakaoLogout);

    /* 네이버 */
    const CLIENT_ID = "cEjPiQLxtraGtftdtKot",
          CLIENT_SECRET = "sXx4SV6rmO",
          CALLBACK_URI = SERVICE_URI;
          // 네이버가 콜백주소 url에 엑세스 토큰값을 보내기 때문에, 로그인 성공 시 바로 메인페이지로 이동하지 않습니다.
          // 일단 다시 로그인 페이지로 다시 돌아온 후 받아온 토큰값과 회원정보를 저장하고, 이후에 메인으로 이동합니다.
    var naver_id_login = new naver_id_login(CLIENT_ID, CALLBACK_URI);
    var state = naver_id_login.getUniqState();
    let ACCESS_TOKEN_NAVER = naver_id_login.getAccessToken();

    const naver = document.querySelector('.naver'); //로그인버튼
    let naverUserInfo = {
        email:'',
        nickname:'',
        age:'',
        id:'',
        b_day:'',
        gender:'',
        mobile:''
    };

    // (추가) 쿠키 저장 함수
    const setCookie = function() {
        let endDate = new Date();
        endDate.setSeconds(
            endDate.getSeconds() + 86400  //쿠키 유지시간=24시간(단위:초)
        );
        Object.entries(naverUserInfo).forEach(([key, value]) => {
            document.cookie = `${key}=${value}; expires=${endDate.toGMTString()};`;
        })
    }
    
    /* 네이버 로그인 초기화 Script */
    // 1. 인가코드 받기: 네이버는 인가코드 필요 없나..?
    // 2. 액세스 토큰 발급 (주소창에 access_token=형태로 들어옴)
    const loginWithNaver = function(){
        location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URI}&state=`   //http%3A%2F%2F127.0.0.1%3A5500%2F24.naver_login.html
    }
    /* 네이버 로그인 Callback페이지 처리 Script */
    naver_id_login.get_naver_userprofile("naverSignInCallback()");
    // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
    function naverSignInCallback() {
        //유저 정보 저장
        naverUserInfo.email = naver_id_login.getProfileData('email');
        naverUserInfo.nickname = naver_id_login.getProfileData('nickname');
        naverUserInfo.age = naver_id_login.getProfileData('age');
        naverUserInfo.id = naver_id_login.getProfileData('id');
        naverUserInfo.b_day = naver_id_login.getProfileData('birthday');
        naverUserInfo.gender = naver_id_login.getProfileData('gender');
        naverUserInfo.mobile = naver_id_login.getProfileData('mobile');
        console.log(naverUserInfo); //확인용
        //쿠키 저장
        setCookie();
    }

    naver.addEventListener('click', function(e){
        loginWithNaver();
    })
    console.log(ACCESS_TOKEN_NAVER);


    /* 구글 */
    
    // 회원가입
    // 회원가입 완료
})  