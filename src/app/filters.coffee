angular.module('Filters', [])

.filter 'uppercase', ->
    (text) ->
        text.toUpperCase()

.filter 'lowercase', ->
    (text) ->
        text.toLowerCase()