import React from 'react';
import diagnostico from './anemia.js'
class Model {
    constructor() {
        this.notify = null;
        this.info = {
            name: '',
            age: '',
            weight: '',
            pesoAdecuado: '',
            altura: '',
            prematuro: '',
            ageType: 'semanas',
            hemoglobina: ''
        }
        this.diagnost = null;

    }
    subscribe(render) {
        this.notify = render;
    }
    diag() {
        this.diagnost = diagnostico(this.info.prematuro, this.info.age, this.info.ageType, this.info.hemoglobina, this.info.weight, this.info.pesoAadecuado, this.info.altura);
    }
    getInfo() {
        this.diag();
        this.notify();
    }
}

export default Model;