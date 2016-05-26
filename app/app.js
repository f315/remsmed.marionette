'use strict';

requirejs.config({
    baseUrl: 'app',
    paths: {
        'jquery': '../assets/js/jquery-1.8.3',
        'underscore': 'underscore-min',
        'backbone': 'backbone-min',
        'toJson': 'json2',
        'text': 'text'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }

    }
});

require([
    "backbone",
    "components/layout/header.view"
], function (Backbone, HeaderView) {

});

require([
    "backbone",
    "components/layout/topnav.view"
], function (Backbone, TopnavView) {

});

require([
    "backbone",
    "components/widgets/wblock.view"
], function (Backbone, WblockView) {
});

require([
    "backbone",
    "components/widgets/patientInfo/wPatientInfo.view"
], function (Backbone, WPatientInfoView) {
});

require([
    "backbone",
    "components/widgets/patientLastMeasurements/wPatientLastMeasurements.view"
], function (Backbone, WPatientLastMeasurementsView) {
});


