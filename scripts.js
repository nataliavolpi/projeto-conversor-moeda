const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.04
const euro = 5.41
const bitcoin = 135350.49
const libra = 6.31
const valorReal = document.querySelector('#real-value-text')

const convertValues = () => {
    const inputReal = document.getElementById('input-real').value
    const currencyValue = document.querySelector('#convert-value-text')

    valorReal.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }).format(inputReal)

    if (select.value === 'US$ Dólar americano') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }).format(inputReal / dolar)
    }

    if (select.value === '€ Euro') {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }).format(inputReal / euro)
    }

    if (select.value === '₿ Bitcoin') {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'XBT' }).format(inputReal / bitcoin)
    }

    if (select.value === '£ Libra') {
        currencyValue.innerHTML = new Intl.NumberFormat('de-De',
            { style: 'currency', currency: 'GBP' }).format(inputReal / libra)
    }
}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const convertImg = document.getElementById('convert-img')

    if (select.value === '€ Euro') {
        convertImg.src = 'assets/euro.png'
        currencyName.innerHTML = "Euro"
    } else if (select.value === '₿ Bitcoin') {
        convertImg.src = 'assets/bitcoin.png'
        currencyName.innerHTML = "Bitcoin"
    } else if (select.value === '£ Libra') {
        convertImg.src = 'assets/libra.png'
        currencyName.innerHTML = "Libra"
    } else {
        convertImg.src = 'assets/usdollar.png'
        currencyName.innerHTML = "Dólar americano"
    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)