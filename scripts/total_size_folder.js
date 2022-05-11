const { print, warn, info, danger } = require("../utils/console_specs");
const { exec } = require("child_process");

exports.getTotalSizeFolder = (source) => {
  console.log("");
  console.log(`Source S3: ${source}`);
  console.log("");

  info(
    "Este processo pode demorar um tempo significativo, variando de acordo com o numero de arquivos encontrado..."
  );

  const command = `aws s3 ls ${source} --recursive --summarize | grep "Total Size:"`;

  exec(`${command}`, (error, stdout, stderr) => {
    if (error) {
      danger(`ocorreu um erro: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    var teste = stdout.split(":");
    var final = (teste[1] * 1.0) / 1024 / 1024 / 1024;
    console.log(`${final.toFixed(3)} GB`);
  });
};
