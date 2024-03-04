const BlogState = require('../usestates/blogState')

class BlogController{
    async blogPost(req, res){
        try{
            const { post, authorId, tags } = req.body
            const postedBlog = await BlogState.postBlog(post, authorId, tags)
            res.status(201).send(postedBlog)
        }
        catch(error){
            res.status(500).send(`Failed to post blog ${error}`)
        }
    }
}

module.exports = new BlogController()