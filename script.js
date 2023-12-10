const convertButton = document.querySelector(".convert")
const firstSelect = document.querySelector(".first-select")

const convertValues = async () => {

    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector("#valor-a-converter") // moedas acima
    const currencyValueConverted = document.querySelector("#valor-convertido") // moeda abaixo

    const data = await fetch("http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL,BTC-BRL,ARS-BRL,CAD-BRL,CHF-BRL,DOGE-BRL").then(response => response.json())

    const dolar = data.USDBRL.high

    const euro = data.EURBRL.high

    const libra = data.GBPBRL.high

    const bitcoin = data.BTCBRL.high

    const iene = data.JPYBRL.high

    const canadense = data.CADBRL.high

    const peso = data.ARSBRL.high

    const franco = data.CHFBRL.high

    const doge = data.DOGEBRL.high

    // sessão dólar para real

   if (firstSelect.value == "dolar" ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputCurrencyValue),

    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        }).format(inputCurrencyValue * dolar)
    }
    
    // sessão euro para real

    if (firstSelect.value == "euro" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
            }).format(inputCurrencyValue * euro)
        }

    // sessão libra para real

    if (firstSelect.value == "libra" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
            }).format(inputCurrencyValue * libra)
        }

    // sessão bitcoin para real

    if (firstSelect.value == "bitcoin" ) { 
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
            }).format(inputCurrencyValue),
    
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
            }).format(inputCurrencyValue * bitcoin)
        }

    // sessão iene para real

    if (firstSelect.value == "iene" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
            }).format(inputCurrencyValue * iene)
        }

    // sessão dólar canadense para real

    if (firstSelect.value == "dolar-canadense") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
            }).format(inputCurrencyValue * canadense)
        }

    // sessão peso argentino para real

    if (firstSelect.value == "peso-argentino") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
            }).format(inputCurrencyValue * peso)
        }

    // sessão franco suiço para real

     if (firstSelect.value == "franco-suiço") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("it-CH", {
            style: "currency",
            currency: "CHF",
            }).format(inputCurrencyValue),
    
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
            }).format(inputCurrencyValue * franco)
        }

 // sessão dogecoin para real

    if (firstSelect.value == "doge") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "XDG",
            }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
            }).format(inputCurrencyValue * doge)
        }
    }

function changeFirstSelect (){ // função para alterar a imagem das moedas do primeiro seletor

    const currencyImage = document.querySelector("#currency-img")
    const currencyName = document.querySelector("#currency-prime")

    if (firstSelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dólar-logo.png"
    }

    if (firstSelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro-logo.png"
    }

    if (firstSelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra-logo.png"
    }

    if (firstSelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin-logo.png"
    }

    if (firstSelect.value == "iene") {
        currencyName.innerHTML = "Iene Japonês"
        currencyImage.src = "./assets/yene-logo.png"
    }

    if (firstSelect.value == "dolar-canadense") {
        currencyName.innerHTML = "Dólar Canadense"
        currencyImage.src = "./assets/canada-logo.png"
    }

    if (firstSelect.value == "peso-argentino") {
        currencyName.innerHTML = "Peso Argentino"
        currencyImage.src = "./assets/argentina-logo.png"
    }

    if (firstSelect.value == "franco-suiço") {
        currencyName.innerHTML = "Franco Suiço"
        currencyImage.src = "./assets/franco-logo.png"
    }

    if (firstSelect.value == "doge") {
        currencyName.innerHTML = "Dogecoin"
        currencyImage.src = "./assets/doge-logo.png"
    }
}

// função de atualização da cotação

const hourUpdate = async () => {
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL").then(response => response.json())

    const update = document.querySelector(".update")
    update.innerHTML = `Cotação atualizada em ${data.USDBRL.create_date}`
}

firstSelect.addEventListener("change", changeFirstSelect) // evento quando o primeiro seletor é alterado
convertButton.addEventListener("click", convertValues) // evento quando o botão para converter é clicado
convertButton.addEventListener("click", hourUpdate) // evento para atualizar o horário e data da cotação
