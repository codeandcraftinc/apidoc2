var trim = require('../utils/trim');
var versionsUtil = require('../utils/versions');

var ParameterError = require('../errors/parameter_error');

function parse(content) {
    content = trim(content);

    if (content.length === 0)
        return null;

    if ( ! versionsUtil.valid(content))
        throw new ParameterError('Version format not valid.',
                                 'apiVersion', '@apiVersion major.minor.patch || @apiVersion YYYY-MM-DD', '@apiVersion 1.2.3 || @apiVersion 2018-01-01');

    return {
        version: content
    };
}

/**
 * Exports
 */
module.exports = {
    parse     : parse,
    path      : 'local',
    method    : 'insert',
    extendRoot: true
};
