export const toWei = function (token, amount) {
  return Math.floor(amount * 10 ** token.decimals)
}

export const formattedAmount = function (amount, token, maxDigits) {
  if (amount == 0) {
    return '0'
  }

  let maximumSignificantDigits = maxDigits || token.decimals
  let formatter = new Intl.NumberFormat([], {maximumSignificantDigits})
  let formattedAmount = formatter.format(amount)
  return `${formattedAmount} ${token.code}`
}

export const formattedCurrency = function (amount, currencyCode) {
  if (!currencyCode) {
    return null
  }
  return new Intl.NumberFormat([], {style: 'currency', currency: currencyCode}).format(amount)
}

export const humanizeReference = function (referenceType, transactionType) {
  const credits = {
    transfer: 'Transfer Received',
    transferexecution: 'Transfer Received',
    paymentconfirmation: 'Payment Received',
  }

  const debits = {
    transfer: 'Transfer Submitted',
    transferexecution: 'Transfer Sent',
    paymentconfirmation: 'Payment Sent',
  }

  if (transactionType == 'credit') {
    return credits[referenceType]
  }

  if (transactionType == 'debit') {
    return debits[referenceType]
  }

  return 'N/A'
}

export default {toWei, formattedAmount, formattedCurrency, humanizeReference}
