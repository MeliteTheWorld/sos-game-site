// логика lang

const lang = document.querySelector('.header__lang');
const btn = document.querySelector('.lang__btn');

btn.addEventListener('click', function (e) {

    e.stopPropagation();

    if (lang.classList.contains('is-open')) {
        lang.classList.remove('is-open');
    } else {
        lang.classList.add('is-open');
    }

});

document.addEventListener('click', function () {

    lang.classList.remove('is-open');

});

const items = document.querySelectorAll(".lang__item");

items.forEach(function (item) {

    item.onclick = function () {

        let lang = item.textContent;

        document.querySelector(".lang__btn").textContent = lang;

        document.querySelectorAll("[data-lang]").forEach(function (el) {

            let key = el.getAttribute("data-lang");

            el.textContent = translations[lang][key];

        });

    }

});

const translations = {

    ENG: {
        "nav-lang__main": "Main",
        "nav-lang__about": "About",
        "nav-lang__features": "Game features",
        "nav-lang__system": "System requirements",
        "nav-lang__quotes": "Quotes",
        "about-label": "What is SOS?",
        "about-title": "Social Battle Royale Game",
        "about-text": "Each round, you and 15 other contestants compete to escape a deadly island filled with monsters. The trick is: three people can survive. Will you run solo or form friendships with others to escape?",
        "about-text2": "Making the right decisions could be the difference between life and death.",
        "hero-title": "Survive At All Costs",
        "hero-sub": "Experience New Social Battle Royale Game",
        "hero-btn": "Buy now on Steam | $14.99",
        "hero-scroll": "The Story",
        "features-label": "What's so special?",
        "features-title": "Features",
        "feature1-name": "Survive At All Costs",
        "feature1-desc": "You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.",
        "feature2-name": "Create Allies and Enemies",
        "feature3-name": "Impress the Audience",
        "req-label": "Can My Computer Run This Game?",
        "req-title": "System Requirements",
        "req-os-title": "OS:",
        "req-os": "Windows 7 64-bit only\n(No OSX support at this time)",
        "req-processor-title": "Processor:",
        "req-processor": "Intel Core 2 Duo @ 2.4 GHZ or\nAMD Athlon X2 @ 2.8 GHZ",
        "req-memory-title": "Memory:",
        "req-memory": "8 GB RAM",
        "req-storage-title": "Storage:",
        "req-storage": "8 GB available space",
        "req-graphics-title": "Graphics:",
        "req-graphics": "NVIDIA GeForce GTX 660 2GB or\nAMD Radeon HD 7850 2GB DirectX11",
        "quotes-label": "What people think?",
        "quotes-title": "Press Quotes",
        "quotes-text": "Our goal is to create a product and service that you're satisfied with and use it every day. This is why we're constantly working on our services to make it better every day and really listen to what our users has to say.",
        "quotes-btn": "Read more testimonials",
        "newsletter-label": "Want to stay in touch?",
        "newsletter-title": "Newsletter Subscribe",
        "newsletter-text": "In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.",
        "newsletter-input-placeholder": "Your email address",
        "newsletter-btn": "Subscribe now",
        "footer-copy": "© 2018 Outpost Games, Inc. All Rights Reserved",
        "footer-link-privacy": "PRIVACY POLICY",
        "footer-link-terms": "TERMS OF SERVICES",
        "footer-link-code": "CODE OF CONDUCT",
        "footer-nav-main": "MAIN",
        "footer-nav-about": "ABOUT",
        "footer-nav-features": "GAME FEATURES",
        "footer-nav-system": "SYSTEM REQUIREMENTS",
        "footer-nav-quotes": "QUOTES"
    },

    RUS: {
        "nav-lang__main": "Главная",
        "nav-lang__about": "О игре",
        "nav-lang__features": "Особенности игры",
        "nav-lang__system": "Системные требования",
        "nav-lang__quotes": "Отзывы",
        "about-label": "Что такое SOS?",
        "about-title": "Социальная Battle Royale игра",
        "about-text": "Каждый раунд вы и ещё 15 участников пытаетесь выбраться с смертельного острова, полного монстров. Хитрость в том, что выжить могут только трое. Будете ли вы действовать в одиночку или объединитесь с другими?",
        "about-text2": "Правильные решения могут стать разницей между жизнью и смертью.",
        "hero-title": "Выжить любой ценой",
        "hero-sub": "Новая социальная Battle Royale",
        "hero-btn": "Купить в Steam | $14.99",
        "hero-scroll": "История",
        "features-label": "Что особенного?",
        "features-title": "Особенности",
        "feature1-name": "Выжить любой ценой",
        "feature1-desc": "У вас есть 30 минут, чтобы найти реликвию, вызвать эвакуацию и занять одно из трёх мест в вертолёте спасения.",
        "feature2-name": "Создавайте союзников и врагов",
        "feature3-name": "Произведите впечатление на аудиторию",
        "req-label": "Запустится ли игра на моём компьютере?",
        "req-title": "Системные требования",
        "req-os-title": "ОС:",
        "req-os": "Windows 7 64-bit только\n(В данный момент поддержка OSX отсутствует)",
        "req-processor-title": "Процессор:",
        "req-processor": "Intel Core 2 Duo @ 2.4 GHZ или\nAMD Athlon X2 @ 2.8 GHZ",
        "req-memory-title": "Память:",
        "req-memory": "8 ГБ ОЗУ",
        "req-storage-title": "Место на диске:",
        "req-storage": "8 ГБ свободного места",
        "req-graphics-title": "Графика:",
        "req-graphics": "NVIDIA GeForce GTX 660 2GB или\nAMD Radeon HD 7850 2GB DirectX11",
        "quotes-label": "Что говорят люди?",
        "quotes-title": "Отзывы прессы",
        "quotes-text": "Наша цель — создать продукт и сервис, которым вы будете довольны и пользоваться каждый день.",
        "quotes-btn": "Читать больше отзывов",
        "newsletter-label": "Хотите оставаться на связи?",
        "newsletter-title": "Подписка на рассылку",
        "newsletter-text": "Чтобы получать новости, введите ваш email. Мы не рассылаем спам.",
        "newsletter-input-placeholder": "Ваш email",
        "newsletter-btn": "Подписаться",
        "footer-copy": "© 2018 Outpost Games, Inc. Все права защищены",
        "footer-link-privacy": "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
        "footer-link-terms": "УСЛОВИЯ ПОЛЬЗОВАНИЯ",
        "footer-link-code": "КОДЕКС ПОВЕДЕНИЯ",
        "footer-nav-main": "ГЛАВНАЯ",
        "footer-nav-about": "О ИГРЕ",
        "footer-nav-features": "ОСОБЕННОСТИ",
        "footer-nav-system": "СИСТЕМНЫЕ ТРЕБОВАНИЯ",
        "footer-nav-quotes": "ОТЗЫВЫ"
    },


    FRA: {
        "nav-lang__main": "Accueil",
        "nav-lang__about": "À propos",
        "nav-lang__features": "Fonctionnalités",
        "nav-lang__system": "Configuration requise",
        "nav-lang__quotes": "Avis",
        "about-label": "Qu'est-ce que SOS?",
        "about-title": "Jeu de Battle Royale social",
        "about-text": "À chaque manche, vous et 15 autres concurrents tentez d'échapper à une île mortelle remplie de monstres. Le piège : trois personnes seulement peuvent survivre. Courrez-vous en solo ou formerez-vous des alliances pour vous échapper ?",
        "about-text2": "Prendre les bonnes décisions peut faire la différence entre la vie et la mort.",
        "hero-title": "Survivez à tout prix",
        "hero-sub": "Découvrez le nouveau Battle Royale social",
        "hero-btn": "Acheter sur Steam | 14,99 $",
        "hero-scroll": "L'histoire",
        "features-label": "Qu'est-ce qui le rend spécial ?",
        "features-title": "Fonctionnalités",
        "feature1-name": "Survivez à tout prix",
        "feature1-desc": "Vous avez 30 minutes pour trouver une relique, signaler une extraction et obtenir l'une des trois places dans l'hélicoptère de sauvetage.",
        "feature2-name": "Créez des alliés et des ennemis",
        "feature3-name": "Impressionnez le public",
        "req-label": "Mon ordinateur peut-il faire tourner ce jeu ?",
        "req-title": "Configuration requise",
        "req-os-title": "OS :",
        "req-os": "Windows 7 64 bits seulement\n(Pas de support OSX pour le moment)",
        "req-processor-title": "Processeur :",
        "req-processor": "Intel Core 2 Duo @ 2.4 GHZ ou\nAMD Athlon X2 @ 2.8 GHZ",
        "req-memory-title": "Mémoire :",
        "req-memory": "8 Go RAM",
        "req-storage-title": "Stockage :",
        "req-storage": "8 Go d'espace disponible",
        "req-graphics-title": "Graphiques :",
        "req-graphics": "NVIDIA GeForce GTX 660 2GB ou\nAMD Radeon HD 7850 2GB DirectX11",
        "quotes-label": "Que pensent les gens ?",
        "quotes-title": "Citations de la presse",
        "quotes-text": "Notre objectif est de créer un produit et un service dont vous serez satisfait et que vous utiliserez au quotidien.",
        "quotes-btn": "Lire plus de témoignages",
        "newsletter-label": "Envie de rester en contact ?",
        "newsletter-title": "Inscription à la newsletter",
        "newsletter-text": "Pour recevoir nos nouvelles, saisissez votre adresse e-mail. Nous nous occupons du reste. Nous enverrons des e-mails contenant des informations sur le jeu. Nous ne faisons pas de spam.",
        "newsletter-input-placeholder": "Votre adresse e-mail",
        "newsletter-btn": "S'abonner",
        "footer-copy": "© 2018 Outpost Games, Inc. Tous droits réservés",
        "footer-link-privacy": "POLITIQUE DE CONFIDENTIALITÉ",
        "footer-link-terms": "CONDITIONS D'UTILISATION",
        "footer-link-code": "CODE DE CONDUITE",
        "footer-nav-main": "ACCUEIL",
        "footer-nav-about": "À PROPOS",
        "footer-nav-features": "FONCTIONNALITÉS",
        "footer-nav-system": "CONFIGURATION",
        "footer-nav-quotes": "AVIS"
    },

    DEU: {
        "nav-lang__main": "Startseite",
        "nav-lang__about": "Über das Spiel",
        "nav-lang__features": "Spiel-Funktionen",
        "nav-lang__system": "Systemanforderungen",
        "nav-lang__quotes": "Zitate",
        "about-label": "Was ist SOS?",
        "about-title": "Soziales Battle Royale Spiel",
        "about-text": "In jeder Runde versuchen du und 15 weitere Teilnehmer, einer tödlichen Insel voller Monster zu entkommen. Der Trick: Nur drei Personen können überleben. Spielst du allein oder verbündest du dich mit anderen, um zu entkommen?",
        "about-text2": "Die richtigen Entscheidungen können über Leben und Tod entscheiden.",
        "hero-title": "Überlebe um jeden Preis",
        "hero-sub": "Erlebe das neue soziale Battle Royale",
        "hero-btn": "Jetzt auf Steam kaufen | 14,99 $",
        "hero-scroll": "Die Geschichte",
        "features-label": "Was macht es besonders?",
        "features-title": "Funktionen",
        "feature1-name": "Überlebe um jeden Preis",
        "feature1-desc": "Du hast 30 Minuten, um ein Relikt zu finden, eine Evakuierung anzufordern und einen der drei Plätze im Rettungshubschrauber zu ergattern.",
        "feature2-name": "Verbünde dich oder mach Feinde",
        "feature3-name": "Beeindrucke das Publikum",
        "req-label": "Kann mein Computer dieses Spiel ausführen?",
        "req-title": "Systemanforderungen",
        "req-os-title": "Betriebssystem:",
        "req-os": "Windows 7 64-Bit nur\n(Keine OSX-Unterstützung zum jetzigen Zeitpunkt)",
        "req-processor-title": "Prozessor:",
        "req-processor": "Intel Core 2 Duo @ 2.4 GHZ oder\nAMD Athlon X2 @ 2.8 GHZ",
        "req-memory-title": "Arbeitsspeicher:",
        "req-memory": "8 GB RAM",
        "req-storage-title": "Speicher:",
        "req-storage": "8 GB freier Speicherplatz",
        "req-graphics-title": "Grafik:",
        "req-graphics": "NVIDIA GeForce GTX 660 2GB oder\nAMD Radeon HD 7850 2GB DirectX11",
        "quotes-label": "Was sagen die Leute?",
        "quotes-title": "Pressestimmen",
        "quotes-text": "Unser Ziel ist es, ein Produkt und einen Service zu schaffen, mit dem Sie zufrieden sind und das Sie täglich nutzen.",
        "quotes-btn": "Mehr Erfahrungsberichte lesen",
        "newsletter-label": "Bleiben Sie in Kontakt?",
        "newsletter-title": "Newsletter abonnieren",
        "newsletter-text": "Um unsere Neuigkeiten zu erhalten, geben Sie Ihre E-Mail-Adresse ein. Wir kümmern uns um den Rest. Wir senden Ihnen E-Mails mit Informationen zum Spiel. Wir versenden keinen Spam.",
        "newsletter-input-placeholder": "Ihre E-Mail-Adresse",
        "newsletter-btn": "Jetzt abonnieren",
        "footer-copy": "© 2018 Outpost Games, Inc. Alle Rechte vorbehalten",
        "footer-link-privacy": "DATENSCHUTZBESTIMMUNGEN",
        "footer-link-terms": "NUTZUNGSBEDINGUNGEN",
        "footer-link-code": "VERHALTENSKODEX",
        "footer-nav-main": "STARTSEITE",
        "footer-nav-about": "ÜBER DAS SPIEL",
        "footer-nav-features": "FUNKTIONEN",
        "footer-nav-system": "SYSTEMANFORDERUNGEN",
        "footer-nav-quotes": "ZITATE"
    }


};

// логика slider

const imgs = document.querySelectorAll('.slider__img');
const dots = document.querySelectorAll('.slider__dot');

let current = 0;

function updateSlider() {

    for (let i = 0; i < imgs.length; i++) {

        imgs[i].className = "slider__img";

        if (i === current) {
            imgs[i].classList.add("slider__img--active");
        } else if (i === current + 1) {
            imgs[i].classList.add("slider__img--mid");
        } else {
            imgs[i].classList.add("slider__img--back");
        }
    }

    for (let i = 0; i < dots.length; i++) {

        if (i === current) {
            dots[i].classList.add("slider__dot--active");
        } else {
            dots[i].classList.remove("slider__dot--active");
        }

    }
}

updateSlider();

const nextBtn = document.getElementById("sliderNext");

nextBtn.addEventListener("click", function () {

    current = current + 1;

    if (current >= imgs.length) {
        current = 0;
    }

    updateSlider();

});


// логика hero__scroll

document.getElementById("hero__scroll").onclick = function () {

    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });

}