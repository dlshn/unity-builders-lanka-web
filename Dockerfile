# ---------- Stage 1: Build the React app ----------
FROM node:20-alpine AS build

WORKDIR /app

# package.json / yarn.lock copy karala dependencies cache wenna help karanawa
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Baaki source code copy karanawa
COPY . .

# Production build eka hadanawa (CRA -> build/ folder eka)
RUN yarn build

# ---------- Stage 2: Serve with nginx ----------
FROM nginx:alpine

# Build stage eken hadapu static files nginx eke default folder ekata copy karanawa
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
