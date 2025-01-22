class Proposal {
    constructor(key, propuesta, tiendaId, grupoLocalizacionDesc, esEcommerce) {
        this.key = key;
        this.propuesta = propuesta;
        this.tiendaId = tiendaId;
        this.grupoLocalizacionDesc = grupoLocalizacionDesc;
        this.esEcommerce = esEcommerce;
    }

    matchesCriteria(cycles, ecommerceFlag) {
        return (
            cycles.includes(this.grupoLocalizacionDesc) &&
            this.esEcommerce === ecommerceFlag
        );
    }
}

module.exports = Proposal;
