/**
 * knowledge page generator
 */
module.exports = function (hexo) {
  hexo.extend.generator.register('knowledge', function (locals) {
    return {
      path: 'knowledge/',
      layout: ['knowledge'],
      data: Object.assign({}, locals, {
        __knowledge: true
      })
    }
  });
}