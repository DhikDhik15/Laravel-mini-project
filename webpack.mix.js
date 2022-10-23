const mix = require('laravel-mix');
mix.js('resources/js/app.js', 'public/js')
        .react()
        .webpackConfig(require('./webpack.config'))
        .sass('resources/sass/app.scss', 'public/css')
        .sourceMaps();

    if (mix.inProduction()) {
        mix.version();
    }

