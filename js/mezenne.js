let dollar = document.getElementById("usd")
let manat = document.getElementById("azn")

dollar.addEventListener("input", function() {
   manat.value = (Number.parseFloat(dollar.value)*1.6970).toFixed(4)
   $("#usd").numeric({ allow: "." })
})
manat.addEventListener("input", function() {
   dollar.value = (Number.parseFloat(manat.value)/1.7020).toFixed(4)
   $("#azn").numeric({ allow: "." })
})
