class Ledger {
    constructor (transaction, amount) {
        this.transaction = transaction
        this.ledger = []
        this.amount = 0
    }

    recordDepositTransaction(amount) {
        this.amount = amount
        const add = this.transaction.deposit(amount)
        this.ledger.push(`${this.amount} || ${add}`)
    } 

    recordWithdrawTransaction(amount) {
        this.amount = amount
        const add = this.transaction.withdraw(amount)
        this.ledger.push(`${this.amount} || ${add}`)
    } 

    printLedger() {
        return this.ledger
    } 
}
