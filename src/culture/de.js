﻿(function (translator) {
	translator.translations["de"] = {
		// javascript alerts or messages
		"testneteditionactivated": "TESTNET AKTIVIERT",
		"paperlabelbitcoinaddress": "$Pac-Adresse:",
		"paperlabelprivatekey": "Privater Schl&uuml;ssel:",
		"paperlabelencryptedkey": "Verschl&uuml;sselter privater Schl&uuml;ssel (Passwort ben&ouml;tigt)",
		"bulkgeneratingaddresses": "Adressen erstellen... ",
		"brainalertpassphrasetooshort": "Die eingegebene Passphrase ist zu kurz.\n\n",
		"brainalertpassphrasewarning": "Hinweis: Eine längere Passphrase schützt besser vor Brute-Force-Attacken, bei denen auf gut Glück Passphrasen probiert werden.",
		"brainalertpassphrasedoesnotmatch": "Die beiden Passphrasen stimmen nicht überein.",
		"detailalertnotvalidprivatekey": "Der eingegebene Text ist kein gültiger privater Schlüssel.",
		"detailconfirmsha256": "Der eingegebene Text ist kein gültiger privater Schlüssel!\n\nMöchtest du den eingegebenen Text als Passphrase verwenden, um mithilfe dessen SHA256-Hash einen privaten Schlüssel zu erstellen?\n\nHinweis: Eine längere Passphrase sch&uuml;tzt besser vor Brute-Force-Attacken, bei denen auf gut Glück Passphrasen probiert werden.",
		"bip38alertincorrectpassphrase": "Falsches Passwort",
		"bip38alertpassphraserequired": "Bitte Passwort eingeben.",
		"vanityinvalidinputcouldnotcombinekeys": "Unzulässige Eingaben. Die Schlüssel konnten nicht kombiniert werden.",
		"vanityalertinvalidinputpublickeysmatch": "Unzulässige Eingaben. Die eingegebenen öffentlichen Schlüssel stimmen überein. Bitte gib zwei unterschiedliche Schlüssel ein.",
		"vanityalertinvalidinputcannotmultiple": "Unzulässige Eingaben. Zwei öffentliche Schlüssel können nicht miteinander multipliziert werden. Wähle \"Addieren\" aus, um aus zwei öffentlichen Schlüsseln eine $Pac-Adresse zu erstellen.",
		"vanityprivatekeyonlyavailable": "Nur verfügbar, wenn zwei private Schlüssel kombiniert werden.",
		"vanityalertinvalidinputprivatekeysmatch": "Unzulässige Eingaben. Die eingegebenen privaten Schlüssel stimmen überein. Bitte gib zwei unterschiedliche Schlüssel ein.",

		// header and menu html
		"tagline": "Offener, client-seitiger $Pac-Wallet-Generator in JavaScript",
		"generatelabelbitcoinaddress": "Erstelle $Pac-Wallet...",
		"generatelabelmovemouse": "Bewege deine Maus umher, um die Zuf&auml;lligkeit zu erh&ouml;hen...",
		"generatelabelkeypress": "OR type some random characters into this textbox", //TODO: please translate
		"singlewallet": "Einzelnes Wallet",
		"paperwallet": "Papier-Wallet",
		"bulkwallet": "Massen-Wallet",
		"brainwallet": "Kopf-Wallet",
		"vanitywallet": "Personalisiertes Wallet",
		"splitwallet": "Split Wallet", //TODO: please translate
		"detailwallet": "Walletdetails",

		// footer html
		"footerlabeldonations": "Spenden:",
		"footerlabeltranslatedby": "&Uuml;bersetzung: 1EWPcmYmU8MamRUYMFWQa1r7A2Tskz78t5",
		"footerlabelpgp": "PGP",
		"footerlabelversion": "Versionsgeschichte",
		"footerlabelgithub": "GitHub-Repository",
		"footerlabelgithubzip": "zip",
		"footerlabelsig": "sig",
		"footerlabelcopyright1": "Copyright bitaddress.org.",
		"footerlabelcopyright2": "JavaScript-Copyrights sind im Quelltext enthalten.",
		"footerlabelnowarranty": "Ohne Gew&auml;hr.",

		// status html
		"statuslabelcryptogood": "&#10004; Good!", //TODO: please translate
		"statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
		"statusokcryptogood": "OK", //TODO: please translate
		"statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
		"statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
		"statusokcryptobad": "OK", //TODO: please translate
		"statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
		"statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
		"statusokunittestsgood": "OK", //TODO: please translate
		"statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
		"statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
		"statusokunittestsbad": "OK", //TODO: please translate
		"statuslabelprotocolgood": "&#10004; Good!", //TODO: please translate
		"statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
		"statusokprotocolgood": "OK", //TODO: please translate
		"statuslabelprotocolbad": "&#9888; Think twice!", //TODO: please translate
		"statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
		"statuslabelprotocolbad2": "download", //TODO: please translate
		"statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
		"statusokprotocolbad": "OK", //TODO: please translate
		"statuslabelkeypool1": "This is a log of all the $Pac Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
		"statuskeypoolrefresh": "Refresh", //TODO: please translate
		"statusokkeypool": "OK", //TODO: please translate

		// single wallet html
		"newaddress": "Neues Wallet erstellen",
		"singleprint": "Drucken",
		"singlelabelbitcoinaddress": "$Pac-Adresse",
		"singlelabelprivatekey": "Privater Schl&uuml;ssel (WIF &ndash; zum Importieren geeignet):",
		"singletip1": "<b>A $PAC wallet</b> is as simple as a single pairing of a $PAC address with its corresponding $PAC private key. Such a wallet has been generated for you in your web browser and is displayed above.", //TODO: please translate
		"singletip2": "<b>To safeguard this wallet</b> you must print or otherwise record the $PAC address and private key. It is important to make a backup copy of the private key and store it in a safe location. This site does not have knowledge of your private key. If you leave/refresh the site or press the \"Generate New Address\" button then a new private key will be generated and the previously displayed private key will not be retrievable. Your $PAC private key should be kept a secret. Whomever you share the private key with has access to spend all the $PACs associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.", //TODO: please translate
		"singletip3": "<b>Add funds</b> to this wallet by instructing others to send $PAC to your $PAC address.", //TODO: please translate
		"singletip4": "Check your balance</b> by going to http://usa.pacblockexplorer.com:3002/ and entering your $PAC address.<br><br><b>Usage: </b>", //TODO: please translate
		"singletip5": "You can spend your funds by downloading one of the popular $PAC p2p clients and importing your private key to the p2p client wallet. Keep in mind when you import your single key to a $PAC p2p client and spend funds your key will be bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another $PAC address within the p2p client wallet. You must then backup the p2p client wallet and keep it safe as your remaining $PAC will be stored there.", //TODO: please translate
		"singleshare": "SHARE", //TODO: please translate
		"singlesecret": "SECRET", //TODO: please translate

		// paper wallet html
		"paperlabelhideart": "Grafische Gestaltung ausblenden?",
		"paperlabeladdressesperpage": "Adressen je Seite:",
		"paperlabeladdressestogenerate": "Anzahl zu erstellender Adressen:",
		"papergenerate": "Erstellen",
		"paperprint": "Drucken",
		"paperlabelBIPpassphrase": "Passwort:",
		"paperlabelencrypt": "Mit BIP38 verschl&uuml;sseln?",
		"pwlabelq1" : "What is a paper wallet?",
		//"pwa1" : "Respuesta 1",
		"pwlabelq2" : "How to use your paper wallet",
		//"pwa2": "Respuesta 2",

		// bulk wallet html
		"bulklabelstartindex": "Startindex:",
		"bulklabelrowstogenerate": "Zu erstellende Adressen:",
		"bulklabelcompressed": "Adressen komprimieren?",
		"bulkgenerate": "Erstellen",
		"bulkprint": "Drucken",
		"bulklabelcsv": "Comma Separated Values (CSV):",
		"bulklabelformat": "Index, Adresse, privater Schl&uuml;ssel (WIF)",
		"bulklabelq1": "Warum sollte ich ein Massen-Wallet auf meiner Webseite einsetzen?",
		"bulka1": "Bisher musste immer der offizielle $PAC-Daemon, paccoind, auf dem Server installiert sein, damit man $Pacs auf seiner Webseite annehmen konnte. Viele Webhoster blockieren die Installation von bitcoind. Au&szlig;erdem m&uuml;ssen die privaten Schl&uuml;ssel auf dem Server liegen, damit bitcoind funktioniert, obwohl sie dort einfacher gestohlen werden k&ouml;nnen. Mit einem Massen-Wallet brauchst du nur noch die $Pac-Adressen und nicht mehr zus&auml;tzlich die privaten Schl&uuml;ssel hochladen. Dadurch musst du dir keine Sorgen mehr machen, dass dein $Pac-Wallet gestohlen werden k&ouml;nnte, wenn unberechtigt in deinen Server eingedrungen wird.",
		"bulklabelq2": "Wie kann ich ein Massen-Wallet in meine Webseite integrieren?",
		"bulklabela2li1": "Erstelle mithilfe dieser Seite ganz viele $Pac-Adressen (10.000+). Kopiere die CSV-Liste in eine sichere Textdatei auf deinem Computer. Fertige ein Backup dieser Datei an und speichere sie an einem sicheren Ort.",
		"bulklabela2li2": "Importiere die $Pac-Adressen in eine Datenbank auf deinem Server. (Lege nur die $Pac-Adressen, nicht aber die privaten Schl&uuml;ssel auf deinem Server ab!)",
		"bulklabela2li3": "Biete deinen Kunden auf deiner Webseite $Pac als Zahlungsm&ouml;glichkeit an. Wenn ein Kunde mit $Pac zahlen m&ouml;chte, zeige ihm eine der Adressen aus deiner Datenbank als Zahlungsadresse an und speichere sie mit seiner Bestellung.",
		"bulklabela2li4": "Jetzt musst du dir den Zahlungseingang best&auml;tigen lassen. Google \"bitcoin payment notification\" und melde dich bei mindestens einem solchen Anbieter an. Es gibt verschiedene Anbieter, die dich via Web, API, SMS, E-Mail etc. &uuml;ber erfolgte Transaktionen informieren k&ouml;nnen. Sobald du die Eingangsbest&auml;tigung erh&auml;lst, kannst du automatisch die Bestellung abwickeln lassen. Um selber zu schauen, ob eine Zahlung erfolgt ist, kannst du Block Explorer nutzen. Ersetze PACCOIN durch die $PAC-Adresse, die du pr&uuml;fen m&ouml;chtest. Es dauert von zehn Minuten bis zu einer Stunde, um Transaktionen zu best&auml;tigen. <br />http://www.blockexplorer.com/address/PACCOIN<br /> <br />Unbest&auml;tigte Transaktionen findest du hier: http://blockchain.info/ <br /> S&auml;mtliche Transaktionen sollten dort innerhalb von 30 Sekunden auftauchen.",
		"bulklabela2li5": "Deine $Pacs werden sicher in die Block-Chain aufgenommen. Mithilfe des urspr&uuml;nglichen Wallets vom ersten Schritt kannst du sie ausgeben.",

		// brain wallet html
		"brainlabelenterpassphrase": "Passphrase eingeben:",
		"brainlabelshow": "Aufdecken?",
		"brainprint": "Drucken",
		"brainlabelconfirm": "Passphrase wiederholen:",
		"brainview": "Zugehöriges Wallet anzeigen",
		"brainalgorithm": "Algorithmus: SHA256 (Passphrase)",
		"brainlabelbitcoinaddress": "$Pac-Adresse:",
		"brainlabelprivatekey": "Privater Schl&uuml;ssel (WIF):",

		// vanity wallet html
		"vanitylabelstep1": "Schritt 1 - Erstelle dein Schl&uuml;sselpaar",
		"vanitynewkeypair": "Erstellen",
		"vanitylabelstep1publickey": "&Ouml;ffentlicher Schl&uuml;ssel:",
		"vanitylabelstep1pubnotes": "Kopiere den obigen &ouml;ffentlichen Schl&uuml;ssel in das \"Your public key\"-Feld auf der Webseite von Vanity Pool.",
		"vanitylabelstep1privatekey": "Privater Schl&uuml;ssel (Your Part Private Key):",
		"vanitylabelstep1privnotes": "Speichere den obigen privaten Schl&uuml;ssel in einer Textdatei, die du am besten auf einem verschl&uuml;sselten Laufwerk sicherst. Sobald der Vanity-Pool deine personalisierte $Pac-Adresse gefunden hat, kannst du den zu ihr geh&ouml;renden privaten Schl&uuml;ssel nur mithilfe des vom Pools berechneten privaten Schl&uuml;ssels (Pool Part Private Key) und des obigen privaten Schl&uuml;ssels (Your Part Private Key) erhalten. Beide privaten Schl&uuml;ssel (Pool und Your) werden zum Berechnen des privaten Schl&uuml;ssels deiner personalisierten $Pac-Adresse ben&ouml;tigt, damit wirklich nur jemand, der beide besitzt, das personalisierte Wallet nutzen kann.",
		"vanitylabelstep2calculateyourvanitywallet": "Schritt 2 - Berechne dein personalisiertes Wallet",
		"vanitylabelenteryourpart": "Gib hier deinen privaten Schl&uuml;ssel von oben ein (Your Part Private Key):",
		"vanitylabelenteryourpoolpart": "Gib hier den von Vanity-Pool erhaltenen privaten Schl&uuml;ssel ein (Pool Part Private Key):",
		"vanitylabelnote1": "[HINWEIS: Dieses Eingabefeld nimmt sowohl &ouml;ffentlich als auch private Schl&uuml;ssel an.]",
		"vanitylabelnote2": "[HINWEIS: Dieses Eingabefeld nimmt sowohl &ouml;ffentlich als auch private Schl&uuml;ssel an.]",
		"vanitylabelradioadd": "Addieren",
		"vanitylabelradiomultiply": "Multiplizieren",
		"vanitycalc": "Personalisiertes Wallet berechnen",
		"vanitylabelbitcoinaddress": "Personalisierte $Pac-Adresse:",
		"vanitylabelnotesbitcoinaddress": "Die obige $Pac-Adresse sollte den gew&uuml;nschten Pr&auml;fix enthalten.",
		"vanitylabelpublickeyhex": "Personalisierter &ouml;ffentlicher Schl&uuml;ssel (HEX):",
		"vanitylabelnotespublickeyhex": "Die obige Zeichenfolge ist der &ouml;ffentliche Schl&uuml;ssel ($Pac-Adresse) im Hexadezimalformat.",
		"vanitylabelprivatekey": "Personalisierter privater Schl&uuml;ssel (WIF):",
		"vanitylabelnotesprivatekey": "Der obige private Schl&uuml;ssel erm&ouml;glicht das Importieren in andere Wallets.",

		// detail wallet html
		"detaillabelenterprivatekey": "Privaten Schl&uuml;ssel eingeben:",
		"detailkeyformats": "Unterstützte Formate: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
		"detailview": "Details anzeigen",
		"detailprint": "Drucken",
		"detaillabelnote1": "Der private Schl&uuml;ssel deines Wallets ist eine geheime, einzigartige Zeichenfolge, die nur du kennst. Er kann auf mehrer Arten dargestellt werden. Unten findest du die zugeh&ouml;rige $Pac-Adresse bzw. &ouml;ffentlichen Schl&uuml;ssel sowie den privaten Schl&uuml;ssel in den verbreitetsten Formaten.",
		"detaillabelnote2": "Ab Version 0.6 speichert $Pac-qt &ouml;ffentliche Schl&uuml;ssel komprimiert. Das Programm unterst&uuml;tzt nun auch den Import und Export von privaten Schl&uuml;sseln mit importprivkey/dumpprivkey. Das Format des exportierten privaten Schl&uuml;ssels h&auml;ngt davon ab, ob die Adresse in einem alten oder neuen Wallet erstellt wurde.",
		"detaillabelbitcoinaddress": "$Pac-Adresse:",
		"detaillabelbitcoinaddresscomp": "Komprimierte $Pac-Adresse:",
		"detaillabelpublickey": "&Ouml;ffentlicher Schl&uuml;ssel (130 Zeichen [0-9A-F]):",
		"detaillabelpublickeycomp": "Komprimierter &ouml;ffentlicher Schl&uuml;ssel (66 Zeichen [0-9A-F]):",
		"detaillabelprivwif": "Privater Schl&uuml;ssel WIF  <br /> 51 Zeichen in base58, beginnt mit",
		"detaillabelprivwifcomp": "Komprimierter privater Schl&uuml;ssel WIF <br /> 52 Zeichen in base58, beginnt mit",
		"detailcompwifprefix": "'K' oder 'L'",
		"detaillabelprivhex": "Privater Schl&uuml;ssel in Hexadezimal (64 Zeichen [0-9A-F]):",
		"detaillabelprivb64": "Privater Schl&uuml;ssel in base64 (44 Zeichen):",
		"detaillabelprivmini": "Privater Schl&uuml;ssel in mini (22, 26 oder 30 Zeichen, beginnt mit 'S'):",
		"detaillabelpassphrase": "Passwort f&uuml;r BIP38 eingeben",
		"detailbip38decryptbutton": "Entschl&uuml;sseln",
		"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
		"detaillabelq1": "Wie erstelle ich ein Wallet mithilfe eines Würfels? Was versteht man unter B6?",
		"detaila1": "Beim Erstellen eines $Pac-Wallets sollten die dafür genutzten Zufallszahlen auch tatsächlich zufällig sein. Ein echter Würfel liefert wesentlich zufälligere Zahlen als ein Computer. Um einen privaten Schlüssel zu erstellen, sind lediglich 99 Würfe mit einem normalen Würfel nötig. Nach jedem Wurf solltest du die Augenzahl nach folgendem Muster aufschreiben: 1-\>1, 2-\>2, 3-\>3, 4-\>4, 5-\>5, 6-\>0. Die so entstandene Zufallszahl stellt deinen privaten Schlüssel in B6 bzw. zur Basis 6 dar. Diesen 99 Zeichen langen Basis-6-Schlüssel kannst du im obigen Eingabefeld eingeben und dir dann die zugehörigen Details anzeigen lassen. U.a. wird dir die zu deinem privaten Schlüssel gehörende $Pac-Adresse angezeigt. Es wäre ratsam, sich die ebenfalls berechnete WIF-Version des privaten Schlüssels zu notieren, weil sie häufiger genutzt wird."
	};
})(ninja.translator);