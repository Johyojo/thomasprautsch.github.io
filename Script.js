// --- 1. NAVIGATION & BURGER-MENÜ ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle-Funktion für das Burger-Menü
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Menü automatisch schließen, wenn ein Link geklickt wird
document.querySelectorAll(".nav-link").forEach(link => 
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);


// --- 2. ERWEITERTE LIGHTBOX MIT SLIDER-FUNKTION ---
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");

// Wir laden alle Galerie-Bilder in ein Array, um darin blättern zu können
// Es erkennt sowohl die Vorschaubilder auf der Startseite als auch die in den Kategorien
const images = Array.from(document.querySelectorAll(".work-item img, .category-item img, .gallery-img"));
let currentIndex = 0;

// Event-Listener für jedes Bild zum Öffnen der Lightbox
images.forEach((img, index) => {
    img.addEventListener("click", (e) => {
        // Verhindert, dass bei Kategorie-Links (Startseite) die Seite sofort wechselt
        if (img.closest('.category-item')) {
            // Wenn du willst, dass man auf der Startseite direkt zur HTML-Seite kommt, 
            // entferne das e.preventDefault(). Wenn die Lightbox dort auch kommen soll, lass es so.
            // e.preventDefault(); 
        }
        
        currentIndex = index;
        updateLightbox();
        lightbox.style.display = "flex";
    });
});

// Funktion, die das Bild und den Text in der Lightbox aktualisiert
function updateLightbox() {
    const currentImg = images[currentIndex];
    lbImg.src = currentImg.src;
    captionText.innerHTML = currentImg.alt; // Nutzt den Alt-Tag als Beschriftung
}

// --- 3. STEUERUNG (Pfeile & Schließen) ---

// Klick auf den rechten Pfeil (Nächstes Bild)
document.querySelector(".next")?.addEventListener("click", (e) => {
    e.stopPropagation(); // Verhindert, dass die Lightbox schließt
    currentIndex = (currentIndex + 1) % images.length; // Geht am Ende wieder zu Bild 0
    updateLightbox();
});

// Klick auf den linken Pfeil (Vorheriges Bild)
document.querySelector(".prev")?.addEventListener("click", (e) => {
    e.stopPropagation(); // Verhindert, dass die Lightbox schließt
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Geht am Anfang zum letzten Bild
    updateLightbox();
});

// Schließen beim Klick auf das 'X'
document.querySelector(".close")?.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Schließen beim Klick auf den dunklen Hintergrund (aber nicht auf das Bild selbst)
lightbox.addEventListener("click", (e) => {
    if (e.target !== lbImg && e.target !== document.querySelector(".next") && e.target !== document.querySelector(".prev")) {
        lightbox.style.display = "none";
    }
});

// --- 4. TASTATUR-STEUERUNG ---
document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % images.length;
            updateLightbox();
        }
        if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateLightbox();
        }
        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }
    }
});

// --- Texte als accordeon ---
const texteSammlung = {
    'modell': {
        title: "Modell und Wirklichkeit",
        author: "Andreas Moersener",
        content: "Stadtansichten und Feuerbilder sind Prautschs bevorzugtes Motiv der letzten Jahre. Seine Ölmalerei ist im Duktus skriptural bis gestisch. Sein Farbauftrag gerät zum gebändigten Experiment: Geschleudertes opaker Konsistenz, verwischte Schlieren, Überspachteltes und Pinsel zerfurchte Borke geben zuweilen die fließend-transparenten Quastwürfe des malerischen Beginnens frei oder enden auf hell glänzend modulierten Spachtelabschlüssen. Die Farbigkeit der Bilder ist chromatisch gebrochen, schlägt aber durchdringende, manchmal bis in Komplementäre spielende Farbakkorde an, vorherrschend in warm-kalt und hell-dunkel.<br><br>Ein Konglomerat abstrakter Farbwürfe in flächiger Ausdehnung oder unruhiger Agglomeration kurzer Pinselhiebe formt Straßen, Wasserwege, Grünanlagen, Hausdächer- und Fassaden bis zur Weite des Horizonts. Licht und Schatten tragen wesentlich zur Reliefbildung dieser Metropolen-Topografien aus Vogelperspektive bei.<br><br>Der Maler Prautsch zeigt uns Perspektiven, die niemals klassisch plein air mit Feldstaffelei entstanden sein könnten. Nicht Bildquelle, sondern besser Vorwand, diese sich selbst auslotende Malerei zu betreiben, sind im Internet abgelegte Satellitenfotos. Ebenso nutzt Prautsch den Film als digitales Skizzenbuch für die Bilder der Feuerserie, da schlecht vorstellbar scheint, dass der Maler unbehelligt von Einsatzkommandos in unmittelbarer Nähe eines Großbrandherdes, inmitten entzündlich schimmernder Lachen, in sengender Hitze seelenruhig und inspiriert eine Feldstaffelei installiert. Feuer, eine äußerst flüchtige, fast immaterielle, luzide Erscheinung mit Hilfe opaker Ölmalerei darstellen zu wollen, ist in technischer Hinsicht schon ein heikles Unterfangen.<br><br>Sein Atelier, ein klassischer white cube, nur von Oberlicht erhellt, verhindert den Blick auf Münsters Hafenambiente. Computer archivierte Satellitenbilder und Filme, schon an sich Modelle von Wirklichkeit, dienen als einzige Quelle, denen er das Eindringen in das Atelier erlaubt.<br><br>Bewusst vom Künstler gefiltertes Material forciert die Konzentration auf die pure Malerei und vernachlässigt rein mimetische Absichten. Prautsch wählt Motive, die sich durch Perspektive oder ihre Materialität leichter mit digitaler Hilfe erfassen lassen.<br><br>Diese gefilterten Konstrukte sind wiederum Modelle und dienen der Reflektion des Mediums Malerei und seiner Grenzen. Tafelmalerei ist als illusionistische Flächenkunst sowohl zur Simulation von Wirklichkeit als auch formal zur Erprobung verschiedenster malerischer 'Ansätze', sprich Modelle fähig. Das Medium 'Malerei' ist für Prautsch eigentlicher Modellraum zur Konstruktion von Wirklichkeit und Ort realer malerischer Aktion. Kurz gesagt, Malerei ist ihm Modell und Wirklichkeit zugleich."    },
    'spurensuche': {
        title: "Spurensuche - ein Ausstellungsprojekt",
        author: "Timm Ulrichs",
        content: "Jeder Stein eine Versteinerung: Gestein ist gleichsam sedimentierte und materialisierte Zeit; in den mineralischen Schichtungen schreibt die Erde ihre eigene, im Wortsinne vielschichtige Natur- und Erdgeschichte. In diesem 'Buch der Natur' zu lesen, fasziniert nicht nur die Wissenschaftler, sondern ebenso Wort- und Bildkünstler. Novalis etwa vermutete allenthalben in der Natur, auch 'in Kristallen und in Steinbildungen, (...) im Innern und Äußeren der Gebirge', Beispiele einer 'großen Chiffernschrift' der Schöpfung, und es gelte nun, 'den Schlüssel dieser Wunderschrift, die Sprachlehre derselben' aufzuspüren ('Die Lehrlinge zu Sais', 1798).<br><br>Und wer hat nicht in seiner Kindheit 'Bunte Steine' (Adalbert Stifter, 1852) gesammelt, ihrer merkwürdigen Formen und Zeichnungen wegen? 'Besonders hatte die Verwunderung kein Ende, wenn es auf einem Steine so geheimnisvoll glänzte und leuchtete und äugelte, dass man es gar nicht ergründen konnte, woher denn das wohl käme.'<br><br>Wenn Thomas Prautsch in Schaukästen des Mineralogischen Museums zweihundertfünfzig seiner Malstücke in unmittelbarer Nähe zu den Gesteinsarten präsentiert, zeigt er tatsächlich 'Wissenschaft und Kunst im Dialog', wie die Ausstellung verspricht. Ein Zwiegespräch im besten Sinne ist die Prautsche Inszenierung insofern, als beide Gesprächspartner ihre eigene Stimme behalten, auch weiterhin ihre eigene Sprache sprechen. Prautsch ahmt nicht nach; vielmehr malt er wie er immer schon malte, nur spricht er hier gewissermaßen in gleicher Lautstärke wie der Partner, mit verhaltener, leiser Stimme, was sich im kleinen Format ausdrückt, ähnlich dem der Gesteinsproben.<br><br>Und wie diese zugleich ein Ganzes und Teil eines größeren Ganzen zu sein vermögen, eignet auch den Prautschen 'Farbstücken' sowohl ein Fertiges, Ausformuliertes als auch Fragmentarisches und Skizzenhaftes – sie sind in und mit einem einzigen Zug des Pinsels oder Rakels auf dem weißen, papierenen 'Objektträger' entstanden, ohne nachträgliche Eingriffe. Die kleinen Bilder in den Erdtönen Braun, Ocker, Schwarz, aber auch in Gesteinsfarben, etwa im Blau-Violett des Amethyst, zeigen parallellaufende Malspuren, ähnlich den Farbschichten und -schichtungen, die bereits die Großformate des Malers gliedern. In den Miniaturen sind die Analogiebildungen, im Hinblick auf das (mögliche) Motiv der Mineralien, gar unmittelbarer noch und letztlich überraschender, denn obwohl und weil es nicht um Nachbildung eines Vor-Bildlichen geht, sind die Entsprechungen um so frappanter.<br><br>Was in Erdzeitaltern sich den Gesteinen einschrieb, bringt Thomas Prautsch im Handumdrehen eines kurzen Malprozesses aufs Papier, zum Verwechseln ähnlich und doch ganz anders. So gelingt ein Brückenschlag über die Zeiten, eine Harmonie 'parallel zur Natur', wie Cézanne sie als Ziel der Künste sah; das Natürliche ist im Künstlich-Künstlerischen wohl aufgehoben. Und Prautsch löst darüber hinaus auch im Stofflichen ein, was Kleist an 'Empfindungen vor Friedrichs Seelandschaft' (1810) äußerte: 'Ja, wenn man diese Landschaft mit ihrer eignen Kreide und ihrem eigenen Wasser malte (...)'"    },
    'bausteine': {
        title: "Bausteine für Licht und Schatten",
        author: "Manfred Schneckenburger",
        content: "Thomas Prautsch malt, als wimmle unser Jahrhundert nicht von letzten Bildern, als wäre die Malerei nie ins Krisengerede geraten und die Wirklichkeit nicht längst zu einem 'zerbrochenen Spiegel' (Paul Virilio) zersplittert. Es ist der seltene Fall eines jungen Künstlers, der die Malkultur aus dem Ärmel zu schütteln scheint. Jedes seiner Bilder ist auch ein Bild über die Malerei und eine Untersuchung der malerischen Mittel durch sich selbst. Dennoch stellt Prautsch sein Metier nicht in Frage. Vom 'Immanenzkollaps', den ein Kritiker kürzlich der analytischen Malerei bescheinigte, ist er weit entfernt.<br><br>Er ist ein peintre pur, aber kein Purist. Malen ist für ihn kein Akt der ständigen Reduktion, bis das Bild auf sein tautologisches Gerippe – Keilrahmen, Leinwand, Farbe, Pinselzug – zurückgeschrumpft ist. Diese Bilder bestimmen sich nicht durch ein Grundkonzept, sondern durch Reichtum und Sensualität. Gewiss entzieht Prautch seinen Bildern die bunte Vielfalt der Lokal- und Primärfarben, doch er gibt ihnen mit einem Equilibrium von Nuancen und einer großen Bandbreite zwischen Hell und Dunkel ihren sinnlichen Glanz zurück.<br><br>Was Prautsch aufgreift, wird schiere Malerei. Da bleibt kein deskriptives Relikt. Anfang der 90er Jahre sind seine Bilder wie in die Farbpaste geschrieben, gespachtelt, gemalt. Sie werfen ein schwerflüssiges und doch temperamentvolles Relief auf, das die Farbe körperlich und beweglich macht. Sie verdicken die Farbe, bis sie krustig wird, ohne dass ihr Atem stockt. Seit 1992 liegt über massiveren Schichten eine luzide écriture voll Esprit. Halbtöne zwischen Blau und Grau hüllen in Lichtschleier, Tupfer setzen sprühende Lichter, Oberflächen gehen in einem abstrakten Duktus auf und erreichen doch die Illusion von Regenfeuchte und Mauerstein. Schlieren nehmen ihren freien Lauf und erscheinen doch als funkelnder Abglanz von Sonne und Schattenschlag.<br><br>Aber es genügt nicht, vor allem die perfekte Bildhaut aus Schichten, Schleiern und Nuancen zu sehen. Die Bilder sind, bei aller prozessualen Offenheit, nirgends informel aufgelöst, nirgends ein brodelndes Farblabor. Gerade weil Prautsch sie aus scripturalen Gesten entwickelt, sucht er, als Ausgleich, einen festeren Halt. Aus der Souveränität des handschriftlichen und dem autonomen Wesen des Flecks tritt eine klar gefügte Ordnung hervor. Jeder Pinselstrich ist malerischer Vollzug und baumeisterliche Stabilisierung in eins. Malgebärde und Formkonstruktion gehen Hand in Hand. Deshalb sind die Architekturmotive, die Prautsch meist zugrunde legt, keineswegs nebensächlich.<br><br>1991: Kuppeln, Türme, Fassaden, ganz frei aus dem Farbbrei modelliert, und doch von einer innerlichen Tektonik, die sogar kleinen und kleinsten Abmessungen eine federnde Monumentalität verleiht. Gewölbte Bögen und vertikale Pfeiler verstreben und verspannen das Bildformat.<br><br>Seit 1992: Perspektivisch zulaufende Steintreppen – sie vereinen Bewegung, differenzierte Oberfläche, den Wiederschein von Atmosphäre und eine deutliche Struktur. Jetzt entfaltet sich, über das kräftige Impasto hinaus, ein malerisches Spektrum vom rechtwinkligen Mauerbau mit dem Spachtel über luftige Transparenzen bis zum Lichtgeflirre goldgelber Spritzer und Wischer. Die Stufen unterlegen den Springtanz der Reflexe mit dem sicheren Tritt einer Marschkolonne – und sind doch aus dem gleichen schimmernden, entmaterialisierten Gespinst. Ein malerisches Bravourstück, wie fest und wie lose diese Textur gleichzeitig gewebt ist!<br><br>Ich will Thomas Prautsch keiner kunsthistorischen, allzu dünnen Gipfelluft aussetzen, aber entfernt erinnern die 'Treppen' doch an Monets berühmte Serie der Kathedrale von Rouen. In der Verschmelzung von kubischem Gerüst und atmosphärischem Zauber behaupten sie sogar eine eigene Polarität. Die kleineren Arbeiten, Öl auf Papier, nehmen die Kantenschärfe und messbare Tiefe wieder zurück und mildern die Struktur ins aquarellhafte Durchsichtige, Schwebende, ohne dass der horizontale Rhythmus ganz verloren geht. Sie wecken Spannung auf den nächsten Schritt."    },
    'preisträger': {
        title: "Preisträger des Caspar-von-Zumbusch-Preises",
        author: "H.G. Eisenhut",
        content: "Thomas Prautsch, 1965 in Frankfurt am Main geboren, nahm 1988 das Studium der Malerei an der Kunstakademie in Münster bei L. von Arseniew und Timm Ulrichs auf, erhielt 1991 seine Ernennung zum Meisterschüler und schloss 1999 das Studium mit Aushändigung des Akademiebriefes ab.<br><br>Thomas Prautsch entwickelt während des Studiums eine eigene Bildsprache, die er frühzeitig der Öffentlichkeit präsentiert. So sind seit dem Jahre 1993 seine Werke kontinuierlich auf renommierten Ausstellungen vertreten. In all diesen Werken ist formal und inhaltlich eine malerische Dichte deutlich spürbar, begonnen mit den Tusche- und Kohlezeichnungen aus den Anfängen seines Studiums, die sein Interesse an zeichnerisch-linearen Strukturen mit starken Hell/Dunkelkontrakten dokumentieren, über seinen Aufenthalt in Berlin, der künstlerisch verarbeitet zur Verdichtung des Farbmaterials im Malprozess wiederum zu Strukturen führt, die Licht und Schatten beschreiben, dann zum Treppenmotiv, von dem er selbst sagt, dass es mehrere Jahre das Gerüst seiner Malerei bildete.<br><br>Thomas Prautsch malt, was er real sieht in Verbindung mit seinem inneren Eindruck. Er beschreitet mit seiner Malerei einen Weg zwischen Gegenständlichkeit und Abstraktion. Das wird sichtbar in dem meist einfachen Kompositionen, Waagerechten und Diagonalen – es sind die Leitlinien seiner Malerei – die den Malspuren gegenüber stehen und das Bild zu einem rhythmischen Geflecht verdichten.<br><br>Sowie auch schon beim Treppenmotiv bleibt er dem Thema der Steinstrukturen in seinen weiteren Arbeiten treu. Sein Aufenthalt in Irland im Jahre 1997 konfrontiert ihn mit der Landschaft, etwas völlig Neues für ihn, der sich bisher mit der Stadtlandschaft und sich daraus ergebenden Einzelstrukturen befasst hatte. Er entdeckt eine karge Landschaft aus übereinander geschichteten Kalksteinplatten, eine scheinbar ungeordnete Struktur, die keinen Gesetzen und Regeln zu folgen scheint, und doch fasziniert ihn die Oberflächenstruktur, das endlose Durcheinander von Furchen und Rinnen mit metertiefen Brüchen und harten Verschattungen, dass er die Verarbeitung dieses Themas in seinen letzten Arbeiten darstellt, ein fließender Übergang vom starren Treppenmotiv zur amorphen natürlichen Gesetzmäßigkeit."
    }
};

function openTextModal(id) {
    const data = texteSammlung[id];
    if (data) {
        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalAuthor').innerText = "Text von " + data.author;
        document.getElementById('modalFullText').innerHTML = data.content;
        document.getElementById('textModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeTextModal() {
    document.getElementById('textModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}