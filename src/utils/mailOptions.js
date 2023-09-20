let mailOptions = (to, subject, html) => {
  return (mailOptions = {
    from: "VehiBuy",
    to: to,
    subject: subject,
    html: html,
    attachments: [
      {
        filename: "facebook.png",
        path: "/opt/render/project/src/utils/icons/facebook.png",
        cid: "fb",
      },
      {
        filename: "LOGO.png",
        path: "/opt/render/project/src/utils/icons/LOGO.png",
        cid: "logo",
      },
      {
        filename: "linkedin.png",
        path: "/opt/render/project/src/utils/icons/linkedin.png",
        cid: "ld",
      },
      {
        filename: "gmail.png",
        path: "/opt/render/project/src/utils/icons/gmail.png",
        cid: "gmail",
      },
      {
        filename: "wapp.png",
        path: "/opt/render/project/src/utils/icons/wapp.png",
        cid: "wapp",
      },
    ],
  });
};
module.exports = mailOptions;
