// Class to represent the user's bank account
class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Successfully deposited ₹${amount}. New balance: ₹${this.balance}.`;
        } else {
            return "Deposit amount must be positive.";
        }
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient balance.";
        } else if (amount <= 0) {
            return "Withdrawal amount must be positive.";
        } else {
            this.balance -= amount;
            return `Successfully withdrew ₹${amount}. New balance: ₹${this.balance}.`;
        }
    }

    checkBalance() {
        return `Current balance: ₹${this.balance}.`;
    }
}

// Class to represent the ATM machine
class ATM {
    constructor(account) {
        this.account = account;
    }

    start() {
        while (true) {
            let choice = prompt("Welcome to the ATM!\n1. Deposit\n2. Withdraw\n3. Check Balance\n4. Exit\nEnter your choice:");

            switch (choice) {
                case '1':
                    let depositAmount = parseFloat(prompt("Enter amount to deposit:"));
                    alert(this.account.deposit(depositAmount));
                    break;
                case '2':
                    let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
                    alert(this.account.withdraw(withdrawAmount));
                    break;
                case '3':
                    alert(this.account.checkBalance());
                    break;
                case '4':
                    alert("Thank you for using the ATM. Goodbye!");
                    return;
                default:
                    alert("Invalid choice. Please try again.");
            }
        }
    }
}

// Create a new bank account with an initial balance
let myAccount = new BankAccount(1000); // Initial balance of ₹1000

// Create a new ATM instance with the bank account
let myATM = new ATM(myAccount);

// Start the ATM interface
myATM.start();
