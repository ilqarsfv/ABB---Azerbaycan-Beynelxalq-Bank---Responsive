let myRange = document.getElementById("myRange");
let myRange2 = document.getElementById("myRange2");
let myRange3 = document.getElementById("myRange3");

let output = document.getElementById("output");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");

let monthly = document.getElementById("monthly");
let summary = document.getElementById("summary");

myRange.yaz = function () {
    output.value = myRange.value
}
myRange2.yaz2 = function () {
    output2.value = myRange2.value
}
myRange3.yaz3 = function () {
    output3.value = myRange3.value
}

output.addEventListener("input", function () {
    if (output.value > 30000) {
        output.value = 30000
    }
    else if (output.value == "") {
        output.value = 0
    }
    else if (output.value !== "0") {
        let val = output.value
        let number  = val.replace(/^0/g, '');
        output.value=number
    }
    
    myRange.value = output.value
    let x = (myRange.value - myRange.min) / (myRange.max - myRange.min) * 100
    color = 'linear-gradient(90deg, rgb(37,154,238)' + x + '% , rgb(221, 221, 221)' + x + '%)'
    myRange.style.background = color
    let Km = myRange.value
    let Fm = myRange3.value / (12 * 100)
    monthly.innerHTML = (Math.round(((Km * Fm) / (1 - ((1 + Fm) ** (-myRange2.value)))) * 100)) / 100
    summary.innerHTML = myRange2.value * (Math.round((monthly.innerHTML) * 100)) / 100
})
output2.addEventListener("input", function () {
    if (output2.value > 60) {
        output2.value = 60
    } 
    else if (output2.value=="") {
        output2.value = 0
    }
    else if (output2.value != '0') {
        let val = output2.value
        let number  = val.replace(/^0/g, '');
        output2.value=number
    }
    myRange2.value = output2.value
    let x = (myRange2.value - myRange2.min) / (myRange2.max - myRange2.min) * 100
    color = 'linear-gradient(90deg, rgb(37,154,238)' + x + '% , rgb(221, 221, 221)' + x + '%)'
    myRange2.style.background = color
    let Km = myRange.value
    let Fm = myRange3.value / (12 * 100)
    monthly.innerHTML = (Math.round(((Km * Fm) / (1 - ((1 + Fm) ** (-myRange2.value)))) * 100)) / 100
    summary.innerHTML = myRange2.value * (Math.round((monthly.innerHTML) * 100)) / 100
})
output3.addEventListener("input", function () {
    if (output3.value > 27) {
        output3.value = 27
    }
    else if (output3.value=="") {
        output3.value = 0
    }
    else if (output3.value != "0") {
        let val = output3.value
        let number  = val.replace(/^0/g, '');
        output3.value=number
    }
    
    myRange3.value = output3.value
    let x = (myRange3.value - myRange3.min) / (myRange3.max - myRange3.min) * 100
    color = 'linear-gradient(90deg, rgb(37,154,238)' + x + '% , rgb(221, 221, 221)' + x + '%)'
    myRange3.style.background = color
    let Km = myRange.value
    let Fm = myRange3.value / (12 * 100)
    monthly.innerHTML = (Math.round(((Km * Fm) / (1 - ((1 + Fm) ** (-myRange2.value)))) * 100)) / 100
    summary.innerHTML = myRange2.value * (Math.round((monthly.innerHTML) * 100)) / 100
})
myRange.addEventListener("input", function () {
    let x = (myRange.value - myRange.min) / (myRange.max - myRange.min) * 100
    color = 'linear-gradient(90deg, rgb(37,154,238)' + x + '% , rgb(221, 221, 221)' + x + '%)'
    myRange.style.background = color
    let Km = myRange.value
    let Fm = myRange3.value / (12 * 100)
    monthly.innerHTML = (Math.round(((Km * Fm) / (1 - ((1 + Fm) ** (-myRange2.value)))) * 100)) / 100
    summary.innerHTML = myRange2.value * (Math.round((monthly.innerHTML) * 100)) / 100
})
myRange2.addEventListener("input", function () {
    let x = (myRange2.value - myRange2.min) / (myRange2.max - myRange2.min) * 100
    color = 'linear-gradient(90deg, rgb(37,154,238)' + x + '% , rgb(221, 221, 221)' + x + '%)'
    myRange2.style.background = color
    let Km = myRange.value
    let Fm = myRange3.value / (12 * 100)
    monthly.innerHTML = (Math.round(((Km * Fm) / (1 - ((1 + Fm) ** (-myRange2.value)))) * 100)) / 100
    summary.innerHTML = myRange2.value * (Math.round((monthly.innerHTML) * 100)) / 100
});
myRange3.addEventListener("input", function () {
    let x = (myRange3.value - myRange3.min) / (myRange3.max - myRange3.min) * 100
    color = 'linear-gradient(90deg, rgb(37,154,238)' + x + '% , rgb(221, 221, 221)' + x + '%)'
    myRange3.style.background = color
    let Km = myRange.value
    let Fm = myRange3.value / (12 * 100)
    monthly.innerHTML = (Math.round(((Km * Fm) / (1 - ((1 + Fm) ** (-myRange2.value)))) * 100)) / 100
    summary.innerHTML = myRange2.value * (Math.round((monthly.innerHTML) * 100)) / 100
});