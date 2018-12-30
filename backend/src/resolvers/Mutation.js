const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutations = {
    async signup(parent, args, ctx, info) {
        args.email = args.email.toLowerCase();
        const password = await bcrypt.hash(args.password, 10);
        const user = await ctx.db.mutation.createUser({
            data: {
                ...args,
                password,
            }
        }, info);
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365
        });
        return user;
    },
    async signin(parent, { email, password }, ctx, info) {
        const user = await ctx.db.query.user({ where: { email } });
        if (!user) {
            throw new Error(`No user found for email ${email}`);
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new Error(`Invalid Password`);
        }
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365
        });
        return user;
    },
    signout(parent, args, ctx, info) {
        ctx.response.clearCookie('token');
        return { message: 'Logged Out' };
    },
    async addToLikes(parent, args, ctx, info) {
        const userId = ctx.request.userId;
        if (!userId) {
            throw new Error('You must be signed in');
        }
        const [existingLikeMovie] = await ctx.db.query.likeListItems({
            where: {
                user: { id: userId },
                like: { like: args.like }
            }
        });
        if (existingLikeMovie) {
            console.log('This is already in the like list');
        }
        return ctx.db.mutation.createLikeListItem({
            data: {
                user: {
                    connect: { id: userId }
                },
                ...args
            }
        }, info);
    },
    async deleteLikeListItem(parent, args, ctx, info) {
        const where = { id: args.id };
        return ctx.db.mutation.deleteLikeListItem({ where }, info);
    }
};

module.exports = Mutations;
