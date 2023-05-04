#! /bin/sh

cp -r src/images build/
npx @nitra/minify-image --src=build/images --write
