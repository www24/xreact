module.exports = {
    apps : [{
        cwd: '/home/smart/git/xreact/',
        name: 'xreact',
        script: 'npm',
        args: "start",
        env: {
            PORT: 8080,
            NODE_ENV: "production",
        }
    }]
};
