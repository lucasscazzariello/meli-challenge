const formats = {
    'ARS': '$ ',
    'USD': 'U$S '
}

export function getCurrencySymbol(currency) {
    return formats[currency]
}