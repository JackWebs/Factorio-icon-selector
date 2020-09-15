// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin("html")
      .tap(args => {
        args[0].title = "Factorio Icon Select - Click & paste icons directly into Factorio";
        args[0].meta = {description: "A useful tool for all Factorio fans. Insert item icons into in-game labels from your browser with a simple click & paste."};

        return args;
      })
  }
}
