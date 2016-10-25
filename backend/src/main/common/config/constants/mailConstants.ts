
export class MailConstants {

    static getCompleteEmailMessage(message: string, subject: string, url: string) {
        return MailConstants.TEMPLATE.HTML.replace("{{content}}", message).replace("{{header}}", subject).replace("{{url}}", subject);
    }

    static TEMPLATE = {
        EN: {
            SIGN_UP_CONFIRMATION: {
                SUBJECT: "Good news from Nürburgring: Your user account was successfully created",
                MESSAGE: "Hello %s!<br><br>Your user account was successfully created and validated.<br>Your registration is now complete and you can now enjoy all advantages!<br><br>Have fun and take care!<br>Your Nürburgring-Team"
            },
            VOUCHER_CONFIRMATION: {
                SUBJECT: "Your voucher confirmation",
                MESSAGE: "Hello %s!<br><br>Voucher successfully created, voucher id is: %s, voucher pin is: %s.<br><br>Have fun and take care!<br>Your Nürburgring-Team"
            },
            SEASON_CARD_CONFIRMATION: {
                SUBJECT: "Season card confirmation",
                MESSAGE: "Hello %s!<br><br>You are successfully ordered season card (%s).<br><br>Have fun and take care!<br>Your Nürburgring-Team"
            },
            BASIC_CARD_CONFIRMATION: {
                SUBJECT: "Basic card confirmation",
                MESSAGE: "Hello %s!<br><br>You are successfully created basic card.<br><br>Have fun and take care!<br>Your Nürburgring-Team"
            },
            OLD_CARD_CONFIRMATION: {
                SUBJECT: "Old card confirmation",
                MESSAGE: "Hello %s!<br><br>You are successfully assigned old card.<br><br>Have fun and take care!<br>Your Nürburgring-Team"
            },
            VOUCHER_CARD_CONFIRMATION: {
                SUBJECT: "Voucher card confirmation",
                MESSAGE: "Hello %s!<br><br>You are successfully enabled voucher card.<br><br>Have fun and take care!<br>Your Nürburgring-Team"
            },
            CHANGE_PASSWORD_CONFIRMATION: {
                SUBJECT: "Change password confirmation",
                MESSAGE: "Hello %s!<br><br>You are successfully changed your password.<br><br>Have fun and take care!<br>Your Nürburgring-Team"
            },
            SIGN_UP_VALIDATION: {
                SUBJECT: "Your Nürburgring user account: Please confirm your registration",
                MESSAGE: "Hello %s!<br><br>Thanks for registering to Nürburgring.<br>Please confirm your registration by clicking on the <a href='%s'>link</a>, or use this links for your mobile applications: <a href='%s'>iOS</a> - <a href='%s'>Android</a>.<br>Afterwards you will be able to enjoy all advantages.<br><br>Thank you very much. Have fun!<br>Best regards<br>Your Nürburgring-Team"
            },
            CHANGE_EMAIL_VALIDATION: {
                SUBJECT: "Your Nürburgring user account: Please verify your email",
                MESSAGE: "Hello %s!<br><br>Please verify your email by clicking on the <a href='%s'>link</a>, or use this links for your mobile applications: <a href='%s'>iOS</a> - <a href='%s'>Android</a>.<br>Afterwards you will be able to enjoy all advantages.<br><br>Thank you very much. Have fun!<br>Best regards<br>Your Nürburgring-Team"
            },
            RESELLER_CREATE: {
                SUBJECT: "Your Nürburgring user account: Reseller request successfully sent",
                MESSAGE: "Hello %s!<br><br>Thanks for registering to Nürburgring.<br>Reseller request successfully sent.<br>Afterwards you will be able to enjoy all advantages.<br><br>Thank you very much. Have fun!<br>Best regards<br>Your Nürburgring-Team"
            },
            RESET_PASSWORD_IDENTIFICATION: {
                SUBJECT: "Your Nürburgring user account: Please confirm your reset password request",
                MESSAGE: "Hello %s,<br><br>Now you can set up your password by one click on <a href='%s' style='font-style: italic;'>link</a>, or use this links for your mobile applications: <a href='%s'>iOS</a> - <a href='%s'>Android</a>.<br><span style='color: red'>This link will expire for one hour.</span><br><br>Best regards<br>Your Nürburgring-Team"
            },
            RESELLER_PASSWORD_IDENTIFICATION: {
                SUBJECT: "Your Nürburgring reseller account successfully approved",
                MESSAGE: "Hello %s,<br><br>Your Nürburgring reseller account successfully approved, now you can set up your password by one click on <a href='%s' style='font-style: italic;'>link</a>, or use this links for your mobile applications: <a href='%s'>iOS</a> - <a href='%s'>Android</a>.<br><span style='color: red'>This link will expire for one hour.</span><br><br>Best regards<br>Your Nürburgring-Team"
            }
        },
        DE: {
            SIGN_UP_CONFIRMATION: {
                SUBJECT: "Gute Nachrichten vom Nürburgring: Dein Nürburgring-Benutzerkonto wurde erfolgreich angelegt",
                MESSAGE: "Hallo %s!<br><br>Dein Benutzerkonto wurde erfolgreich angelegt und bestätigt.<br>Damit ist Deine Registrierung ist nun abgeschlossen und du kannst alle Vorteile des Benutzerkontos genießen.<br><br>Vielen Spaß am Ring!<br>Dein Nürburgring-Team"
            },
            VOUCHER_CONFIRMATION: {
                SUBJECT: "Ihr Gutschein Bestätigung",
                MESSAGE: "Hallo %s!<br><br>Gutschein erfolgreich erstellt, Gutschein-ID ist: %s, Gutschein Pin ist: %s.<br>Vielen Spaß am Ring!<br><br>Dein Nürburgring-Team"
            },
            SEASON_CARD_CONFIRMATION: {
                SUBJECT: "Saisonkarte Bestätigung",
                MESSAGE: "Hallo %s!<br><br>Sie sind erfolgreich Saison Karte bestellt (%s).<br>Vielen Spaß am Ring!<br><br>Dein Nürburgring-Team"
            },
            BASIC_CARD_CONFIRMATION: {
                SUBJECT: "Basiskarte Bestätigung",
                MESSAGE: "Hallo %s!<br><br>Sie sind erfolgreich Basiskarte erstellt.<br>Vielen Spaß am Ring!<br><br>Dein Nürburgring-Team"
            },
            OLD_CARD_CONFIRMATION: {
                SUBJECT: "Alte Karte Bestätigung",
                MESSAGE: "Hallo %s!<br><br>Sie sind erfolgreich alte Karte zugewiesen.<br>Vielen Spaß am Ring!<br><br>Dein Nürburgring-Team"
            },
            VOUCHER_CARD_CONFIRMATION: {
                SUBJECT: "Gutschein-Karte Bestätigung",
                MESSAGE: "Hallo %s!<br><br>Sie sind erfolgreich Gutschein-Karte aktiviert.<br>Vielen Spaß am Ring!<br><br>Dein Nürburgring-Team"
            },
            CHANGE_PASSWORD_CONFIRMATION: {
                SUBJECT: "Passwort ändern Bestätigung",
                MESSAGE: "Hallo %s!<br><br>Sie Ihr Passwort erfolgreich geändert.<br>Vielen Spaß am Ring!<br><br>Dein Nürburgring-Team"
            },
            SIGN_UP_VALIDATION: {
                SUBJECT: "Dein Nürburgring-Benutzerkonto: Bitte bestätige Deine Anmeldung",
                MESSAGE: "Hallo  %s!<br><br>Vielen Dank für Deine Registrierung beim Nürburgring.<br>Bitte bestätige uns diese, indem du auf den <a href='%s'>Link</a> klickst, oder offne mit <a href='%s'>iOS</a> und <a href='%s'>Android</a> deine mobile app.<br>Anschließend kannst du alle Vorteile genießen.<br><br>Vielen Dank und viel Spaß!<br>Beste Grüße<br>Dein Nürburgring-Team"
            },
            CHANGE_EMAIL_VALIDATION: {
                SUBJECT: "Ihr Nürburgring Benutzerkonto : Überprüfen Sie bitte Ihre E-Mail",
                MESSAGE: "Hallo  %s!<br><br>Bitte bestätige uns diese, indem du auf den <a href='%s'>Link</a> klickst, oder offne mit <a href='%s'>iOS</a> und <a href='%s'>Android</a> deine mobile app.<br><br>Vielen Dank und viel Spaß!<br>Beste Grüße<br>Dein Nürburgring-Team"
            },
            RESELLER_CREATE: {
                SUBJECT: "Dein Nürburgring-Benutzerkonto: Reseller Anfrage erfolgreich gesendet",
                MESSAGE: "Hallo  %s!<br><br>Vielen Dank für Deine Registrierung beim Nürburgring.<br>Reseller Anfrage erfolgreich gesendet.<br>Anschließend kannst du alle Vorteile genießen.<br>Vielen Dank und viel Spaß!<br><br>Beste Grüße<br>Dein Nürburgring-Team"
            },
            RESET_PASSWORD_IDENTIFICATION: {
                SUBJECT: "Your Nürburgring user account: Please confirm your reset password request",
                MESSAGE: "Hello %s,<br><br>Now you can set up your password by one click on <a href='%s' style='font-style: italic;'>link</a>, or use this links for your mobile applications: <a href='%s'>iOS</a> - <a href='%s'>Android</a>.<br><span style='color: red'>This link will expire for one hour.</span><br><br>Best regards<br>Your Nürburgring-Team"
            },
            RESELLER_PASSWORD_IDENTIFICATION: {
                SUBJECT: "Your Nürburgring reseller account successfully approved",
                MESSAGE: "Hello %s,<br><br>Your Nürburgring reseller account successfully approved, now you can set up your password by one click on <a href='%s' style='font-style: italic;'>link</a>, or use this links for your mobile applications: <a href='%s'>iOS</a> - <a href='%s'>Android</a>.<br><span style='color: red'>This link will expire for one hour.</span><br><br>Best regards<br>Your Nürburgring-Team"
            }
        },
        HTML: `
            <table width="100%" bgcolor="#f6f8f1" border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>
                        <table style="width: 100%; max-width: 600px;" align="center" cellpadding="10" cellspacing="0" border="0">
                            <tr style="background: red;color: black;">
                                <td width="80">
                                    <img width="80" height="50" src="http://www.nuerburgring.de/fileadmin/templates_2010/main/imgs/header_brand.png">
                                </td>
                                <td>
                                    {{header}}
                                </td>
                                <td width="80">
                                    <img width="80" height="50" src="http://www.nuerburgring.de/fileadmin/templates_2010/main/imgs/header_brand.png">
                                </td>
                            </tr>
                            
                            <tr style="background: black;color: white;">
                                <td></td>
                                <td>
									<div style="min-height:200px">
										{{content}}
									</div>
                                </td>
                                <td></td>
                            </tr>
							
                            <tr style="background: red;color: black;">
                                <td></td><td></td><td></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        `
    };
}