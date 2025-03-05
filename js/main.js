const timelineEvents = [
    {
        date: 'ב\u05F3 ניסן תשפ"ד',
        title: 'הפעם הראשונה שנפגשנו',
        description: `זה היה ערב עם נוף ליער, כזה שהעצים בו לחשו סיפורים ישנים והאוויר היה מלא בהבטחות חדשות. <br> 
                      זה היה ערב שבו נפגשנו פעם ראשונה, וכל דבר נראה כמו סיפור מתוק של ספר ילדים. <br>
                      הייתה שם התרגשות באוויר, מין תחושה לא מוסברת של "זה זה". <br>
                      כדי להוסיף קצת צחוק, הגעתי עם מיץ ענבים ומנה חמה – שילוב מנצח… או לפחות ככה חשבתי. <br>
                      את צחקת – ואני לא בטוח אם זה היה בגלל היצירתיות או סתם כי זה היה הדבר הכי גרוע שאפשר להביא לדייט ראשון. <br>
                      אבל איכשהו, בין המבוכה, הצחוק והחום בעיניים שלך, ידעתי שזה הרגע שבו הכול מתחיל. <br>
                      כי לפעמים, דייטים גרועים הם הסיפורים הכי טובים. ❤️

`,
    },
    {
        date: 'י\u05F3 ניסן תשפ"ד',
        title: 'אני אוהב אותך הראשון שלנו',
        description: `אחרי יום שלם של בילויים ביחד, פיקניק בים, אוכל טעים ודייט מוצלח שלא נשכח. <br>
                      שתינו מתהלכים בפרדסים עם ידיים מוחזקים, אמרנו נשב רגע על האבנים. <br>
                      אני מחבק אותך בזרועותיי את נשענת עליי, שיר של שלמה מתנגן ברקע. <br>
                      אני מסתכל עלייך אני רואה את החיוך שיוצא לך מהשפתיים, את מחכה שאני יגיד. <br>
                      הרגשתי את הפרפרים באוויר את הכאב בטן המושלם שמשהו קורה. <br>
                      "אני אוהב אותך", "אני אוהבת אותך", המבט שלנו בעיניים לא הסתיים. <br>
                      זה הרגיש טוב, זה הרגיש מושלם, זה הרגיש אותך, את האהבה שלך. ❤️`
    
    },
    {
        date: 'ח\u05F3 אייר תשפ"ד',
        title: 'הנשיקה הראשונה שלנו',
        description: `ישבנו יחד על המצפה, מביטים בגלים החשוכים ובאורות המרצדים של העיר. <br>
                      הרוח הקרירה עטפה אותנו, אבל הלבבות שלנו בערו. <br>
                      אני היבטתי בך, העיניים שלנו נפגשו, הרגשתי שזה הרגע, המרחק בינינו הצטמצם לאט. <br>
                      את חייכת, אני חייכתי. אני התקרבתי, את הגבת. הנשיקה הראשונה שנו, רכה, עמוקה, מלאה ברגש. <br>
                      העולם נעצר. רק אנחנו, הים, ורעש הגלים שלחשו סוד ישן של אהבה. <br>
                      רגע שנזכור בלב, לנצח. ❤️`
    
    },

]

const galleryPhotos = [
    {
        url: 'img/1.jpeg',
        caption:`לך היה בית ספר בלילה, <br> 
                לא היה לך כיף רצית שאני יבוא <br>
                 ושרפנו את הלילה עד הבוקר.`
    },
    {
        url: 'img/2.jpeg',
        caption:`את לא הרגשת טוב, <br>
                 שרפנו את הלילה שלנו <br>
                 ביחד בחדר שלך <br>
                 אני הבאתי לך פרחים <br>
                  כשהגיע הבוקר נסעתי הביתה.`
    },
    {
        url: 'img/3.jpeg',
        caption: `יום של שיעור נהיגה שלישי, <br>
                  שתינו קופצים לקניון <br>
                  לסיבוב של קניית בגדים <br>
                  הסתובבנו צחקנו קנינו שתינו.`
    },
    {
        url: 'img/4.jpeg',
        caption: `אחרי תאוריה מוצלחת, <br>
                  יצאנו לחגוג את הניצחון <br>
                  כמה ששמחנו באותו רגע <br>
                  ניצחון מוחץ למנצחים.`
    },
    {
        url: 'img/5.jpeg',
        caption: `שתינו בים פעם ראשונה ביחד, <br>
                  היה לנו מושלם <br>
                  רק שתפסו אותנו על חם<br>
                  גם שם ידענו לחייך ולשמוח.`
    },
    {
        url: 'img/6.jpeg',
        caption: `אנחנו בהופעה ראשונה <br>
                  לפני הטיסה לקנדה הלילה שלנו <br>
                  לאחר ההופעה דיברנו ברכב <br>
                  היה לנו מאוד קשה לעזוב.`
    },
    {
        url: 'img/7.jpeg',
        caption: `סרט ראשון באוטו <br>
                  רק אני ואת, מסך אחד <br> 
                  שתיה חטיפים וסרט מושלם.`
    },
    {
        url: 'img/8.jpeg',
        caption: `את בקנדה, השעות הקשות <br>
                  הגעגוע רק גובר וגובר <br>
                  האהבה והחיוכים לא מפסיקים.`
    },
    {
        url: 'img/9.jpeg',
        caption: `אנחנו אוהבים לקחת סיכונים <br>
                  2:00 שתינו ברכב מתגעגעים <br>
                  עד אור ראשון אנחנו מחובקים <br>
                  רק אהבה באוויר.`
    },
    {
        url: 'img/10.jpeg',
        caption: `את מתקשרת אליי בוא מהר <br>
                  אני מגיע הכי מהר שאפשר <br>
                  משהו קרה שם, יש לך אותי <br>
                  אני שומר עלייך תמיד.`
    },
    {
        url: 'img/11.jpeg',
        caption: `הלילה הראשון שלנו ביחד <br>
                  כזה לילה אנחנו לא נשכח <br>
                  דיברנו צחקנו השתוללנו <br>
                  הכל היה כל כך מושלם.`
    },
    {
        url: 'img/12.jpeg',
        caption: `את לא מרגישה טוב <br>
                  את נרדמת עליי, אני עוטף אותך<br>
                  הדבר שרץ לי בראש זה <br>
                  מאיפה להתחיל לאכול אותך.`
    },
    {
        url: 'img/13.jpeg',
        caption: `לאכול זה תמיד כיף ביחד <br>
                  המבורגר מושלם ואת br> 
                  כשאת אוכלת אני מתאהב בך<br>
                  כל פעם מחדש.`
    },
    {
        url: 'img/14.jpeg',
        caption: `התמונה יפה, הלבוש שלי מזעזע <br>
                  עשיתי לך תרגיל, נתתי לך לחשוב שלא אגיע, <br>
                  ובסוף הפתעתי אותך והגעתי בכל זאת. <br>
                  ואת? מושלמת כרגיל.`
    },
    {
        url: 'img/15.jpeg',
        caption: `שתי כוסות יין לבן, שקיעה בשמיים <br>
                  את נשענת לי על הברכיים <br>
                  מכתב אהבה הבאתי לך <br>
                  הרגשתי בגן עדן, רק אנחנו והשקיעה.`
    },
    {
        url: 'img/16.jpeg',
        caption: `הנשיקה הראשונה שלנו <br>
                  החיוך אומר הכל, רגע קסום שלא נשכח <br>
                  הפרפרים עד עכשיו ולתמיד צפים לי בבטן <br>
                  את הטעם הכי טעים שיש.`
    },
    {
        url: 'img/17.jpeg',
        caption: `דייט שני, יום שלם של רק שתינו <br>
                  אז אמרנו, הדייט הכי מושלם שקיימנו <br>
                  ים, שמש, פרות <br>
                  אותך אני לא יכול להפסיק לראות.`
    },
    {
        url: 'img/18.jpeg',
        caption: `דייט רביעי אם אני לא טועה<br>
                  את האמת היה מזעזע <br>
                  לקראת הסוף נגיעות קטנות בידיים <br>
                  שהפכו את הרגע לקסום <br>
                  באותו יום קיבלתי את הנשיקה הראשונה שלך בלחי.`
    },
]

let currentPhotoIndex = 0

function createGallery() {
    const photosContainer = document.querySelector('.photos-container')
    photosContainer.innerHTML = ''

    galleryPhotos.forEach((photo, index) => {
        const photoElement = document.createElement('div');
        photoElement.className = `photo-item ${index === 0 ? 'active' : ''}`
        photoElement.innerHTML = `
            <img src="${photo.url}">
            <p>${photo.caption}</p>
        `
        photosContainer.appendChild(photoElement);
    })

    const prevButton = document.querySelector('.carousel-button.prev')
    const nextButton = document.querySelector('.carousel-button.next')

    prevButton.addEventListener('click', showPreviousPhoto)
    nextButton.addEventListener('click', showNextPhoto)
}

function showPreviousPhoto() {
    const photos = document.querySelectorAll('.photo-item')
    photos[currentPhotoIndex].classList.remove('active')
    
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length
    photos[currentPhotoIndex].classList.add('active')
}

function showNextPhoto() {
    const photos = document.querySelectorAll('.photo-item')
    photos[currentPhotoIndex].classList.remove('active')
    
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photos[currentPhotoIndex].classList.add('active')
}

function createTimeline() {
    const timelineContainer = document.querySelector('.timeline-container')
    timelineEvents.forEach(event => {
        const eventElement = document.createElement('div')
        eventElement.className = 'timeline-event'
        eventElement.innerHTML = `
            <h3>${event.title}</h3>
            <div class="event-date">${event.date}</div>
            <p>${event.description}</p>
        `
        timelineContainer.appendChild(eventElement)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    createTimeline()
    createGallery()
})
