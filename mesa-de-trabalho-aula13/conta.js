let conta = {
    titular: "cliente",
    numero: 0,
    tipo: "Conta Corrente",
    saldo: 0.00,
}

function Conta(cliente, numeroConta, tipoConta, saldoConta) {
    this.titular = cliente;
    this.numero = numeroConta;
    this.tipo = tipoConta;
    this.saldo = saldoConta;
}

let conta1 = new Conta("Abigael Natte", 5486273622, "Conta Corrente", 27771.00);
let conta2 = new Conta("Ramon Connell", 1183971869, "Conta Poupança", 8675.00);
let conta3 = new Conta("Jarret Lafuente", 9582018689, "Conta Poupança", 273.63);
let conta4 = new Conta("Ansel Ardley", 1761924656, "Conta Poupança", 32.415);
let conta5 = new Conta("Jacki Shurmer", 7401971607, "Conta Poupança", 187.89);
let conta6 = new Conta("Jobi Mawtus", 630841470, "Conta Corrente", 28776.00);
let conta7 = new Conta("Thomasin Latour", 4223508636, "Conta Corrente", 2177.00);
let conta8 = new Conta("Lonnie Verheijden", 185979521, "Conta Poupança", 25994.00);
let conta9 = new Conta("Alonso Wannan", 3151956165, "Conta Corrente", 7601.00);
let conta10 = new Conta("Bendite Hugget", 213815881, "Conta Poupança", 33196.00);

let usuarios = [conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9, conta10];


let banco = {
    clientes: usuarios,
    consultaCliente: function consultar(cliente) {
        for (i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titular == cliente) {
                return this.clientes[i];
            } else {
                return "este cliente não existe"
            }

        }
    },
    deposito: function depositar(cliente, valor) {
        for (i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titular == cliente) {
                this.clientes.saldo = this.clientes[i].saldo + valor;
                return "Depósito realizado com sucesso, seu novo saldo é: " + this.clientes.saldo
            }
        }
    },
    saque: function sacar(cliente, valor) {
        for (i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titular == cliente && this.clientes[i].saldo > valor) {
                this.clientes.saldo = this.clientes[i].saldo - valor;
                return "Extração feita com sucesso, seu novo saldo é: " + this.clientes.saldo
            }

        }
        return "Fundos insuficientes";
}
}
console.log(banco.deposito("Bendite Hugget", 1000.00))
console.log(banco.saque("Bendite Hugget", 33000.00))











// console.log(this.clientes.titular);
// console.log(banco.clientes.indexOf(conta1.titular));
// return this.clientes = {titular: cliente}
// console.log(this.clientes[0].titular == "Abigael Natte")
// console.log(banco.clientes[1].titular);