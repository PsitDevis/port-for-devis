module.exports = {
  apps: [
    {
      name: 'API-PORT',
      script: 'index.js',
      ignore_watch: ['node_modules'],
      watch: ['index.js'],
      env: {
        NODE_ENV: 'development',
        PORT: 4000,
        DB_STRING_CONNECTION:
          'mongodb+srv://victor:HJSpdVFuXVYwqLgT@filhos@cluster0-2ysrh.mongodb.net/test?retryWrites=true&w=majority',
        DB_NAME: 'portfolio'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000
      }
    }
  ]
};
