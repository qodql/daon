// [↓] 다온 로그인
document.addEventListener("DOMContentLoaded", () => { 
// 로그인+회원가입 공통------------------
// 이메일 유효성 검사
const emailChecker = (email) => {
    //이메일 조건(ex. my_Account-01@naver.com): 
    // 아이디 부분(my_Account-01): 영문 대소문자, 숫자, ._-%+- 의 특문 입력 가능
    // @: 필수, @로 구분됨
    // 도메인 부분(naver): 영문 대소문자, 숫자, .-의 특문 입력 가능
    // 도메인 끝부분(.com): .필수, 2개 이상의 영문 대소문자 입력 가능
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailErrorMsg = '';
    let isValid = false;
    if(!emailRegex.test(email)){
        emailErrorMsg = '유효하지 않은 이메일 주소입니다.';
    }else{
        emailErrorMsg = '올바른 이메일 주소입니다.';
        isValid = true;
        return {isValid: isValid, emailErrorMsg: emailErrorMsg};
    }
    return {isValid: isValid, emailErrorMsg: emailErrorMsg};
}
// 비밀번호 유효성 검사
const pwChecker = (pw) => { 
    //조건: 영문/숫자/특문 각각 1개 이상의 조합으로 8~15자
    const pwRegex = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,15}$/;
    let pwErrorMsg = '';
    let isValid = false;
    //길이 검증
    if(pw.length < 8){
        pwErrorMsg = '비밀번호가 너무 짧습니다. 8자 이상 입력해 주세요.'
    }else if(pw.length > 15){
        pwErrorMsg = '비밀번호가 너무 깁니다. 15자 이하로 입력해 주세요.'
    //조건 검증
    }else if(!pwRegex.test(pw)){
        pwErrorMsg ='영문, 숫자, 특수문자를 조합하여 입력해 주세요.';
    }else{
        pwErrorMsg ='유효한 비밀번호 입니다.';
        isValid = true;
        return {isValid: isValid, pwErrorMsg: pwErrorMsg};
    }
    return {isValid: isValid, pwErrorMsg: pwErrorMsg};
}
//이름 유효성 검사
const nameChecker = (name) => {
    //조건 : 한글만 입력 가능, 2~20자, 띄어쓰기 불가능
    const nameRegex = /^[가-힣\s]+$/;
    let nameErrorMsg = '';
    let isValid = false;
    //길이 검증, 조건 검증
    if(!nameRegex.test(name)){
        nameErrorMsg = '이름에는 한글만 입력해 주세요.'
    }else if(name.length < 2){
        nameErrorMsg = '이름의 길이는 2자 이상이어야 합니다.';   
    }else if(name.length > 20){
        nameErrorMsg = '이름의 길이는 20자 이하여야 합니다.';
    }else if(/\s/.test(name)){
        nameErrorMsg = '이름에는 띄어쓰기를 입력할 수 없습니다.';
    }else{
        nameErrorMsg = '올바른 이름입니다.';
        isValid = true;
        return {isValid: isValid, nameErrorMsg: nameErrorMsg};
    }
    return {isValid: isValid, nameErrorMsg: nameErrorMsg};
}
//휴대폰 번호 유효성 검사
const phoneChecker = (phone) => {
    //조건: 숫자만 입력 가능, (010,011,016,017,018,019)으로 시작, 10자 이상 11자 미만
    const phoneRegex = /^01[016789]-[0-9]{3,4}-[0-9]{4}$/;
    const onlyNumRegex = /^\d+$/;
    let phoneErrorMsg = '';
    let isValid = false;
    //숫자 외 입력값 유무 검증
    if(!onlyNumRegex.test(phone)){
        phoneErrorMsg = '휴대폰 번호에는 숫자만 입력할 수 있습니다.';
    //통신사 번호 검증(010,011,016,017,018,019)
    }else if(!/^01[016789]/.test(phone)){
        phoneErrorMsg = '유효하지 않은 통신사 번호입니다. 다시 입력해 주세요.';
    //길이 검증
    }else if(phone.length < 10){
        phoneErrorMsg = '휴대폰 번호 길이가 짧습니다.';   
    }else if(phone.length > 11){
        phoneErrorMsg = '휴대폰 번호 길이가 깁니다.'; 
    //조건 검증
    }else if(phoneRegex){
        phoneErrorMsg = '올바른 휴대폰 번호입니다.';
        isValid = true;
        return {isValid: isValid, phoneErrorMsg: phoneErrorMsg};
    }
    return {isValid: isValid, phoneErrorMsg: phoneErrorMsg};
}
//인증번호(6자리) 생성함수
const verifyNumGenerator = () => {
    //앞3자리: 100~999사이의 랜덤숫자
    let ranNum = (Math.floor((Math.random()*900)) + 100); //100~999사이의 랜덤숫자
    //뒤3자리: 밀리초
    let today = new Date();
    let milliSec = today.getMilliseconds();
    let ranNum2 = milliSec.toString().padStart(3, '0');
    let verifyNum = parseInt(ranNum.toString() + ranNum2.toString());
    return verifyNum;
}

//로그인 관련 키보드 입력 들어가는 모든 인풋박스
const inputBoxs = document.querySelectorAll('.input_box input');
const emailBox = document.querySelector('.email_box input'),
      pwBox = document.querySelector('.pw_box input'),
      pwCheckBox = document.querySelector('.pw_check_box input'),
      nameBox = document.querySelector('.name_box input'),
      phoneBox = document.querySelector('.phone_box input'),
      verifyBox = document.querySelector('.verify_box input');
const resetBtn = document.querySelectorAll('.input_box .input_reset_btn'),
      eyeBtn = document.querySelectorAll('.input_box .input_eye_btn');
//인풋박스 내부 : 우측 [x, 눈] 아이콘 input시 활성화, blur 시 비활성화
inputBoxs.forEach((inputbox) => {
    //focus시
    inputbox.addEventListener('focus', function(){
        if(inputbox.value == ''){   //값이 없으면 버튼 안보이게
            inputbox.classList.remove('hasValue')
        }else{  //값이 있으면 버튼 보이게
            inputbox.classList.add('hasValue')  
        }
        //input시
        inputbox.addEventListener('input', function(){
            if(inputbox.value == ''){   //값이 없으면 버튼 안보이게
                inputbox.classList.remove('hasValue')
            }else{  //값이 있으면 버튼 보이게
                inputbox.classList.add('hasValue')
            }
        })
    })
    //blur시
    inputbox.addEventListener('blur', function(){
        inputbox.classList.remove('hasValue')   //버튼 안보이게
    })
})


console.log(resetBtn);

resetBtn.forEach((reset => {
    reset.addEventListener('click', function(){
        inputBoxs.forEach((inputbox) => {
            inputbox.value = '';
        })
    })
}))

eyeBtn.addEventListener('click', function(){
    pwBox.type = 'text';
})


// 로그인-----------------------------------

// 회원가입---------------------------------

const verifyBtn = document.querySelector('.verify_btn button');


emailBox.addEventListener('blur', function(){
    profile.email = emailBox.value;
    let result = emailChecker(profile.email);
    console.log(profile.email);
    if(result.isValid){}
})





//휴대폰번호 유효하면 버튼 disabled 제거 
phoneBox.onblur = function(){
    profile.phone = phoneBox.value;
    if(phoneChecker(profile.phone)){
        verifyBtn.removeAttribute('disabled');
    }
}

verifyBtn.addEventListener('click', function(){
    verifyNum = verifyNumGenerator();
    alert(`인증번호: ${verifyNum}`);

    //버튼 클릭 시 readonly 제거
    verifyBox.removeAttribute('readonly');
    verifyBox.value = verifyNum;
})







// 회원가입 완료: ${name} 저장해서 가져오기-----------------

    

})

// [↓] sns 로그인(dom제어 필요없는 부분이라 밖으로 뺐습니다.)

//로그인 여부 판별: 쿠키에 access_token값 있는지?
// let cookie = document.cookie.split(';');    //쿠키에서
// let access_token = cookie.filter((v)=>v.match('access_token')); //엑세스 토큰 추출
// 엑세스 토큰이 있으면 로그인 페이지 진입불가, 메인으로 이동

let cookie = document.cookie.split(';');    //쿠키에서
let access_token= cookie.filter((v)=>v.match('access_token')); //엑세스 토큰 추출
var login = false; //로그인 상태일 때:true , 로그아웃 상태일 때: false

// if 조건문이 true, false를 boolean이 아닌 문자열로 받기때문에 false가 나와도 true로 간주한다. (false라는 문자가 있으니까 트루.) 그래서 === 'true'를 넣어줘서 문자열 true 일때를 한번 더 넣어주면 정상작동함.
if(access_token.length && access_token[0].split('=')[1] === 'true'){ //엑세스 토큰 값있
    login = true;
    // location.href="/";
} else{                         //엑세스 토큰 값없: 로그인 진행

/* sns 로그인 공통 변수, 함수 ---------------------------------*/
//(1) 서비스 주소(로그인 버튼 있는 페이지)
const SERVICE_URI = "http://127.0.0.1:5501/login.html";
//(2) 콜백할 주소(리디렉트)
const REDIRECT_URI = "http://127.0.0.1:5501/login.html";
//(3) 콜백 후 이동할 주소(메인)
const AFTER_REDIRECT_URI = "http://127.0.0.1:5501/";
//(4) 유저 정보 구조
var profile =  {
    email: '',
    name:'',
    age: '',
    b_day: '',
    gender: '',
    mobile: ''
};
//(5) 쿠키와 세션에 유저 정보를 저장하는 함수
const setUserInfo = function(accessToken) {
    //1. 유효기간 설정
    let endDate = new Date();
    endDate.setSeconds(endDate.getSeconds() + 86400);   //24시간 (단위:초)
    //2-1. 유저 정보를 쿠키에 저장
    Object.entries(profile).forEach(([key, value]) => {
        document.cookie = `${key}=${value}; expires=${endDate.toGMTString()};`;
    })
    //2-2. 엑세스 토큰을 쿠키에 저장
    document.cookie = `access_token=${accessToken}; expires=${endDate.toGMTString()};`
    //3. 정보를 세션에 저장(로그인 페이지 외 다른 페이지에서도 사용할 수 있게)
        //1) 프로필 정보
    sessionStorage.profile = JSON.stringify(profile);
        //2) 로그인 여부
    login = true;
    sessionStorage.login = JSON.stringify(login);
        /* <참고> 세션에 저장한 정보 꺼내쓸 때 : 
            let checkLogin = JSON.parse(sessionStorage.login); 
            console.log(checkLogin);  //true면 로그인, false면 로그아웃 상태
            이런 방법으로 사용  
        */
        /* 로그아웃 시 sessionStorage.clear() 반드시 해주기!!! */
    //4. 메인 페이지로 이동
    location.href = AFTER_REDIRECT_URI;
}

/* 카카오 ---------------------------------*/
const kakaoLogin = function(){
    const REST_API_KEY = "b87b0bf5c70402fe02aec9e63d71cf0a";
    let AUTHORIZE_CODE_KAKAO = new URLSearchParams(location.search),  //인가코드는 매번 랜덤하게 바뀜
        ACCESS_TOKEN_KAKAO = "";
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
                ACCESS_TOKEN_KAKAO = res.access_token;  //엑세스 토큰값 저장
                Kakao.Auth.setAccessToken(ACCESS_TOKEN_KAKAO);
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
            //유저 정보 저장
            profile.name = res.properties.nickname; //원래는 닉네임값인데 name에 넣음
            //쿠키에 저장
            setUserInfo(ACCESS_TOKEN_KAKAO);
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
}
kakaoLogin()

/* 네이버 : 네이버는 함수안에 넣으면 스코프 이슈 발생, 못넣음 ---------------------------------*/
const NAVER_CLIENT_ID = "cEjPiQLxtraGtftdtKot",
    //   CLIENT_SECRET = "sXx4SV6rmO",
      CALLBACK_URI = SERVICE_URI;
        // 네이버가 콜백주소 url에 엑세스 토큰값을 보내기 때문에, 로그인 성공 시 바로 메인페이지로 이동하지 않습니다.
        // 일단 다시 로그인 페이지로 다시 돌아온 후 받아온 토큰값과 회원정보를 저장하고, 이후에 메인으로 이동합니다.
var naver_id_login = new naver_id_login(NAVER_CLIENT_ID, CALLBACK_URI);
var state = naver_id_login.getUniqState();
let ACCESS_TOKEN_NAVER = naver_id_login.getAccessToken();

const naver = document.querySelector('.naver'); //로그인버튼

/* 네이버 로그인 초기화 Script */
// 1. 인가코드 받기: 네이버는 인가코드 필요 없나..?
// 2. 액세스 토큰 발급 (주소창에 access_token=형태로 들어옴)
const loginWithNaver = function() {
    location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=token&client_id=${NAVER_CLIENT_ID}&redirect_uri=${CALLBACK_URI}&state=`;
}
/* 네이버 로그인 Callback페이지 처리 Script */
naver_id_login.get_naver_userprofile("naverSignInCallback()");
// 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
function naverSignInCallback() {
    //유저 정보 저장
    Object.keys(profile).forEach(key => {
        profile[key] = naver_id_login.getProfileData(key);
    })
    //쿠키에 저장
    setUserInfo(ACCESS_TOKEN_NAVER);
}

naver.addEventListener('click', function(){
    loginWithNaver();
})

/* 구글 ---------------------------------*/
const googleLogin = function(){
    const GOOGLE_CLIENT_ID = '507623855565-u1kp5fvsfg2e263jpq2vmtage1rmmkcf.apps.googleusercontent.com';
    const google = document.querySelector('.google');
    
    function signInGoogle(){
        //엔드포인트주소, 엑세스 토큰을 주고 유저정보를 받아오는 곳
        var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
        //엑세스 토큰값을 서버에 주기 위해서 form생성
        var form = document.createElement('form');
        form.setAttribute('method', 'GET'); // Send as a GET request.
        form.setAttribute('action', oauth2Endpoint);
    
        var params = {'client_id': GOOGLE_CLIENT_ID,
                    'redirect_uri': REDIRECT_URI,
                    'response_type': 'token',
                    'scope': 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
                    'include_granted_scopes': 'true',
                    'state': 'pass-through-value'};
    
        //form제출(submit)
        for (var p in params) {
            var input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', p);  //client_id, redirect_uri. response_type, scope, include_granted_scopes, state
            input.setAttribute('value', params[p]); //위의 name에 해당하는 각각의 값들
            form.appendChild(input);
        }
        //dom에 엘리멘트 추가
        document.body.appendChild(form);
        //form자동제출(submit)
        form.submit();
    }
    google.addEventListener('click', signInGoogle);
    
    
    //주소창에 들어온 access_token 뽑아서 저장하기
    let ACCESS_TOKEN_GOOGLE;
    var fragmentString = location.hash.substring(1);
    var params = {};
    var regex = /([^&=]+)=([^&]*)/g, m;
    while (m = regex.exec(fragmentString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    if (Object.keys(params).length > 0 && params['state']) {
        var authInfo = JSON.parse(JSON.stringify(params)); //엑세스 토큰 뽑기
        ACCESS_TOKEN_GOOGLE = authInfo['access_token']; //엑세스 토큰값만 저장
        fetch("https://www.googleapis.com/oauth2/v3/userinfo",{
            headers:{
                "Authorization": `Bearer ${ACCESS_TOKEN_GOOGLE}`
            }
        })
        .then((data) => data.json())    //데이터 받아서 json형태로 만들기
        .then((info) => {
            profile.name = info.name;
            profile.email = info.email;
            setUserInfo(ACCESS_TOKEN_GOOGLE);   //쿠키와 세션에 유저 정보 저장
        })
    }
}
googleLogin();

}