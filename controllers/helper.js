let helper = {}

helper.toLowerCase = (text) => {
    return text.toLowerCase()
}

helper.toFixed2 = (num) => {
    return parseFloat(num).toFixed(2)
}

module.exports = helper;