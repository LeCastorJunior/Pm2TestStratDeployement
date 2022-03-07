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
      key : '/Users/mon_macbook/.ssh/id_rsa',
      user : 'lecastor',
      host : '54.38.191.163',
      ssh_options: 'ForwardAgent=yes',
      ref  : 'origin/main',
      repo : 'git@github.com:LeCastorJunior/Pm2TestStratDeployement.git',
	path : '/home/lecastor/leCastor/pm2Test',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
