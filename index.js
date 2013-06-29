#!/usr/bin/env node

module.exports = execute;

function execute(a, b) {
    console.log('Passed parameters', a, b);
}
execute.help = 'Just some optional help';
