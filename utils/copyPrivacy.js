import fs from 'fs';

fs.copyFile(`${__dirname}/../privacy.txt`, `${__dirname}/../build/privacy.txt`, (err) => {
  if (err) {
    throw err;
  }
  console.log('privacy.txt was copied to the build');
});
