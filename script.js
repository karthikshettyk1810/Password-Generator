let btn = document.getElementById("btn");

btn.addEventListener(
  "click",
  (handle = () => {
    class password {
      constructor() {
        console.log("This is password genearator");
        this.pass = "";
      }
      generatePassword(len) {
        this.len = len;
        let small = "abcdefghijklmnopqrstuvwxyz";
        let bg = small.toUpperCase();
        let sp = "!@#$%^&*?/)(-+-";
        let num = "0123456789";
        for (let i = 0; i < len; i++) {
          this.pass += small[Math.floor(Math.random(small) * small.length)];
          this.pass += bg[Math.floor(Math.random(bg) * bg.length)];
          this.pass += sp[Math.floor(Math.random(sp) * sp.length)];
          this.pass += num[Math.floor(Math.random(num) * num.length)];
          this.pass = this.pass.substr(0, len);
        }
        // Below commented lines are only used for debugging using console
        // console.log(small[rdSmall]);
        // console.log(bg[rdBig]);
        // console.log(sp[rdSpecial]);
        return this.pass;
        // console.log(Math.floor(Math.random(sp) * splen));
        // console.log(Math.floor(Math.random(bg) * bglen));
        // console.log(Math.floor(Math.random(small) * len));
        // // console.log(small);
        // // console.log(bg);
      }
    }
    let div = document.getElementById("pass");
    let a = new password();
    let gen = Number(document.getElementById("in").value);
    if(gen>30)
    {
      div.style.color = "red";
      div.innerHTML = "Length Exceeded"; 
    }
    else if (gen == "") {
      div.style.color = "red";
      div.innerHTML = "Please Enter the length";
    } else {
      div.style.color = "green";
      div.innerHTML = "";
      console.log(a.generatePassword(gen));
      div.innerHTML = a.generatePassword(gen);
    }
  })
);
