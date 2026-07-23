const TENSE_DATA = {
    'simple-present': {
        title: 'Simple Present',
        tag: 'Present',
        intro: 'Use the simple present for habits, routines, facts and general truths.',
        usageEn: 'We use the simple present to describe regular actions, facts, schedules, and things that are always true.',
        usageTr: 'Bu zaman, düzenli alışkanlıkları, genel gerçekleri, programları ve her zaman doğru olan durumları anlatmak için kullanılır.',
        tipEn: 'Remember: for he, she, and it, add -s or -es to the main verb.',
        tipTr: 'Dikkat: he, she, it için fiile -s veya -es eklenir.',
        structure: [
            { label: 'Olumlu cümle', text: 'I / You / We / They + V1' },
            { label: 'He / She / It', text: 'He / She / It + V1 + s / es' },
            { label: 'Olumsuz cümle', text: 'I / You / We / They + do not + V1' },
            { label: 'Soru cümlesi', text: 'Do + I / you / we / they + V1?' }
        ],
        examples: [
            { en: 'I drink coffee every morning.', tr: 'Her sabah kahve içerim.' },
            { en: 'You study English every day.', tr: 'Sen her gün İngilizce çalışıyorsun.' },
            { en: 'We walk to school together.', tr: 'Biz birlikte okula yürürüz.' },
            { en: 'They play football on Sundays.', tr: 'Onlar Pazar günleri futbol oynarlar.' },
            { en: 'He watches TV after dinner.', tr: 'O akşam yemeğinden sonra TV izler.' },
            { en: 'She reads a book before bed.', tr: 'O yatmadan önce kitap okur.' },
            { en: 'It rains a lot in winter.', tr: 'Kışın çok yağmur yağar.' },
            { en: 'Do you like music?', tr: 'Müziği sever misin?' },
            { en: 'Does he go to work early?', tr: 'O erkenden işe gider mi?' },
            { en: 'We do not eat meat.', tr: 'Biz et yemeyiz.' }
        ]
    },
    'present-continuous': {
        title: 'Present Continuous',
        tag: 'Present',
        intro: 'Use the present continuous for actions happening now or around now.',
        usageEn: 'We use it for temporary actions, current situations, and plans arranged for the near future.',
        usageTr: 'Bu zaman, şu anda devam eden eylemler, geçici durumlar ve yakın gelecekte planlanmış olaylar için kullanılır.',
        tipEn: 'Use am/is/are + verb-ing for this tense.',
        tipTr: 'Bu zaman için am / is / are + fiil-ing formu kullanılır.',
        structure: [
            { label: 'Olumlu cümle', text: 'I + am + V-ing' },
            { label: 'Olumlu cümle', text: 'You / We / They + are + V-ing' },
            { label: 'Olumlu cümle', text: 'He / She / It + is + V-ing' },
            { label: 'Olumsuz cümle', text: 'am / is / are + not + V-ing' }
        ],
        examples: [
            { en: 'I am reading a book right now.', tr: 'Şu anda kitap okuyorum.' },
            { en: 'You are listening to music.', tr: 'Sen müzik dinliyorsun.' },
            { en: 'We are cooking dinner together.', tr: 'Biz birlikte akşam yemeği yapıyoruz.' },
            { en: 'They are playing outside.', tr: 'Onlar dışarıda oynuyorlar.' },
            { en: 'He is working on a project.', tr: 'O bir projede çalışıyor.' },
            { en: 'She is studying for an exam.', tr: 'O sınav için çalışıyor.' },
            { en: 'It is raining heavily.', tr: 'Şiddetli şekilde yağmur yağıyor.' },
            { en: 'Are you coming with us?', tr: 'Bizimle geliyor musun?' },
            { en: 'Is she sleeping now?', tr: 'O şimdi uyuyor mu?' },
            { en: 'We are not watching TV.', tr: 'Biz TV izlemiyoruz.' }
        ]
    },
    'present-perfect': {
        title: 'Present Perfect',
        tag: 'Present',
        intro: 'Use the present perfect to connect the past to the present.',
        usageEn: 'We use it for experiences, unfinished time periods, and actions that happened at an unknown time before now.',
        usageTr: 'Bu zaman, geçmişte yaşanmış deneyimleri, henüz bitmemiş zaman dilimlerini ve şu ana kadar olan bir zaman aralığında gerçekleşmiş olayları anlatmak için kullanılır.',
        tipEn: 'Use have/has + past participle.',
        tipTr: 'Bu zaman için have / has + fiilin 3. hali kullanılır.',
        structure: [
            { label: 'Olumlu cümle', text: 'I / You / We / They + have + V3' },
            { label: 'Olumlu cümle', text: 'He / She / It + has + V3' },
            { label: 'Olumsuz cümle', text: 'have / has + not + V3' },
            { label: 'Soru cümlesi', text: 'Have / Has + subject + V3?' }
        ],
        examples: [
            { en: 'I have finished my homework.', tr: 'Ödevimi bitirdim.' },
            { en: 'You have visited this city before.', tr: 'Bu şehri daha önce ziyaret ettin.' },
            { en: 'We have lived here for five years.', tr: 'Beş yıldır burada yaşıyoruz.' },
            { en: 'They have seen that movie.', tr: 'Onlar o filmi gördüler.' },
            { en: 'He has lost his keys.', tr: 'O anahtarlarını kaybetti.' },
            { en: 'She has written three emails.', tr: 'O üç e-posta yazdı.' },
            { en: 'It has been a long day.', tr: 'Uzun bir gün oldu.' },
            { en: 'Have you ever tried sushi?', tr: 'Daha önce sushi denedin mi?' },
            { en: 'Has she finished the report?', tr: 'Raporu bitirdi mi?' },
            { en: 'We have not met him yet.', tr: 'Onu henüz görmedik.' }
        ]
    },
    'present-perfect-continuous': {
        title: 'Present Perfect Continuous',
        tag: 'Present',
        intro: 'Use this tense to show an action that started in the past and is still continuing.',
        usageEn: 'We use it to emphasize duration, repetition, or the cause of a present result.',
        usageTr: 'Bu zaman, geçmişte başlayan ve hâlâ devam eden bir eylemi ve süresini vurgulamak için kullanılır.',
        tipEn: 'Use have/has been + verb-ing.',
        tipTr: 'Bu zaman için have / has been + fiil-ing kullanılır.',
        structure: [
            { label: 'Olumlu cümle', text: 'I / You / We / They + have been + V-ing' },
            { label: 'Olumlu cümle', text: 'He / She / It + has been + V-ing' },
            { label: 'Olumsuz cümle', text: 'have / has not been + V-ing' },
            { label: 'Soru cümlesi', text: 'Have / Has + subject + been + V-ing?' }
        ],
        examples: [
            { en: 'I have been studying for two hours.', tr: 'İki saattir çalışıyorum.' },
            { en: 'You have been waiting since morning.', tr: 'Sabah beri bekliyorsun.' },
            { en: 'We have been living here for years.', tr: 'Yıllardır burada yaşıyoruz.' },
            { en: 'They have been playing tennis all afternoon.', tr: 'Bütün öğleden sonra tenis oynuyorlar.' },
            { en: 'He has been working hard recently.', tr: 'Son zamanlarda çok çalışıyor.' },
            { en: 'She has been cooking since noon.', tr: 'Öğlen beri yemek yapıyor.' },
            { en: 'It has been raining all day.', tr: 'Bütün gün yağmur yağıyor.' },
            { en: 'Have you been feeling well?', tr: 'İyi hissediyor musun?' },
            { en: 'Has she been sleeping enough?', tr: 'Yeterince uyudu mu?' },
            { en: 'We have not been resting much.', tr: 'Çok dinlenmedik.' }
        ]
    },
    'simple-past': {
        title: 'Simple Past',
        tag: 'Past',
        intro: 'Use the simple past for finished actions in the past.',
        usageEn: 'We use it for completed actions, past routines, and situations that ended in the past.',
        usageTr: 'Bu zaman, geçmişte tamamlanmış olayları, geçmişteki alışkanlıkları ve sona ermiş durumları anlatmak için kullanılır.',
        tipEn: 'Regular verbs usually take -ed, but many common verbs are irregular.',
        tipTr: 'Düzenli fiiller genelde -ed alır; fakat birçok yaygın fiil düzensizdir.',
        structure: [
            { label: 'Olumlu cümle', text: 'Subject + V2' },
            { label: 'Olumsuz cümle', text: 'Subject + did not + V1' },
            { label: 'Soru cümlesi', text: 'Did + subject + V1?' }
        ],
        examples: [
            { en: 'I visited my uncle yesterday.', tr: 'Dün amcamı ziyaret ettim.' },
            { en: 'You watched a great movie.', tr: 'Harika bir film izledin.' },
            { en: 'We went to school by bus.', tr: 'Okula otobüsle gittik.' },
            { en: 'They arrived late last night.', tr: 'Geçen gece geç vardılar.' },
            { en: 'He cleaned the room.', tr: 'O odayı temizledi.' },
            { en: 'She cooked dinner alone.', tr: 'O akşam yemeğini tek başına yaptı.' },
            { en: 'It snowed last winter.', tr: 'Geçen kış kar yağdı.' },
            { en: 'Did you call your mother?', tr: 'Anneni aradın mı?' },
            { en: 'Did he finish the task?', tr: 'Görevi bitirdi mi?' },
            { en: 'We did not go out.', tr: 'Dışarı çıkmadık.' }
        ]
    },
    'past-continuous': {
        title: 'Past Continuous',
        tag: 'Past',
        intro: 'Use the past continuous for actions that were happening at a specific moment in the past.',
        usageEn: 'We use it when an action was in progress and another action interrupted it.',
        usageTr: 'Bu zaman, geçmişte bir anda devam eden bir eylemi anlatır; çoğu zaman başka bir eylem tarafından kesildiği durumlarda kullanılır.',
        tipEn: 'Use was/were + verb-ing.',
        tipTr: 'Bu zaman için was / were + fiil-ing kullanılır.',
        structure: [
            { label: 'Olumlu cümle', text: 'I / He / She / It + was + V-ing' },
            { label: 'Olumlu cümle', text: 'You / We / They + were + V-ing' },
            { label: 'Olumsuz cümle', text: 'was / were + not + V-ing' }
        ],
        examples: [
            { en: 'I was reading when she called.', tr: 'O çağırırken ben okuyordum.' },
            { en: 'You were sleeping at midnight.', tr: 'Sen gece yarısı uyuyordun.' },
            { en: 'We were studying together.', tr: 'Biz birlikte çalışıyorduk.' },
            { en: 'They were waiting for the bus.', tr: 'Onlar otobüs bekliyorlardı.' },
            { en: 'He was cooking dinner.', tr: 'O akşam yemeği yapıyordu.' },
            { en: 'She was listening to music.', tr: 'O müzik dinliyordu.' },
            { en: 'It was snowing outside.', tr: 'Dışarıda kar yağıyordu.' },
            { en: 'Were you watching TV?', tr: 'TV izliyor muydun?' },
            { en: 'Was he driving fast?', tr: 'O hızlı sürüyor muydu?' },
            { en: 'We were not talking.', tr: 'Biz konuşmuyorduk.' }
        ]
    },
    'past-perfect': {
        title: 'Past Perfect',
        tag: 'Past',
        intro: 'Use the past perfect to show that one past action happened before another past action.',
        usageEn: 'We use it to explain sequence in the past and show clear cause and effect.',
        usageTr: 'Bu zaman, geçmişte iki olay arasında öncelik ilişkisi kurmak ve neden-sonuç ilişkisini net göstermek için kullanılır.',
        tipEn: 'Use had + past participle.',
        tipTr: 'Bu zaman için had + fiilin 3. hali kullanılır.',
        structure: [
            { label: 'Olumlu cümle', text: 'Subject + had + V3' },
            { label: 'Olumsuz cümle', text: 'Subject + had not + V3' },
            { label: 'Soru cümlesi', text: 'Had + subject + V3?' }
        ],
        examples: [
            { en: 'I had left before the rain started.', tr: 'Yağmur başlamadan önce ayrılmıştım.' },
            { en: 'You had finished the work by noon.', tr: 'Öğleye kadar işi bitirmiştin.' },
            { en: 'We had eaten before the movie began.', tr: 'Film başlamadan önce yemiştik.' },
            { en: 'They had already gone home.', tr: 'Onlar çoktan eve gitmişlerdi.' },
            { en: 'He had lost his phone.', tr: 'Telefonunu kaybetmişti.' },
            { en: 'She had cleaned the kitchen.', tr: 'Mutfak temizlenmişti.' },
            { en: 'It had stopped raining.', tr: 'Yağmur durmuştu.' },
            { en: 'Had you seen that before?', tr: 'Bunu daha önce gördün mü?' },
            { en: 'Had he called you?', tr: 'Seni aradı mı?' },
            { en: 'We had not heard the news.', tr: 'Haberi duymamıştık.' }
        ]
    },
    'past-perfect-continuous': {
        title: 'Past Perfect Continuous',
        tag: 'Past',
        intro: 'Use this tense to show a past action that had been continuing before another past event.',
        usageEn: 'We use it to emphasize the duration of an action before another point in the past.',
        usageTr: 'Bu zaman, geçmişte başka bir olaydan önce belirli bir süre devam eden eylemleri vurgulamak için kullanılır.',
        tipEn: 'Use had been + verb-ing.',
        tipTr: 'Bu zaman için had been + fiil-ing kullanılır.',
        structure: [
            { label: 'Olumlu cümle', text: 'Subject + had been + V-ing' },
            { label: 'Olumsuz cümle', text: 'Subject + had not been + V-ing' },
            { label: 'Soru cümlesi', text: 'Had + subject + been + V-ing?' }
        ],
        examples: [
            { en: 'I had been waiting for an hour.', tr: 'Bir saattir bekliyordum.' },
            { en: 'You had been studying all night.', tr: 'Bütün gece çalışıyordun.' },
            { en: 'We had been living there for years.', tr: 'Yıllardır orada yaşıyorduk.' },
            { en: 'They had been working since morning.', tr: 'Sabah beri çalışıyorlardı.' },
            { en: 'He had been running for ten minutes.', tr: 'On dakika koşuyordu.' },
            { en: 'She had been reading the book.', tr: 'Kitabı okuyordu.' },
            { en: 'It had been snowing for hours.', tr: 'Saatlerdir kar yağıyordu.' },
            { en: 'Had you been waiting long?', tr: 'Uzun süre beklemiş miydin?' },
            { en: 'Had he been sleeping?', tr: 'Uyuyor muydu?' },
            { en: 'We had not been resting.', tr: 'Dinlenmiyorduk.' }
        ]
    },
    'simple-future': {
        title: 'Simple Future',
        tag: 'Future',
        intro: 'Use the simple future for decisions, promises, predictions, and future facts.',
        usageEn: 'We use it to talk about future plans, predictions and spontaneous decisions.',
        usageTr: 'Bu zaman, gelecek planlarını, tahminleri ve ani kararları anlatmak için kullanılır.',
        tipEn: 'Use will + base verb for simple future.',
        tipTr: 'Bu zaman için will + fiilin temel hali kullanılır.',
        structure: [
            { label: 'Olumlu cümle', text: 'Subject + will + V1' },
            { label: 'Olumsuz cümle', text: 'Subject + will not + V1' },
            { label: 'Soru cümlesi', text: 'Will + subject + V1?' }
        ],
        examples: [
            { en: 'I will call you tomorrow.', tr: 'Yarın seni arayacağım.' },
            { en: 'You will love this city.', tr: 'Bu şehri seveceksin.' },
            { en: 'We will visit our grandparents.', tr: 'Büyük ebeveynlerimizi ziyaret edeceğiz.' },
            { en: 'They will arrive at noon.', tr: 'Öğleye doğru gelecekler.' },
            { en: 'He will help us later.', tr: 'O bize sonra yardım edecek.' },
            { en: 'She will start a new job.', tr: 'Yeni bir işe başlayacak.' },
            { en: 'It will be sunny tomorrow.', tr: 'Yarın güneşli olacak.' },
            { en: 'Will you come with me?', tr: 'Benimle gelir misin?' },
            { en: 'Will he finish on time?', tr: 'Zamanında bitirecek mi?' },
            { en: 'We will not forget this.', tr: 'Bunu unutmayacağız.' }
        ]
    },
    'future-continuous': {
        title: 'Future Continuous',
        tag: 'Future',
        intro: 'Use the future continuous to describe an action that will be in progress at a specific time in the future.',
        usageEn: 'We use it for plans, arrangements, and actions that will be happening at a future moment.',
        usageTr: 'Bu zaman, belirli bir gelecekte bir anda devam edecek eylemleri anlatmak için kullanılır.',
        tipEn: 'Use will be + verb-ing.',
        tipTr: 'Bu zaman için will be + fiil-ing kullanılır.',
        structure: [
            { label: 'Olumlu cümle', text: 'Subject + will be + V-ing' },
            { label: 'Olumsuz cümle', text: 'Subject + will not be + V-ing' },
            { label: 'Soru cümlesi', text: 'Will + subject + be + V-ing?' }
        ],
        examples: [
            { en: 'I will be traveling at this time tomorrow.', tr: 'Yarın bu saatte seyahat ediyor olacağım.' },
            { en: 'You will be waiting outside.', tr: 'Dışarıda bekliyor olacaksın.' },
            { en: 'We will be working late tonight.', tr: 'Bu gece geç saatlere kadar çalışıyor olacağız.' },
            { en: 'They will be studying for the exam.', tr: 'Onlar sınav için çalışıyor olacaklar.' },
            { en: 'He will be sleeping at midnight.', tr: 'Gece yarısı uyuyor olacak.' },
            { en: 'She will be cooking dinner.', tr: 'Akşam yemeği yapıyor olacak.' },
            { en: 'It will be raining then.', tr: 'O zaman yağmur yağıyor olacak.' },
            { en: 'Will you be coming soon?', tr: 'Yakında gelecek misin?' },
            { en: 'Will he be waiting for us?', tr: 'Bizi bekliyor olacak mı?' },
            { en: 'We will not be staying long.', tr: 'Uzun süre kalmayacağız.' }
        ]
    },
    'future-perfect': {
        title: 'Future Perfect',
        tag: 'Future',
        intro: 'Use the future perfect to show that an action will be complete before a certain future time.',
        usageEn: 'We use it to talk about completed actions by a future point.',
        usageTr: 'Bu zaman, belirli bir gelecekte bir olayın tamamlanmış olacağını anlatmak için kullanılır.',
        tipEn: 'Use will have + past participle.',
        tipTr: 'Bu zaman için will have + fiilin 3. hali kullanılır.',
        structure: [
            { label: 'Olumlu cümle', text: 'Subject + will have + V3' },
            { label: 'Olumsuz cümle', text: 'Subject + will not have + V3' },
            { label: 'Soru cümlesi', text: 'Will + subject + have + V3?' }
        ],
        examples: [
            { en: 'I will have finished by noon.', tr: 'Öğleye kadar bitirmiş olacağım.' },
            { en: 'You will have left before dinner.', tr: 'Akşam yemeğinden önce ayrılmış olacaksın.' },
            { en: 'We will have built the house by next year.', tr: 'Gelecek yıla kadar evi bitirmiş olacağız.' },
            { en: 'They will have arrived by then.', tr: 'O zamana kadar varmış olacaklar.' },
            { en: 'He will have completed the task.', tr: 'Görevi tamamlamış olacak.' },
            { en: 'She will have read the book.', tr: 'Kitabı okumuş olacak.' },
            { en: 'It will have stopped raining.', tr: 'Yağmur durmuş olacak.' },
            { en: 'Will you have finished by six?', tr: 'Altıya kadar bitirmiş olacak mısın?' },
            { en: 'Will he have left already?', tr: 'O çoktan ayrılmış olacak mı?' },
            { en: 'We will not have seen him yet.', tr: 'Onu henüz görmemiş olacağız.' }
        ]
    },
    'future-perfect-continuous': {
        title: 'Future Perfect Continuous',
        tag: 'Future',
        intro: 'Use this tense to show how long an action will have been happening by a future point.',
        usageEn: 'We use it to emphasize duration before another time in the future.',
        usageTr: 'Bu zaman, gelecekte başka bir zamana kadar belirli bir süre devam eden eylemleri vurgulamak için kullanılır.',
        tipEn: 'Use will have been + verb-ing.',
        tipTr: 'Bu zaman için will have been + fiil-ing kullanılır.',
        structure: [
            { label: 'Olumlu cümle', text: 'Subject + will have been + V-ing' },
            { label: 'Olumsuz cümle', text: 'Subject + will not have been + V-ing' },
            { label: 'Soru cümlesi', text: 'Will + subject + have been + V-ing?' }
        ],
        examples: [
            { en: 'I will have been working here for five years.', tr: 'Beş yıldır burada çalışıyor olacağım.' },
            { en: 'You will have been waiting for long.', tr: 'Uzun süre bekliyor olacaksın.' },
            { en: 'We will have been traveling all day.', tr: 'Bütün gün seyahat ediyor olacağız.' },
            { en: 'They will have been studying for hours.', tr: 'Saatlerdir çalışıyor olacaklar.' },
            { en: 'He will have been running for ten minutes.', tr: 'On dakika koşuyor olacak.' },
            { en: 'She will have been cooking since noon.', tr: 'Öğlen beri yemek yapıyor olacak.' },
            { en: 'It will have been raining for a while.', tr: 'Bir süredir yağmur yağıyor olacak.' },
            { en: 'Will you have been waiting long?', tr: 'Uzun süre bekliyor olacak mısın?' },
            { en: 'Will he have been sleeping?', tr: 'Uyuyor olacak mı?' },
            { en: 'We will not have been resting.', tr: 'Dinlenmiyor olacağız.' }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {

    const heroButton = document.getElementById('startButton');
    const cardButtons = document.querySelectorAll('.card button');
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

    const scrollToSection = (targetId) => {

        const target = document.querySelector(targetId);

        if (target) {

            target.scrollIntoView({

                behavior: 'smooth',

                block: 'start'

            });

        }

    };

    if (heroButton) {

        heroButton.addEventListener('click', () => scrollToSection('#learn'));

    }

    cardButtons.forEach((button) => {

        button.addEventListener('click', () => scrollToSection('#learn'));

    });

    ctaButtons.forEach((button, index) => {

        button.addEventListener('click', () => {

            if (index === 0) {

                scrollToSection('#learn');

            } else {

                scrollToSection('#journey');

            }

        });

    });

    const cards = document.querySelectorAll('.card, .feature, .tense-card, .stat-card');

    cards.forEach((card) => {

        card.addEventListener('mouseenter', () => {

            card.style.transform = 'translateY(-6px)';

        });

        card.addEventListener('mouseleave', () => {

            card.style.transform = '';

        });

    });

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach((link) => {

        link.addEventListener('click', (event) => {

            event.preventDefault();

            const text = link.textContent.trim().toLowerCase();

            if (text === 'home') {

                window.location.href = 'index.html';

            } else if (text === 'learn') {

                window.location.href = 'index.html#learn';

            }

        });

    });

    const tenseCards = document.querySelectorAll('.tense-card');

    tenseCards.forEach((card) => {

        card.style.cursor = 'pointer';

        card.addEventListener('click', () => {

            const tenseKey = card.dataset.tense;
            window.location.href = `tense.html?tense=${encodeURIComponent(tenseKey)}`;

        });

    });

    const detailPage = document.querySelector('.detail-page');

    if (detailPage) {

        const params = new URLSearchParams(window.location.search);
        const tenseKey = params.get('tense') || 'simple-present';
        const tense = TENSE_DATA[tenseKey] || TENSE_DATA['simple-present'];

        const detailTag = document.getElementById('detailTag');
        const detailTitle = document.getElementById('detailTitle');
        const detailIntro = document.getElementById('detailIntro');
        const structureBody = document.getElementById('structureBody');
        const usageText = document.getElementById('usageText');
        const usageTextTr = document.getElementById('usageTextTr');
        const exampleList = document.getElementById('exampleList');
        const tipText = document.getElementById('tipText');
        const tipTextTr = document.getElementById('tipTextTr');

        if (detailTag) detailTag.textContent = tense.tag;
        if (detailTitle) detailTitle.textContent = tense.title;
        if (detailIntro) detailIntro.textContent = tense.intro;
        if (structureBody) {

            structureBody.innerHTML = tense.structure.map((item) => `
                <div class="structure-item">
                    <span class="structure-label">${item.label}</span>
                    <div class="structure-text">${item.text}</div>
                </div>
            `).join('');

        }

        if (usageText) usageText.textContent = tense.usageEn;
        if (usageTextTr) usageTextTr.textContent = tense.usageTr;
        if (tipText) tipText.textContent = tense.tipEn;
        if (tipTextTr) tipTextTr.textContent = tense.tipTr;
        if (exampleList) {

            exampleList.innerHTML = tense.examples.map((item) => `
                <li class="example-item">
                    <div class="example-en">${item.en}</div>
                    <div class="example-tr">${item.tr}</div>
                </li>
            `).join('');

        }

    }

});
