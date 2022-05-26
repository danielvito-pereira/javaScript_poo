class ContaBancaria {
  constructor (agencia, numero, tipo, saldo) {
    this.agencia =agencia;
    this.numero = numero;
    this.tipo = tipo
    this.saldo= saldo;
  }


  get saldo() {
    return this.saldo;
  }

  set saldo(val) {
    this.saldo = val.toUpperCase();
  }

  sacar() {

  }
  
  
  
  depositar() {

  }
}

class ContaCorrente extends ContaBancaria {
  constructor(cartaoCredito) {
    this.cartaoCredito= cartaoCredito;
  }

  get cartaoCredito() {
    return this.cartaoCredito;
  }

  set cartaoCredito(val) {
    this.cartaoCredito = val.toUpperCase;
  }
}