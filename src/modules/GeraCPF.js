import TratamentoCPF from "./CPF.js";

export default class GeraCPF extends TratamentoCPF{
    rand(min= 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max-min) + min));
    };
    geraNovoCPF(){
        this.cpf = this.rand();
        return this.constroiCpf();
    };
}
let cpf1 = new GeraCPF();
console.log(cpf1.geraNovoCPF());
