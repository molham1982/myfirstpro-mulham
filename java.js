const parentform = document.querySelector(".parent-form");
const iconx = document.getElementById("iconcloselogin");
const container = document.getElementById("Container");

// const body= document.querySelector("body")
// console.log(body)
// body.addEventListener("click",() => {
//     body.classList.toggle("dark")
// })
//............open creat account .......//

validation.addEventListener("click", (eo) => {
  parentform.style.display = "block";
  setTimeout(() => {
    container.style.transform = "scale(1)";
  }, 500);
});

//............colse creat account .......//
iconx.addEventListener("click", (eo) => {
  container.style.transform = "scale(0)";
  setTimeout(() => {
    parentform.style.display = "none";
  }, 600);
});

// .........when we success registerbtn is active...//
const registerbtn = document.querySelector(".registerbtn");

const active = () => {
  if (
    username.classList.contains("success") &&
    email.classList.contains("success") &&
    psw.classList.contains("success") &&
    pswrepeat.classList.contains("success")
  ) {
    registerbtn.removeAttribute("disabled");
  } else {
    registerbtn.setAttribute("disabled", "");
  }
};
// .........when we keyup on username...//Aa123456

username.addEventListener("keyup", (eo) => {
  username.classList.add("error");
  usermassage.style.display = "block";
  if (username.value.length > 2) {
    username.classList.remove("error");
    username.classList.add("success");
    usermassage.style.display = "none";
    usermassage.nextElementSibling.style.opacity = "1";
  } else {
    usermassage.nextElementSibling.style.opacity = "0";
    usermassage.style.display = "block";
    username.classList.remove("success");
  }
  active();
});

// .........when we keyup on email...//
email.addEventListener("keyup", (eo) => {
  const myemail = email.value;
  const RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (RegExp.test(myemail)) {
    emailmassage.style.display = "none";
    emailmassage.nextElementSibling.style.opacity = "1";
    email.classList.remove("error");
    email.classList.add("success");
  } else {
    emailmassage.style.display = "block";
    emailmassage.nextElementSibling.style.opacity = "0";
    email.classList.add("error");
    email.classList.remove("success");
  }
  active();
});

// .........when we keyup on password & ckeck...//
// = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[a-z]).{8,}$/;
psw.addEventListener("keyup", (eo) => {
  const RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[a-z]).{8,}$/;
  const mypas = psw.value;
  if (RegExp.test(mypas)) {
    psw.classList.remove("error");
    psw.classList.add("success");
    pasmassage.style.display = "none";
    pasmassage.nextElementSibling.style.opacity = "1";
  } else if (mypas.length < 8) {
    psw.classList.add("error");
    psw.classList.remove("success");
    pasmassage.style.display = "block";
    pasmassage.nextElementSibling.style.opacity = "0";
  } else {
    psw.classList.add("error");
    psw.classList.remove("success");
    pasmassage.style.display = "block";
    pasmassage.nextElementSibling.style.opacity = "0";
  }
  active();
});
//     ....... check enterd password......//
const pswrepeat = document.getElementById("psw-repeat");
pswrepeat.addEventListener("keyup", (eo) => {
  const pas1 = psw.value;
  console.log(pas1);
  const pas2 = pswrepeat.value;
  console.log(pas2);
  if (pas1 === pas2) {
    pswrepeat.classList.remove("error");
    pswrepeat.classList.add("success");
    repeatpas.style.display = "block";
    repeatpas.innerText = "Password created successfully";
    repeatpas.style.color = "green";
    repeatpas.nextElementSibling.style.opacity = "1";
  } else {
    pswrepeat.classList.add("error");
    pswrepeat.classList.remove("success");
    repeatpas.style.display = "block";
    repeatpas.innerText = "Passwords did not match";
    repeatpas.style.color = "red";
    repeatpas.nextElementSibling.style.opacity = "0";
  }
  active();
});

// function matchPassword() {
//     var pw1 = document.getElementById("pswd1");
//     var pw2 = document.getElementById("pswd2");
//     if(pw1 != pw2)
//     {
//       alert("Passwords did not match");
//     } else {
//       alert("Password created successfully");
//     }
//   }
//...........................//
//.........clock.............//
{
  const clock = document.querySelectorAll(".colock");
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");
  sec.innerHTML = ` 00 `;
  min.innerHTML = ` 00 `;
  let i = 0;
  let y = 0;

  clock.forEach((itme) => {
    setInterval(() => {
      i++;
      if (i < 10) {
        sec.innerHTML = ` 0${i} `;
      } else if (i > 9) {
        sec.innerHTML = i;
      }
      if (i == 60) {
        y++;
        i = 0;
        min.innerHTML = ` 0${y} `;
      } else if (y > 9) {
        min.innerHTML = y;
      }
      if (y == 60) {
        y = 0;
      }
    }, 1000);
  });
}

//........... basketBage.......//
const basketBage = document.getElementById("basketBage");
const close = document.getElementById("close");
const basketitems = document.querySelector(".basket-items");
const basket = document.getElementsByClassName("basket-bage")[0];

//      open basket bage .......//
basketBage.addEventListener("click", (eo) => {
  basket.style.display = "block";
  setTimeout(() => {
    basket.style.transform = "translate(0vw)"
    
  }, 500);

});
//........... close basket bage ....//
close.addEventListener("click", (eo) => {
  basket.style.transform = "translate(110vw)";
  setTimeout(() => {
    
    basket.style.display = "none";
  }, 1000);
});
basketitems.addEventListener("change", () => {
  myfun();
});

const myfun = () => {
  // ........ totap price box.......//
  const allproduct = document.querySelectorAll(".item1");
  let price = 0;
  allproduct.forEach((element) => {
    let priceofelement = Number(
      element
        .getElementsByClassName("details item-middle")[0]
        .getElementsByClassName("item-price")[0]
        .innerText.replace("$", "")
    );

    let picesofelement = Number(
      element
        .getElementsByClassName("details item-middle")[0]
        .getElementsByClassName("numberofpieces")[0].value
    );

    price = price + priceofelement * picesofelement;
  });
  totalprice.innerText = `${price} $`;
};

//........... when we press add .........//

const pressadd = document.querySelector(".flexes");

pressadd.addEventListener("click", (eo) => {
  eo.preventDefault();

  if (eo.target.classList == "btn btn-primary") {
    eo.target.classList.remove("btn-primary");
    eo.target.classList.add("btn-success");
    eo.target.setAttribute("disabled", "");
    eo.target.innerHTML = `  &#10003; Done`;

    let titleName = eo.target.parentElement.parentElement.parentElement
      .getElementsByClassName("card-body")[0]
      .getElementsByClassName("card-title")[0].innerText;
    let imgName =
      eo.target.parentElement.parentElement.parentElement.getElementsByClassName(
        "card-img-top"
      )[0].src;
    let priceNumber = Number(
      eo.target.parentElement.parentElement.parentElement
        .getElementsByClassName("card-body")[0]
        .getElementsByClassName("select-buy")[0]
        .getElementsByClassName("price")[0]
        .innerText.replace("$", "")
    );

    
    
    const item = basketitems.getElementsByClassName("item")[0];
    item.innerHTML += `
    
    <div class="item1">
      <div class="details item-left" >
        <div  class="icon-trash trashinitem" ></div>
        
      </div>
      <div class="details item-middle" >
        <p id="itemprice" class="item-price" > ${priceNumber} $</p>
        <input class="numberofpieces" placeholder="1" type="number" min="1" max="5" value="1" style="width:40px ;" >
      </div>
      <div class="details item-right" >
        <p class="item-name" >${titleName}</p>
        <img id="itemimg" class="item-img" src="${imgName}" width="50px" alt="">
      </div>
    </div> 
        `;
    let box = basketitems.getElementsByClassName("totalbox")[0];
    box.innerHTML = `
        <p id="totalnumber" class="total-number" > total price</p>
              <p id="totalprice" class="total-price" >30</p>
              <div id="buy" class="btn btn-danger ">Buy</div>
        `;
    myfun();

    // ...........delet item.......//
    const clickontrash = document
      .querySelector(".item")
      .querySelectorAll(".item1");
    clickontrash.forEach((currentItem) => {
      currentItem.addEventListener("click", (eo) => {
        if (eo.target.classList == "icon-trash trashinitem") {
          const delet = eo.target.parentElement.parentElement;
          delet.style.transform = "translate(110vw)";

          const currentItemfordelet = currentItem
            .getElementsByClassName("details item-right")[0]
            .getElementsByClassName("item-name")[0];
          const machname = pressadd.querySelectorAll(".card");
          // ...........repeat btn-primary.......//
          machname.forEach((element) => {
            const repeatbutton = element
              .getElementsByClassName("card-body")[0]
              .getElementsByClassName("card-title")[0];
            if (repeatbutton.innerText == currentItemfordelet.innerText) {
              const replace = repeatbutton.parentElement
                .getElementsByClassName("select-buy")[0]
                .getElementsByClassName("btn btn-success")[0];
              replace.classList.remove("btn-success");
              replace.classList.add("btn-primary");
              replace.removeAttribute("disabled");
              replace.innerHTML = `  add to basket`;
            }
          });
          setTimeout(() => {
            delet.remove();
            myfun();
          }, 1500);
        }

      });
    });
    
  }
  //..........click to buy......//
  const buy = document.getElementById("buy")
  const buybage = document.querySelector(".buybage")
  const closeinbuycard = document.querySelector(".close-in-buycard")
  buy.addEventListener("click",(eo) => {
    buybage.style.display="block"
    // basket.style.transform = "translate(110vw)";
    closeinbuycard.addEventListener("click",(params) => {
      buybage.style.display="none"
      
    })
    //............click on buy.........//
    let clicktoBuy=document.getElementById("clicktoBuy")
    clicktoBuy.addEventListener("click",(eo) => {
    
    })
  })

});
//............click on menu.........//
const menu=document.getElementsByClassName("menu")[0]
const mainmenu=document.querySelector(".main-menu")
const container1 =document.querySelector(".container1 ")
const side = document.querySelectorAll(".side")


menu.onclick = () => {
  menu.style.cursor="pointer"
  mainmenu.classList.toggle(`active`)
  container1.classList.toggle(`active1`)
  if(mainmenu.classList.contains(`active`)){
    mainmenu.style.display="block"
    setTimeout(() => {
      mainmenu.style.transform="translate(0vw)"
      
    }, 200);
  } else {
    mainmenu.style.transform="translate(50vw)"
    setTimeout(() => {
      
      mainmenu.style.display="none"
    }, 400);
  }
  side.forEach(element => {
    if (container1.classList.contains(`active1`)) {
      element.style.width="45%"
      element.style.left="16%"

    }else{
      element.style.width="75%"
      element.style.left="17%"
    }
 });
}