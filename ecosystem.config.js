module.exports = {
  apps : [{
    script: 'app.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'mon_macbook',
      host : '54.38.191.163',
      ref  : 'origin/main',
      path : 'git@github.com:LeCastorJunior/Pm2TestStratDeployement.git',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
