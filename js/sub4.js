document.addEventListener("DOMContentLoaded", () => {
    fetch("./sub4.json")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        const elName = document.querySelectorAll('.card_name');
        const elName_kr = elName.querySelectorAll('strong');
        const elName_eng = elName.querySelector('.card_name_eng p');
        const elName_link = elName.querySelector('.card_name_eng a');

        const elImg = document.querySelector('.card_img .imgbox img');
        const elTxt = document.querySelector('.card_txt');

        data.sub4_cards.forEach((card) => {
            elName_kr.innerText += `${sub4_cards.name-kr}`;
            elName_eng.innerText += `${sub4_cards.name-kr}`;
        })
    })

})