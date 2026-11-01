
var isDE = true;

const translations = {
    DE: {
        http_description: "HTTP bedeutet HyperText Transfer Protocol."
            + "<br><br>"
            + "Man hört es ständig und es steht in jeder URL."
            + "<br><br>"
            + "HTTP wird von deinem Browser genutzt, um Websites anzuzeigen, jedoch ist es keineswegs sicher!"
            + "<br><br>"
            + "Alle Daten sind unverschlüsselt und durch Tools wie z.B. <a href='#wireshark'>Wireshark </a> sehr einfach nachzuverfolgen."
            + "<br><br>"
            + "Es gibt verschiedene Anfragen für Websites / Hypertext, z.B.:"
            + "<br>- GET"
            + "<br>- POST"
            + "<br>- DELETE"
            + "<br><br>"
            + "Wenn ein Browser deine Website laden will, wird eine GET-Anfrage gesendet, welche ungefähr so aussieht:"
            + "<pre>"
            + "GET /index.html HTTP/1.1\n"
            + "Host: www.beispiel.de\n"
            + "User-Agent: Mozilla/5.0\n"
            + "Accept: text/html\n"
            + "Connection: keep-alive"
            + "</pre>"
            + "index.html ist die angeforderte Ressource."
            + "<br><br>"
            + "Host ist die Domain, von der angefragt wird."
            + "<br><br>"
            + "User-Agent gibt den Browser des Nutzers an."
            + "<br><br>"
            + "Accept gibt an, welche Datenformate akzeptiert werden."
            + "<br><br>"
            + "Connection gibt an, ob die Verbindung bestehen bleibt.",

        sftp_description: "SFTP ist ein File Transfer Protocol, das auf SSH basiert (deshalb auch SFTP). Damit kann man Dateien auf einem Server erstellen, bearbeiten oder löschen!<br><br>Und dabei ist alles verschlüsselt, somit kann niemand mitlesen.",

        ftp_description: "FTP ist ein File Transfer Protocol, womit man Dateien auf einem Server erstellen, bearbeiten oder löschen kann!<br><br>Jedoch ist es leider nicht sicher. Durch einen Man-in-the-Middle-Angriff kann der gesamte Verkehr (unter anderem auch die Datei selbst) mitgelesen werden. Daher lieber <b>SFTP</b> benutzen.",

        ssh_description: "SSH ist eine Secure Shell, wobei man auch sagen kann, dass es ein Remote-Server-Access ist.<br><br>Es ist eine Verbindung zu einem entfernten Server, die komplett verschlüsselt ist.<br><br>Wie ist sie verschlüsselt?<br><br>Während des Verbindungsaufbaus findet ein kryptografischer Schlüsselaustausch statt.<br><br>Dabei wird ein gemeinsamer Sitzungsschlüssel abgeleitet. Mit diesem gemeinsamen Schlüssel wird die Verbindung verschlüsselt.<br><br>Das dient der Sicherheit, somit kann niemand mehr mitlesen.",

        smtp_description: "SMTP steht für Simple Mail Transfer Protocol.<br><br>Es wird verwendet, um E-Mails von einem Client an einen Mailserver oder zwischen Mailservern zu übertragen.<br><br>Zum Abrufen von E-Mails werden hingegen meistens IMAP oder POP3 verwendet.",

        tcp_description: "TCP ist ein Protokoll, welches Daten überträgt.<br><br>Bevor aber Daten gesendet werden können, muss ein sogenannter <a href='#TCP-Handshake'>TCP-Handshake </a> erfolgen.<br><br>Falls dieser erfolgreich war, werden die Daten so übertragen:<br><br>Daten gesendet -> Empfangen?<br><br>Falls nein -> Erneut den fehlenden Teil senden<br><br>Quasi wie die Post, gut für Nachrichten.",

        handshake_description: "Wenn ein Nutzer eine TCP-Anfrage sendet, passiert Folgendes:<br><br>Nutzer sendet SYN<br>Server antwortet mit SYN + ACK<br>Nutzer sendet ACK<br><br>Danach steht die Verbindung erst.<br><br>*ACK = Acknowledgment, SYN = Synchronize",

        udp_description: "UDP ist ein Protokoll, welches Daten sendet, auch wenn sie nicht ankommen.<br><br>Gut für Live-Übertragungen.",

        https_description: "HTTPS bedeutet HyperText Transfer Protocol Secure.<br><br>Es unterscheidet sich hauptsächlich durch den Sicherheitsstandard von HTTP.<br><br>Durch die Verschlüsselung der Daten ist es für Außenstehende sehr schwierig, die übertragenen Inhalte mitzulesen.<br><br>Mittlerweile ist es der Standard für Websites / Hoster.",
        wireshark_description: "Wireshark ist eine Software gemacht für das Analysieren des Netzwerkes und auch sein Verkehr",
        dns_description: "DNS steht für Dynamic Name System. Anstatt das man immer wieder eine <a href='#IPv4'>IPv4</a> eingibt nutzt man Domains.",
        ipv4_description: "Eine IPv4-Adresse ist im Grunde wie eine Postadresse.<br><br>Statt eines Postboten verwendet ein anderes Gerät diese Adresse, um mit einem bestimmten Gerät im Netzwerk zu kommunizieren.<br><br>So weiß das Netzwerk, an welches Gerät die Daten gesendet werden sollen.",
    },

    EN: {
        http_description: "HTTP stands for HyperText Transfer Protocol."
            + "<br><br>"
            + "You hear it all the time, and it appears in many URLs."
            + "<br><br>"
            + "HTTP is used by your browser to display websites, but it is not secure!"
            + "<br><br>"
            + "All data is transmitted without encryption and can be easily read using tools such as <a href='#wireshark'>Wireshark </a>."
            + "<br><br>"
            + "There are different types of requests for websites / hypertext, for example:"
            + "<br>- GET"
            + "<br>- POST"
            + "<br>- DELETE"
            + "<br><br>"
            + "When a browser wants to load your website, it sends a GET request that looks something like this:"
            + "<pre>"
            + "GET /index.html HTTP/1.1\n"
            + "Host: www.example.com\n"
            + "User-Agent: Mozilla/5.0\n"
            + "Accept: text/html\n"
            + "Connection: keep-alive"
            + "</pre>"
            + "index.html is the requested resource."
            + "<br><br>"
            + "Host is the domain being requested."
            + "<br><br>"
            + "User-Agent identifies the user's browser."
            + "<br><br>"
            + "Accept specifies which data formats are accepted."
            + "<br><br>"
            + "Connection specifies whether the connection stays open.",

        sftp_description: "SFTP stands for SSH File Transfer Protocol. It is based on SSH and allows you to create, edit or delete files on a server.<br><br>All data is encrypted, so others cannot simply read it.",

        ftp_description: "FTP stands for File Transfer Protocol. It allows you to create, edit or delete files on a server.<br><br>Unfortunately, it is not secure. In a Man-in-the-Middle attack, the entire traffic (including the files themselves) can be intercepted. That is why you should use <b>SFTP</b> instead.",

        ssh_description: "SSH stands for Secure Shell. It can also be described as remote access to a server.<br><br>It provides a fully encrypted connection to a remote server.<br><br>How is it encrypted?<br><br>During the connection setup, a cryptographic key exchange takes place.<br><br>A shared session key is then derived. This key is used to encrypt the connection.<br><br>This improves security and prevents outsiders from simply reading the transmitted data.",

        smtp_description: "SMTP stands for Simple Mail Transfer Protocol.<br><br>It is used to transfer emails from a client to a mail server or between mail servers.<br><br>IMAP or POP3 are usually used to retrieve emails.",

        tcp_description: "TCP is a protocol that transfers data.<br><br>Before data can be sent, a so-called <b>TCP handshake</b> must take place.<br><br>If the handshake is successful, data is transferred like this:<br><br>Data is sent -> Was it received?<br><br>If not -> The missing part is sent again.<br><br>It works a bit like the postal service and is useful for reliable communication.",

        handshake_description: "When a user starts a TCP connection, the following happens:<br><br>User sends SYN<br>Server responds with SYN + ACK<br>User sends ACK<br><br>Only then is the connection established.<br><br>*ACK = Acknowledgment, SYN = Synchronize",

        udp_description: "UDP is a protocol that sends data without checking whether it actually arrives.<br><br>It is useful for live broadcasts and real-time communication.",

        https_description: "HTTPS stands for HyperText Transfer Protocol Secure.<br><br>The main difference from HTTP is its security.<br><br>Data is encrypted, making it much harder for outsiders to read the transmitted information.<br><br>Today, HTTPS is the standard for websites.",
        wireshark_description: "Wireshark is an Software made for analysing the network and its traffic",
        dns_description: "DNS stands for Dynamic Name System. Instead of typing  das man immer wieder eine <a href='#IPv4'>IPv4</a> eingibt nutzt man Domains.",
        ipv4_description: "An IPv4 is basicly an mail-adress that is getting used by your deliveryguy. But instead of the deliveryguy it is an other device that tries to talk to this specific adress / device"

    }
};

function changeLanguage() {
    isDE = !isDE;
    applyLanguage();
}

function applyLanguage() {
    const lang = isDE ? "DE" : "EN";

    document.documentElement.lang = isDE ? "de" : "en";

    document.getElementById("button").textContent = document.documentElement.lang;
    document.getElementById("http-description").innerHTML = translations[lang].http_description;
    document.getElementById("sftp-description").innerHTML = translations[lang].sftp_description;
    document.getElementById("ftp-description").innerHTML = translations[lang].ftp_description;
    document.getElementById("ssh-description").innerHTML = translations[lang].ssh_description;
    document.getElementById("smtp-description").innerHTML = translations[lang].smtp_description;
    document.getElementById("tcp-description").innerHTML = translations[lang].tcp_description;
    document.getElementById("handshake-description").innerHTML = translations[lang].handshake_description;
    document.getElementById("udp-description").innerHTML = translations[lang].udp_description;
    document.getElementById("https-description").innerHTML = translations[lang].https_description;
    document.getElementById("wireshark-description").innerHTML = translations[lang].wireshark_description;
    document.getElementById("dns-description").innerHTML = translations[lang].dns_description;
    document.getElementById("ipv4-description").innerHTML = translations[lang].ipv4_description;



}

applyLanguage();
