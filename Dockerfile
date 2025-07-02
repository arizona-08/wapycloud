FROM node:23-alpine AS base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
EXPOSE 3000

FROM base AS builder
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM base AS production
ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev

USER nextjs

CMD ["npm", "start"]

FROM base AS dev
ENV NODE_ENV=development
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
