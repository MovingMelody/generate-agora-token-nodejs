const kAgoraAppId =
  process.env.AGORA_APP_ID ?? "c9605d36aaf34ccd857ae5c4869cc009";
const kAgoraAppCertificate =
  process.env.AGORA_APP_CERTIFICATE ?? "f807523ad8d6453fa2a1a8cec56358a7";

module.exports = { kAgoraAppCertificate, kAgoraAppId };
