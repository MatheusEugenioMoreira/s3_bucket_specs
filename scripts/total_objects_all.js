const { print, warn, info, danger } = require("../utils/console_specs");
const { exec } = require("child_process");

exports.getTotalObjs = (bucket) => {
  console.log("");
  console.log(`Bucket: ${bucket}`);
  console.log("");
  info(
    "Este processo pode demorar um tempo significativo, variando de acordo com o numero de arquivos encontrado..."
  );
  const command = `aws s3 ls s3://${bucket}/ --recursive --summarize | grep "Total Objects:"`;

  exec(`${command}`, (error, stdout, stderr) => {
    if (error) {
      danger(`ocorreu um erro: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
};
