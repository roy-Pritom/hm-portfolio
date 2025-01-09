module.exports = {
    apps: [
      {
        name: "dream-school-landing-page",
        cwd: "/root/hm-portfolio",
        script: "node_modules/next/dist/bin/next",
        args: "start",
        instances: "1",
        watch: false,
        autorestart: true,
        env: {
          NODE_ENV: "production",
          PORT: 8000
        },
      },
    ],
  };
