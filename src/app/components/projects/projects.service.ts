import { MediaType } from '../../shared/atoms/image-slider/image-slider.component';

export const projectsData = [
  {
    name: 'Records management system',
    description: `
      This project is for aircraft document management.
      It's a completely new domain for a huge system.
      Quite a challenging microservice which required complex design decisions and the highest code quality. More than 90% of the source code was covered by tests.
      Each change passed multiple code reviews from different teams.
    `,
    technologies: [
      '.Net Core / C#',
      'CQRS',
      'Entity Framework Core',
      'Autofac',
      'Angular',
      'RxJs',
      'NgRx',
      'MS SQL Server'
    ],
    media: [
      {
        src: 'assets/portfolio/b/1.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/b/2.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/b/3.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/b/4.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/b/5.png',
        type: MediaType.img
      }
    ]
  },
  {
    name: 'Manage business initiatives',
    description: `
      The mission of this project was to keep track of your business.
      As a business holder, you could define your business initiatives, define custom KPI,
      keep track of money spendings and gainings, manage people working on initiatives, manage tasks, and a lot more.
      Also, you could see a bunch of reports and predictions about the future of your business.
      You could easily spot unprofitable initiatives and take some decisions before it gets too late.
      The project got great success and is widely used across the whole world.
      I was the lead developer on this project and was responsible for designing and implementing every new feature request.
    `,
    technologies: [
      '.Net Framework',
      'ASP.NET MVC',
      'C#',
      'Entity Framework',
      'Microsoft SQL Server',
      'IIS'
    ],
    media: [
      {
        src: 'assets/portfolio/m1/1.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/m1/2.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/m1/3.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/m1/4.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/m1/5.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/m1/6.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/m1/7.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/m1/8.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/m1/9.mp4',
        type: MediaType.video
      },
      {
        src: 'assets/portfolio/m1/10.mp4',
        type: MediaType.video
      },
    ]
  },
  {
    name: 'Manage business initiatives v2',
    description: `
      The previous project became so successful so a decision was taken
      to create a new version of the project from scratch using cut-edge
      technologies - which allowed us to implement new features quicker and increase scalability.
      It wasn't just rewriting the existing code.
      The entire system has been designed and implemented with a fresh approach and modern architectural patterns.
      The frontend has been divided from the backend with the CQRS on board and many other cool things.
    `,
    technologies: [
      '.Net Core',
      'C#',
      'CQRS',
      'Entity Framework Core',
      'Autofac',
      'Angular',
      'TypeScript',
      'RxJs',
      'MS SQL Server'
    ],
    media: [
      {
        src: 'assets/portfolio/m2/1.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/m2/2.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/m2/3.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/m2/4.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/m2/5.png',
        type: MediaType.img
      },
    ]
  },
  {
    name: 'IoT designer',
    description: `
       It allows you to create custom IoT logic cases and complex cause and effect suitcases.
       You could connect all your IoT devices to one network and make them communicate with each other.
       Example scenario: When a thermometer detects room temperature gets lower than 19 degrees it sends a command to a heating system to turn it ON and when the temperature becomes more than 21 degrees - to turn it OFF. But if it detects temperature more than 23 degrees it could steer air conditioning as well.
       You could configure as many cases as you want in a very easy graphical designer,
       which analyzes your block scheme and automatically generates source code that will do all work in a cloud.
    `,
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'Canvas',
      'Code generation'
    ],
    media: [
      {
        src: 'assets/portfolio/Mozaiq/1.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/Mozaiq/2.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/Mozaiq/3.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/Mozaiq/4.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/Mozaiq/5.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/Mozaiq/6.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/Mozaiq/7.mp4',
        type: MediaType.video
      },
      {
        src: 'assets/portfolio/Mozaiq/8.mp4',
        type: MediaType.video
      }
    ]
  },
  {
    name: 'Alternative auth system',
    description: `
      It's an innovative and secure way to log into your account.
      When you open the page you will only see a QR code.
      You need to open an app on your smartphone and scan the QR.
      As soon as you scan the code, the web application will take you to your account with zero clicks.
      For demonstration purposes, there was added an ability to work with cloud accounts.
      It's a great way to log in if you are working on public networks because you don't have to enter your master password.
    `,
    technologies: [
      '.Net Core',
      'Signal R',
      'Web Socket',
      'Angular',
      'JWT',
      'React Native'
    ],
    media: [
      {
        src: 'assets/portfolio/Prox/1.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/Prox/2.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/Prox/3.png',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/Prox/4.png',
        type: MediaType.img
      }
    ]
  },
  {
    name: 'Platform for improving English pronunciation',
    description: `
      The platform aims to improve your English pronunciation.
      You can search for any word difficult for you and listen to the correct pronunciation and see a visual representation of the sound - Fourier transform is used for this purpose.
      Then you are supposed to repeat the word and the application will record your voice and visualize it as well.
      In this way, you could see the difference between charts and adjust your pronunciation as much as possible.
      It also provides video lessons for sounds that are the most complicated for you.
    `,
    technologies: [
      'Angular',
      'Sound API',
      'Canvas',
      'SCSS'
    ],
    media: [
      {
        src: 'assets/portfolio/ShameLess/1.jpg',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/ShameLess/2.jpg',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/ShameLess/3.jpg',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/ShameLess/4.jpg',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/ShameLess/5.jpg',
        type: MediaType.img
      },
      {
        src: 'assets/portfolio/ShameLess/6.jpg',
        type: MediaType.img
      }
    ]
  }
];
