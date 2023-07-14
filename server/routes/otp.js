const express = require("express");
const router = express.Router();
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mohamedkaif100604@gmail.com", 
    pass: "*",
  },
});

router.post("/generate", async (req, res) => {
  const { email } = req.body;

  
  const otp = otpGenerator.generate(6, {
    upperCase: false,
    specialChars: false,
  });

  
  const mailOptions = {
    from: "mohamedkaif100604@gmail.com", 
    to: email,
    subject: "OTP Verification",
    text: `Your OTP is: ${otp}`,
  };

  try {
    
    await transporter.sendMail(mailOptions);
    console.log("mail sent successfully")
    console.log(otp)
    console.log(error)

    
    res.json({ otp });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send OTP" });
  }
});

router.post("/verify-otp", (req, res) => {
  const { otp } = req.body;
  console.log(otp);
  if (otp === "123456") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

module.exports = router;