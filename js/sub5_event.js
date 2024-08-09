document.addEventListener('DOMContentLoaded', ()=>{
  fetch("../data/sub5_event.json")
  .then((res)=> {return res.json()})
  .then((data)=> {
    // sub5_event.html script
    const abc = window.location.href;
    const event_box = document.querySelector('.align_box');
    const data_event = data.event_page;
    if(abc.includes('sub5_community_event.html')){    
    data_event.forEach((v,i)=>{

      if(i <5){
      event_box.innerHTML += `<li> <a href="${v.event_link}">
                            <div class="img_box">
                                <img src="${v.event_img}.jpg" alt="이벤트 사진 1번">
                            </div>
                            <div class="event_text_box">
                                <p>${v.event_text}</p>
                                <span>${v.event_period}
                                </span>
                            </div>
                        </a>
                    </li>`
                  }
      else if(i == 5){
        event_box.innerHTML += `<li>
                            <a href="#">
                            <div class="img_box">
                                <img src="${v.event_img}.jpg" alt="이벤트 사진 ${v.id}번">
                                <div class="end_event">
                                    <p class="end_event_text">${v.event_end}</p>
                                </div>
                            </div>
                            <div class="event_text_box">
                                <p>가평 칼봉산 짚라인 할인</p>
                                <span>기간 : 2024.07.01 ~ 2024.07.30
                                </span>
                            </div>
                        </a>
                    </li> `
      }

    })
  }
  else {
    // sub5_event_inner.html script
    const event_innerbox = document.querySelector('.sub5_event_inner_content');
    const event_innerdata = data.event_inner;
    event_innerbox.innerHTML = `<div class="sub5_img_box">
                            <img src="${event_innerdata.event_inner_img}.jpg" alt="">
                        </div>
                        <div class="sub5_text_box">
                            <p>
                                ${event_innerdata.event_inner_text}
                            </p>
                        </div>`
  }
  })

})