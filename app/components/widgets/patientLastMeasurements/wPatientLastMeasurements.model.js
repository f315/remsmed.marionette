define([
    'jquery',
    'underscore',
    'backbone'
],function($, _, Backbone){
    'use strict';

    var WPatientLastMeasurementsModel = Backbone.Model.extend({
        defaults: {
            idWidjet: 'Box_PatientLastMeasurements',
            classWidjet: 'Box_PatientLastMeasurements wblock500',
            measurements: {
                'Артериальное давление': '120/80 мм рт.ст.',
                'Калий': '3,5 ммоль/л',
                'Пульс': '70 уд/мин'
            }
        }
    });

    return WPatientLastMeasurementsModel;
})