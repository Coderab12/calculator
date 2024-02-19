console.log("welcome to parambrata's calculator");
let btn = document.querySelectorAll("button")
let input = document.querySelector("input")
btn.forEach((e) => {
    e.addEventListener("click", function () 
    {
        let currentValue = input.value;
        let newValue = e.innerHTML;
        if (e.innerHTML !== "=") {
            input.value = currentValue + '' + newValue;
        }
        if (e.innerHTML == "="){
            let val = input.value
            val.trim()
            let result = eval(val)
            input.value = result
        }
        if (e.innerHTML == "C"){
            let val = input.value
            let nlsc = val.substring(0,val.length - 2)
            input.value = nlsc
        }
        if (e.innerHTML == "CE"){
            input.value = ""
        }
    })
});