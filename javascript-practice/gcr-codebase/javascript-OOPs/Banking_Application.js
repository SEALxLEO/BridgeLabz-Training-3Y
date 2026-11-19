class BankAccount {
  #balance;

  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Deposit amount must be positive.");
    this.#balance += amount;
    console.log(`Deposited Rs. ${amount}. Balance: Rs. ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error("Withdrawal amount must be positive.");
    if (amount > this.#balance) {
      throw new Error(`Insufficient balance (Available: Rs. ${this.#balance}).`);
    }
    this.#balance -= amount;
    console.log(`Withdrew Rs. ${amount}. Balance: Rs. ${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Devang", 5000);

// Valid transactions
try {
  account.deposit(2500);
  account.withdraw(3000);
} catch (error) {
  console.error("Error:", error.message);
}

// Invalid withdrawal
try {
  account.withdraw(10000);
} catch (error) {
  console.error("Error:", error.message);
}

console.log("Final Balance:", account.getBalance());
