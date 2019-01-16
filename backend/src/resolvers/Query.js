const fetch = require('node-fetch');
const { forwardTo } = require('prisma-binding');

const baseURL = `https://api.themoviedb.org/3/movie`;

const Query = {
    nowPlaying(parent, args, ctx, info) {
        return fetch(`${baseURL}/now_playing?api_key=${process.env.API_KEY}&region=US`)
            .then(res => res.json());
    },
    popular(parent, args, ctx, info) {
        return fetch(`${baseURL}/popular?api_key=${process.env.API_KEY}&region=US`)
            .then(res => res.json());
    },
    singleMovie(parent, args, ctx, info) {
        return fetch(`${baseURL}/${args.id}?api_key=${process.env.API_KEY}&append_to_response=credits,videos,images,reviews`)
            .then(res => res.json());
    },
    searchMovie(parent, args, ctx, info) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${args.search}&region=US`)
            .then(res => res.json());
    },
    me(parent, args, ctx, info) {
        if(!ctx.request.userId) {
            return null;
        }
        return ctx.db.query.user({
            where: { id: ctx.request.userId }
        }, info);
    },
    async likeListItem(parent, args, ctx, info) {
        if(!ctx.request.userId) {
            throw new Error('Log in to continue');
        }
        const likeListItem = await ctx.db.query.likeListItem({
            where: { id: args.id }
        }, info);
        const correctUser = likeListItem.user.id === ctx.request.userId;
        if(!correctUser) {
            throw new Error('Log in to continue');
        }
        return likeListItem;
    },
    async likeListItems(parent, args, ctx, info) {
        const userId = ctx.request.userId;
        if(!userId) {
            throw new Error('Log in to continue');
        }
        return ctx.db.query.likeListItems({
            where: { user: { id: userId } }
        }, info);
    },
    // likeListItems: forwardTo('db')
};

module.exports = Query;
