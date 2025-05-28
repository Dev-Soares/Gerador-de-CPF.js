import './assets/css/style.css';
import GeraCPF from './modules/GeraCPF'; 

const cpfGerado = document.querySelector('.cpf-final');
const btnGerar = document.querySelector('.btn-gerar')

btnGerar.addEventListener('click', ()=>{
    let gerador = new GeraCPF();
    cpfGerado.innerHTML = gerador.geraNovoCPF();
})