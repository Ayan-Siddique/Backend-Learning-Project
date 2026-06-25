import connectDb from "./src/configs/db.js";

import app from "./src/app.js";
import config from "./src/configs/env.js";

connectDb()
  .then(() => {
    app.listen(config.PORT, () => {
      console.log(`Server is running on port ${config.PORT}`);
    });
  })
