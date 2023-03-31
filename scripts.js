const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.08
const euro = 5.53
const bitcoin = 144590.00
const valorReal = document.querySelector('#real-value-text')

const convertValues = () =>{
    const inputReal = document.getElementById('input-real').value
    const currencyValue = document.querySelector('#convert-value-text')

    valorReal.innerHTML = new Intl.NumberFormat('pt-BR', 
    {style: 'currency', currency: 'BRL'}).format(inputReal) 

    if (select.value === 'US$ Dólar americano'){
    currencyValue.innerHTML = new Intl.NumberFormat('en-US', 
    {style: 'currency', currency: 'USD'}).format(inputReal / dolar)}

    if (select.value === '€ Euro'){
    currencyValue.innerHTML = new Intl.NumberFormat('de-DE', 
    {style: 'currency', currency: 'EUR'}).format(inputReal / euro)}

    if (select.value === '₿ Bitcoin'){
    currencyValue.innerHTML = new Intl.NumberFormat('de-DE', 
    {style: 'currency', currency: 'XBT'}).format(inputReal / bitcoin)}
}

const changeCurrency = () =>{
    const currencyName = document.getElementById('currency-name')
    const convertImg = document.getElementById('convert-img')

    if (select.value === '€ Euro'){
        convertImg.src = 'assets/euro.png'
        currencyName.innerHTML = "Euro"
    } else if (select.value === '₿ Bitcoin'){
        convertImg.src = 'assets/bitcoin.png'
        currencyName.innerHTML = "Bitcoin"
    } else {
        convertImg.src = 'assets/usdollar.png'
        currencyName.innerHTML = "Dólar americano"
    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)