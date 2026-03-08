import invoiceService from "../services/invoiceService.js"

const calcInvoice = (req, res) => {
    const result = invoiceService.calc(req.data)
    res.json(result)
}

export default {
    calcInvoice
}