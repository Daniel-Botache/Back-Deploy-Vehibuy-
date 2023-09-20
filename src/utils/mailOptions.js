let mailOptions = (to, subject, html) => {
  return (mailOptions = {
    from: "VehiBuy",
    to: to,
    subject: subject,
    html: html,
    attachments: [
      {
        filename: "facebook.png",
        path: "/opt/render/project/src/ultils/icons/facebook.png",
        cid: "fb",
      },
      {
        filename: "LOGO.png",
        path: "/opt/render/project/src/ultils/icons/LOGO.png",
        cid: "logo",
      },
      {
        filename: "linkedin.png",
        path: "/opt/render/project/src/ultils/icons/linkedin.png",
        cid: "ld",
      },
      {
        filename: "gmail.png",
        path: "/opt/render/project/src/ultils/icons/gmail.png",
        cid: "gmail",
      },
      {
        filename: "wapp.png",
        path: "/opt/render/project/src/ultils/icons/wapp.png",
        cid: "wapp",
      },
    ],
  });
};
module.exports = mailOptions;
