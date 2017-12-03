/**
 * @namespace app
 */
module.exports = function (db) {

    return {
          login: require('./login')(db),
          todo: require('./todo')(db),
          setting: require('./setting')(db)
    };
};
