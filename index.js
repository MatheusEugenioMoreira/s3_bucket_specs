const readlineSync = require("readline-sync");
const { info, print, warn, danger } = require("./utils/console_specs");
const { getTotalSizeFolder } = require("./scripts/total_size_folder");
const { getTotalSize } = require("./scripts/total_size");
const { getTotalObjs } = require("./scripts/total_objects_all");
const { getTotalNumObjs } = require("./scripts/total_objects_inside_folder");

var awsCliMsg = null;
var userAnswer = null;
var bucketName = null;
var s3Source = null;

exports.start = async () => {
  try {
    console.log("\n");
    info(
      "Para prosseguir é necessário que você já tenha configurado o AWS-CLI em seu computador, caso tenha configurado, digite 'ok', se não acesse este link: https://docs.aws.amazon.com/cli/latest/reference/configure/ que contem o tutorial para configurar em seu computador."
    );

    awsCliMsg = readlineSync.question() || "";

    if (awsCliMsg === "ok" || "OK" || "Ok" || "Y" || "y" || "O" || "o") {
      print("---------------");
      console.log(" 1: Tamanho Total em GB, de um Bucket");

      console.log(
        " 2: Tamanho Total em GB, de uma pasta especifica dentro de um Bucket"
      );

      console.log(" 3: Total de arquivos dentro de um Bucket");

      console.log(
        " 4: Total de arquivos de uma pasta especifica dentro de um Bucket"
      );

      print("---------------");

      warn("Digite o numero do processo que deseja realizar:");

      userAnswer = readlineSync.question() || "";
    } else {
      danger("Configure e execute o projeto novamente! ");
    }

    if (userAnswer === "1") {
      warn("Qual o nome do Bucket?");
      bucketName = readlineSync.question() || "";
      getTotalSize(bucketName);
    } else if (userAnswer === "2") {
      warn(
        "Informe o key do S3 que deseja verificar (Ex: s3://nome_bucket/nome_pasta/"
      );
      s3Source = readlineSync.question() || "";
      getTotalSizeFolder(s3Source);
    } else if (userAnswer === "3") {
      warn("Qual o nome do Bucket?");
      bucketName = readlineSync.question() || "";
      getTotalObjs(bucketName);
    } else if (userAnswer === "4") {
      warn(
        "Informe o key do S3 que deseja verificar (Ex: s3://nome_bucket/nome_pasta/"
      );
      s3Source = readlineSync.question() || "";
      getTotalNumObjs(s3Source);
    } else {
      danger("Numero invalido, envie um entre 1 e 4!");
    }
  } catch (err) {
    danger(`Erro: ${err}`);
  }
};

this.start();
