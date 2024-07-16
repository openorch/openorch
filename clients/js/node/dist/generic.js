'use strict';

var util = require('./util2.js');
require('axios');

class GenericService {
    constructor(options) {
        this.options = options;
    }
    call(endpoint, request) {
        return util.call(this.options.address, this.options.apiKey, endpoint, request);
    }
    create(table, object) {
        return util.__awaiter(this, void 0, void 0, function* () {
            const request = {
                table: table,
                object: object,
            };
            return this.call("/generic/create", request);
        });
    }
    find(table, conditions) {
        return util.__awaiter(this, void 0, void 0, function* () {
            const request = {
                table: table,
                conditions: conditions,
            };
            return this.call("/generic/find", request);
        });
    }
    upsert(table, object) {
        return util.__awaiter(this, void 0, void 0, function* () {
            const request = {
                table: table,
                object: object,
            };
            return this.call("/generic/upsert", request);
        });
    }
    update(table, conditions, object) {
        return util.__awaiter(this, void 0, void 0, function* () {
            const request = {
                table: table,
                conditions: conditions,
                object: object,
            };
            return this.call("/generic/update", request);
        });
    }
    delete(table, conditions) {
        return util.__awaiter(this, void 0, void 0, function* () {
            const request = {
                table: table,
                conditions: conditions,
            };
            return this.call("/generic/delete", request);
        });
    }
}

exports.GenericService = GenericService;
