/* eslint-disable no-undef */
const ERROR = {
  EMPTY: '',
  INVALID: 'All digits must be a numbers',
  NUMBER_OF_DIGITS: 'Number must be 16 digits',
  REPEATED: 'You must have at least two different digits represented',
  NOT_EVEN: 'The final digit must be even',
  SUM_LESS_THAN: 'The sum of all the digits must be greater than 16',
  EXPIRED: 'The card is expired'
}

function hasAtLeastTwoDifferentDigits (cardNumber) {
  const uniqueDigits = [...new Set(cardNumber)]
  const valid = uniqueDigits.length >= 2
  return { valid, message: valid ? ERROR.EMPTY : ERROR.REPEATED }
}

function hasLastDigitEven (cardNumber) {
  const isEven = (number) => number % 2 === 0
  const valid = isEven(cardNumber.charAt(cardNumber.length - 1))
  return { valid, message: valid ? ERROR.EMPTY : ERROR.NOT_EVEN }
}

function hasSumGreaterThan16 (cardNumber) {
  const numbers = cardNumber.split('')
  const valid = numbers.map((digit) => Number(digit)).reduce((acc, number) => acc + number) > 16
  return { valid, message: valid ? ERROR.EMPTY : ERROR.SUM_LESS_THAN }
}

function hasNumberOfDigitsEqual16 (cardNumber) {
  const valid = cardNumber.length === 16
  return { valid, message: valid ? ERROR.EMPTY : ERROR.NUMBER_OF_DIGITS }
}

function allDigitsAreNumbers (cardNumber) {
  const valid = !isNaN(cardNumber)
  return { valid, message: valid ? ERROR.EMPTY : ERROR.INVALID }
}

function validateNumber (cardNumber) {
  const cleanCardNumber = cardNumber.trim().replace(/-+/g, '')
  const validationArray = [
    allDigitsAreNumbers(cleanCardNumber),
    hasNumberOfDigitsEqual16(cleanCardNumber),
    hasAtLeastTwoDifferentDigits(cleanCardNumber),
    hasLastDigitEven(cleanCardNumber),
    hasSumGreaterThan16(cleanCardNumber)
  ]

  const valid = validationArray.every(valitadion => valitadion.valid)
  const error = validationArray.find(validation => validation.valid === false)?.message

  return { valid, error }
}

function validateDate (expirationDate) {
  const now = new Date()
  const valid = expirationDate.getTime() > now

  return { valid, error: valid ? ERROR.EMPTY : ERROR.EXPIRED }
}

function validateCreditCard ({ cardNumber, expirationDate }) {
  const validationArray = [
    validateNumber(cardNumber),
    validateDate(expirationDate)
  ]
  const valid = validationArray.every(valitadion => valitadion.valid)
  const error = valid ? ERROR.EMPTY : validationArray.find(validation => validation.valid === false)?.error

  return { valid, number: cardNumber, error }
}

document.addEventListener('DOMContentLoaded', () => {
  const inputCardNumber = document.getElementById('card-number')
  const inputExpirationDate = document.getElementById('expiration-date')
  // const sendButton = document.getElementById('sendButton')
  const form = document.getElementById('card-form')

  form.addEventListener('submit', () => {
    const cardNumber = inputCardNumber.value.replace(/\s+/g, '')
    const expirationDate = inputExpirationDate.value

    const createADate = (date) => {
      const [year, month] = date.split('/')

      return new Date(Number(`20${year}`), Number(month % 13) - 1)
    }

    const formatExpirationDate = createADate(expirationDate)
    const validatedCreditCard = validateCreditCard({ cardNumber, expirationDate: formatExpirationDate })

    alert(validatedCreditCard.valid ? `La tarjeta ${validatedCreditCard.number} es valida` : validatedCreditCard.error)
  })
})
// console.log(validateCreditCard({ cardNumber: '9999777788880000', expirationDate: new Date(2023, 10) }))
// console.log(validateCreditCard({ cardNumber: '6666666666661666', expirationDate: new Date(2023, 10) }))
// console.log(validateCreditCard({ cardNumber: 'a92332119c011112', expirationDate: new Date(2023, 10) }))
// console.log(validateCreditCard({ cardNumber: '4444444444444444 ', expirationDate: new Date(2023, 10) }))
// console.log(validateCreditCard({ cardNumber: '1111111111111110', expirationDate: new Date(2023, 10) }))
// console.log(validateCreditCard({ cardNumber: '6666666666666661', expirationDate: new Date(2023, 10) }))
// console.log(validateCreditCard({ cardNumber: '9999-7777-8888-0000', expirationDate: new Date(2023, 10) }))
// console.log(validateCreditCard({ cardNumber: '6666-6666-6666-1666', expirationDate: new Date(2023, 10) }))
// console.log(validateCreditCard({ cardNumber: '9999777788880000', expirationDate: new Date(2023, 9) }))
// console.log(validateCreditCard({ cardNumber: '6666666666661666', expirationDate: new Date(2023, 9) }))
