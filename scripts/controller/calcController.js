//classe contém métodos e atributos, o objeto serve pra representar a classe

class CalcController { 
    constructor(){ // é chamado automaticamente quando há uma instância de classe
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl        = document.querySelector('#data');
        this._timeEl        = document.querySelector('#hora');// O underline no atributo significa que ele é privado
        this._actualDate; //this faz referencia ao objeto que foi instanciado a classe, ou seja o *calculadora*
        this.initialize();
    }

    initialize(){
        this.setDisplayDateTime();

        setInterval(() =>{
            this.displayDate = this.actualDate.toLocaleDateString(this._locale);
            this.displayTime = this.actualDate.toLocaleTimeString(this._locale);
        }, 1000);
    }
    setDisplayDateTime(){
        this.displayDate = this.actualDate.toLocaleDateString(this._locale);
        this.displayTime = this.actualDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }
    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }
    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayCalc(){ // o getter e o setter controla como o atributo é consultado ou modificado
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }
    get actualDate(){
        return new Date();
    }
    set actualDate(value){
        this._actualDate = value;
    }
    
}