/**
 * algorithm page generator
 */
module.exports = function (hexo) {
  hexo.extend.generator.register('algorithm', function (locals) {
    return {
      path: 'algorithm/',
      layout: ['algorithm'],
      data: Object.assign({}, locals, {
        __algorithm: true
      })
    }
  });
}