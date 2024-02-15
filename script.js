let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");
let names = document.getElementById("names")
let prices = document.getElementById("prices")



for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
        productImg.src = `resources/men/Air-Jordan-2/image${i + 1}.png`;
        removeActiveClass();
        this.classList.add("active");
    });
}

function removeActiveClass() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
}

const onClick = function() {
    let text = this.innerText
    names.innerText = text

    console.log(names.innerText);
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            productImg.src = `resources/men/${names.innerText}/image${i + 1}.png`;
            removeActiveClass();
            this.classList.add("active");
        });
        function removeActiveClass() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
}
    }
  }
  document.getElementById('new1').onclick = onClick;
  document.getElementById('new2').onclick = onClick;
  document.getElementById('new3').onclick = onClick;
  document.getElementById('new4').onclick = onClick;
  document.getElementById('new5').onclick = onClick;
  document.getElementById('new6').onclick = onClick;
  document.getElementById('new7').onclick = onClick;
  document.getElementById('new8').onclick = onClick;

  document.getElementById('men1').onclick = onClick;
  document.getElementById('men2').onclick = onClick;
  document.getElementById('men3').onclick = onClick;
  document.getElementById('men4').onclick = onClick;
  document.getElementById('men5').onclick = onClick;
  document.getElementById('men6').onclick = onClick;
  document.getElementById('men7').onclick = onClick;
  document.getElementById('men8').onclick = onClick;

  document.getElementById('women1').onclick = onClick;
  document.getElementById('women2').onclick = onClick;
  document.getElementById('women3').onclick = onClick;
  document.getElementById('women4').onclick = onClick;
  document.getElementById('women5').onclick = onClick;
  document.getElementById('women6').onclick = onClick;
  document.getElementById('women7').onclick = onClick;
  document.getElementById('women8').onclick = onClick;

  document.getElementById('kids1').onclick = onClick;
  document.getElementById('kids2').onclick = onClick;
  document.getElementById('kids3').onclick = onClick;
  document.getElementById('kids4').onclick = onClick;
  document.getElementById('kids5').onclick = onClick;
  document.getElementById('kids6').onclick = onClick;
  document.getElementById('kids7').onclick = onClick;
  document.getElementById('kids8').onclick = onClick;

  document.getElementById('sale1').onclick = onClick;
  document.getElementById('sale2').onclick = onClick;
  document.getElementById('sale3').onclick = onClick;
  document.getElementById('sale4').onclick = onClick;
  document.getElementById('sale5').onclick = onClick;
  document.getElementById('sale6').onclick = onClick;
  document.getElementById('sale7').onclick = onClick;
  document.getElementById('sale8').onclick = onClick;