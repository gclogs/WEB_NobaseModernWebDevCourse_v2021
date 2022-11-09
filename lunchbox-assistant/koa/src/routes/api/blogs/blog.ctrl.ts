import Blog from '../../../../schema/blogSchema'

const BlogCtrl = {
  async create(ctx) {
    const {
      title,
      author,
      body,
      comments,
      date,
      hidden,
      meta
    } = ctx.request.body;

    const blog = new Blog({
      title,
      author,
      body,
      comments,
      date,
      hidden,
      meta
    })

    try {
      await blog.save();
    } catch (e) {
      return ctx.throw(500, e);
    }
  },

  async list(ctx) {
    let blogs;
    try {
      blogs = await Blog.find().exec();
    } catch (e) {
      return ctx.throw(500, e);
    }
    
    ctx.body = blogs;
  },

  async remove(ctx) {
    const { id } = ctx.params;

    try {
      await Blog.findByIdAndDelete(id).exec();
    } catch (e) {
      if (e.name === 'CastError') {
        ctx.status = 400;
        return;
      }
    }

    ctx.status = 204;
  }
}

export default BlogCtrl;