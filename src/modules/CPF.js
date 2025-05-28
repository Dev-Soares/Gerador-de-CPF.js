export default class TratamentoCPF {
    static criaDigito(cpfOrganizado){
            let multiplicador = cpfOrganizado.length + 1;
            const digitosMult = cpfOrganizado.map((digito) => { //ok
                digito = Number(digito) * multiplicador;
                multiplicador -= 1;
                return digito;
            });
            const somaTotal = digitosMult.reduce((valor, acumulador) => { //ok
                return acumulador += valor;
            }, 0);
            const validaDigito = (somaTotal) => 11 - (somaTotal % 11);
            return String(validaDigito(somaTotal) < 10? validaDigito(somaTotal) : 0);
    };
    verificadorSequencia () {
        return this.cpf === this.cpf.charAt(0).repeat(this.cpf.length);
    }
    static organizadorCpf(cpf){
        return(
            cpf.slice(0,3) + '.' +
            cpf.slice(3,6) + '.' +
            cpf.slice(6,9) + '-' +
            cpf.slice(9,11)
        );
    }
    constroiCpf(){
        if (typeof this.cpf !== 'string') return false
        if (this.verificadorSequencia()) return false
        const cpfOrg = [...this.cpf];
        cpfOrg.push(TratamentoCPF.criaDigito(cpfOrg));
        cpfOrg.push(TratamentoCPF.criaDigito([...cpfOrg]));
        let cpfFinal = TratamentoCPF.organizadorCpf(cpfOrg.join(''));
        return cpfFinal;
    }
};
