const express = require("express");
const router = express.Router();
const { RtcTokenBuilder, RtcRole } = require("agora-access-token");
const { kAgoraAppCertificate, kAgoraAppId } = require("../konstants/constants");

exports.generateToken = (req, res) => {
  // send unique channel name everytime new meet is created
  let channelName = req.params.channelId;
  console.log(channelName);
  let expirationTimeInSeconds = 7200;

  var role = RtcRole.PUBLISHER;
  var currentTimestamp = Math.floor(Date.now() / 1000);
  var privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
  var role = RtcRole.PUBLISHER;

  var key = RtcTokenBuilder.buildTokenWithUid(
    kAgoraAppId,
    kAgoraAppCertificate,
    channelName,
    0,
    role,
    privilegeExpiredTs
  );

  res.json({ channelName: channelName, token: key });
};
