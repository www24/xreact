module.exports = {
    apps : [{
        name: 'xreact',
        script: 'npm',
        args: "start",
        env: {
            PORT: 8080,
            NODE_ENV: "production",
        }
    }]
};
