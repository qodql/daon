document.addEventListener('DOMContentLoaded', ()=>{
  fetch("../data/sub5_community_event.json")
  .then((res)=> {return res.json()})
  .then((data)=> {
    // sub5_event.html script
    const event = document.querySelector(".event")
    const event_box = document.querySelector('.align_box');
    const data_event = data.event_page;
    const now = new Date();


    if(event){ 
     
    data_event.forEach((v,i)=>{
    
      let end_date = new Date(v.event_lastday)

      event_box.innerHTML += `<li data-id="${i+1}"> <a href="${(end_date > now) ? v.event_link:'#'}">  
                            <div class="img_box">
                                <img src="/img/img_event_05_2_contents_0${i}.jpg" alt="이벤트 사진 ${i+1}번">
                                                                                                                    <div class="end_event ${(end_date < now) ? 'active':''}">
                                  <p class="end_event_text">종료된 이벤트</p>
                                  </div>
                            </div>
                            
                            <div class="event_text_box">
                                <p>${v.event_title}</p>
                                <span>기간 : ${v.event_startday} ~ ${v.event_lastday}
                                </span>
                            </div>
                        </a>
                    </li>`
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