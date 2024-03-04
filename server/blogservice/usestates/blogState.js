const Blog = require('../models/blogSchema')

class BlogState{
    async postBlog(post, authorId, tags){
        try{
            const blog = new Blog({ post, authorId, tags})
            const newBlog = await blog.save()
            return newBlog
        }
        catch(error){
            throw new Error(`Failed to create blog ${error}`)
        }
    }
}

module.exports = new BlogState()