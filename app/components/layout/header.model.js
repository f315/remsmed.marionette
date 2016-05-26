define([
    'jquery',
    'underscore',
    'backbone'
],function($, _, Backbone){
    'use strict';

    var HeaderModel = Backbone.Model.extend({
        defaults: {
            date: '05.04.2016',
            time: '12:06 +03:00',
            username: 'Кузнецов Иван',
            role: 'Пациент'
        }
    });

    return HeaderModel;
})