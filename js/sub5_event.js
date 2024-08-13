document.addEventListener('DOMContentLoaded', ()=>{
  fetch("../data/sub5_community_event.json")
  .then((res)=> {return res.json()})
  .then((data)=> {
    // sub5_event.html script
    const event = document.querySelector(".event")
    const event_box = document.querySelector('.align_box');
    const data_event = data.event_page;
    const now = new Date();
    const year = now.getFullYear();
    let month =  now.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    const day = now.getDate();
    const formattedDate = `${year}.${month}.${day}`
    if(event){ 
      data_event.forEach((v,i)=>{
      console.log(data_event[1].event_startday <= formattedDate);
      if(data_event[i].event_startday <= formattedDate){
      event_box.innerHTML += `<li> <a href="${v.event_link}">
                            <div class="img_box">
                                <img src="/img/img_event_05_2_contents_0${v.id}.jpg" alt="이벤트 사진 ${v.id}번">
                            </div>
                            <div class="event_text_box">
                                <p>${v.event_title}</p>
                                <span>기간 : ${v.event_startday} ~ ${v.event_lastday}
                                </span>
                            </div>
                        </a>
                    </li>`
                  }
      else if(data_event[1].event_endday > formattedDate){
        event_box.innerHTML += `<li>
                            <a href="#">
                             <div class="img_box">
                                <img src="/img/img_event_05_2_contents_0${i}.jpg" alt="이벤트 사진 ${v.id}번">
                                <div class="end_event">
                                    <p class="end_event_text">${v.event_lastday}</p>
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
                            <img src="./img/img_sub5_2_event_inner_0${v.id}.jpg" alt="">
                        </div>
                        <div class="sub5_text_box">
                            <p>
                                ${event_innerdata.event_inner_text}
                            </p>
                        </div>`
  }
  })

})