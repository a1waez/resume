// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяц',
  address: '32 baza м.Одеса',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
          work on a new project I learn the domain and try to understand the idea of the project. Good team
          player, every colleague is a friend to me.`,
      },

      expirience: {
        title: 'Other expirience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
            tournament position, goals etc), analyzing by simple mathematics models and preparing probability
            for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })

  // ================================================================

  // ================================================================

  //              ↙ тут вводимо шлях (PATH) до сторінки
  router.get('/skills', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('skills', {
      // ↙ сюди вводимо JSON дані

      page: {
        title: 'Resume | Skills',
      },

      header,

      main: {
        skills: [
          {
            name: 'HTML',
            point: 10,
            isTop: true,
          },
          {
            name: 'Heandlebars',
            point: 8,
            isTop: true,
          },
          {
            name: 'VS Code & NPM',
            point: 9,
            isTop: false,
          },
          {
            name: 'Git & Terminal',
            point: 7,
          },
          {
            name: 'React.js',
            point: 0,
          },
          {
            name: 'PHP',
            point: null,
          },
        ],
        hobbies: [
          {
            name: 'CSGO',
            isMain: true,
          },
          {
            name: 'Fortnite',
            isMain: true,
          },
          {
            name: 'ETS II',
            isMain: true,
          },
        ],
      },
      footer,
    })
  })

  router.get('/education', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('education', {
      // ↙ сюди вводимо JSON дані

      page: {
        title: 'Resume | Education',
      },

      header,

      main: {
        education: [
          {
            name: 'Одеська міжнародна академія',
            isEnd: true,
          },
          {
            name: 'Національний університет "Одеська політехніка"',
            isEnd: true,
          },
          {
            name: 'Одеський державний екологічний університет',
            isEnd: false,
          },
          {
            name: 'Державний університет інтелектуальних технологій і зв`язку',
            isEnd: false,
          },
        ],
        certificates: [
          {
            name: 'Футбол',
            id: 2678,
          },
          {
            name: 'Баскетбол',
            id: 1780,
          },
          {
            name: 'Гольф',
            id: 9045,
          },
        ],
      },

      footer,
    })
  })
})

// ================================================================

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'щось об резюме',
              stackAmount: 2,
              awardAmount: 4,

              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awards: [
                {
                  name: 'Вооружен до зубов-Впервые модифицируйте оружие',
                },
                {
                  name: `Чертовски прелестно Завершите ограбление "Украинское дело" на уровне сложности "Нормально" или выше`,
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bootstrap', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('bootstrap', {
    layout: 'bootstrap',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task22', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task22', {
    layout: 'bootstrap',

    page_header: {
      title: 'InnovaMind',
      description: 'Welcome to our wonderful community',
    },
    section: {
      about_us: {
        title_list: {
          main: 'InnovaMind',
          sub: 'InnovaMind is a forward-thinking startup focused on innovation. We are dedicated to creating efficient and powerful software through the use of first-class functions.',
        },
        button: { text: 'Show more' },
      },
      advantage: {
        title: 'Advantage',
        efficiency: {
          title: 'Efficiency',
          sub_title: 'Streamline your software development',
          description:
            'Streamline your software development with our innovative platform...',
          button: 'Show more',
        },
        innovation: {
          title: 'Innovation',
          sub_title:
            'Forward-thinking approach to programming',
          description:
            ' Stay ahead of the curve with our forward-thinking approach to programming...',
          button: 'Show more',
        },
        collaboration: {
          title: 'Collaboration',
          sub_title: 'Connect with like-minded developers',
          description:
            'Connect with a community of like-minded developers to share knowledge and insights...',
          button: 'Show more',
        },
      },
      agreement: {
        title: 'Terms of use',
        info: {
          sub_title: 'Check out our requirements',
          detail: {
            text: 'By using or accessing the service, you agree to be bound by the terms and conditions outlined in the agreement.',
            button: 'Аccept',
          },
        },
      },
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
