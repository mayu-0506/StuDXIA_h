定数 express = require("express");
bodyParser は、次のコードで定義されます。
定数 nodemailer = require("nodemailer");

express() は、定数です。
ポート = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.post("/send", async(req, res) => {
    const { 名前、メールアドレス、メッセージ } = req.body;

    const トランスポーター = nodemailer.createTransport({
        サービス: "gmail",
        認証: {
            user: "your-email@gmail.com", // 送信元メールアドレス
            pass: "your-password" // パスワード（環境変数で管理推奨）
        }
    });

    const メールオプション = {
        差出人: メール、
        宛先: "your-email@gmail.com",
        件名: `お問い合わせ: ${name}`,
        テキスト: メッセージ
    };

    試す {
        transporter.sendMail(mailOptions) を待機します。
        res.json({ 成功: true, メッセージ: "メール送信成功" });
    } キャッチ（エラー）{
        コンソールエラー(エラー);
        res.json({ 成功: false, メッセージ: "メール失敗送信" });
    }
});

app.listen(PORT, () => {
    console.log(`サーバーはhttp://localhost:${PORT}で実行されています`);
