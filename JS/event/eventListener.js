export const eventCreator = (event, btn, btnColor) => {
  const tagList = document.getElementById("taglist");
  for (let i = 0; i < event.length; i++) {
    event[i].addEventListener("click", () =>{
      let text = event[i].innerHTML;
      const tagHtml = `<button type="button" class="tag btn ${btnColor}
      ml-0 mr-2 mb-2 p-1 pr-2 pl-2 d-flex align-items-center">
      <small>${text}</small><i class="far fa-times-circle ml-2"></i></button>`
      btn.value = text;
      tagList.insertAdjacentHTML('beforeend', tagHtml);
      closeTagListener();
    })
  }
};

export const closeTagListener = () => {
  const close = document.querySelectorAll("i.far.fa-times-circle.ml-2");
  const tag = document.getElementsByClassName("tag")
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", () =>{
      try {
        tag[i].parentNode.removeChild(tag[i]);
      } catch (error) {}    
    })
  }
};