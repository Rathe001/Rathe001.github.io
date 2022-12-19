import fs from 'fs';

fs.copyFile(`${__dirname}/../CNAME`, `${__dirname}/../build/CNAME`, (err) => {
  if (err) {
    throw err;
  }
  console.log('CNAME was copied to the build');
});
