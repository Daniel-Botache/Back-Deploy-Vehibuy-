let mailOptions = (to, subject, html) => {
  return (mailOptions = {
    from: "VehiBuy",
    to: to,
    subject: subject,
    html: html,
    attachments: [
      {
        filename: "facebook.png",
        path: "./icons/facebook.png",
        cid: "fb",
      },
      {
        filename: "LOGO.png",
        path: "./icons/LOGO.png",
        cid: "logo",
      },
      {
        filename: "linkedin.png",
        path: "./icons/linkedin.png",
        cid: "ld",
      },
      {
        filename: "gmail.png",
        path: "./icons/gmail.png",
        cid: "gmail",
      },
      {
        filename: "wapp.png",
        path: "./icons/wapp.png",
        cid: "wapp",
      },
    ],
  });
};
module.exports = mailOptions;
