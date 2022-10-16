module.exports = {
  apps: [{
    script: 'npm start'
  }],

  deploy: {
    production: {
      key: 'key.pem',
      user: 'ubuntu',
      host: '52.11.235.119',
      ref: 'origin/main',
      repo: 'git@github.com:travisluong/my-app.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
