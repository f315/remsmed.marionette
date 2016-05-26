define([
    'jquery',
    'underscore',
    'backbone'
],function($, _, Backbone){
    'use strict';

    var WPatientInfoModel = Backbone.Model.extend({
        defaults: {
            idWidjet: 'Box_PatientInfo',
            classWidjet: 'Box_PatientInfo wblock500',
            username: 'Кузнецов Иван',
            userpic: 'assets/images/icons/avatar_01.jpg'
        }
    });

    return WPatientInfoModel;
})