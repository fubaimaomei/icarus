module.exports = (ctx, locals) => {
    const { layout, content } = ctx.page;
    const { get_config,has_widget } = ctx;
    if (has_widget('toc') !== true || (layout !== 'page' && layout !== 'post')) {
        return null;
    }
    return Object.assign(locals, { content });
}