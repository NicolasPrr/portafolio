export const data = {
    name: "Nicolás Parra Ramos",
    university: "Universidad Nacional de Colombia",
    cerificate: "Ingeniero de sistemas y computación",
    phone: '(+57) 3213326683',
    email: 'niparrara@gmail.com',
    repository: 'https://github.com/NicolasPrr',
    linkedin: 'https://www.linkedin.com/in/nicol%C3%A1s-parra-ramos-366910140/',
    src: 'https://media-exp1.licdn.com/dms/image/C5603AQEbgGX19uyK1A/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=98XwweCJkXtFDaQRLM666tX9zGbVGkaIhL85nMCNWQI',
    about: 'Soy Desarrollador  con experiencia desde el 2017 en desarrollo de paginas\
        web trabajando tanto en backend como en frontend.'
}

export interface TLanguage  {
    name: string,
    frameworks: string[],   
    experience: string,
}
export interface TIdiom  {
    name: string,
    level: string,   
}
export const idiomList: TIdiom[] = [
    {name: 'Inglés', level: 'B1' }
]
export type ProjectItem ={
    title: string,
    description: string,
    dates: string,
    src: string[],
    libraries?: string[],
    url?: string,
    repo?: string,
}
export const projectData : ProjectItem[]  = [
    {
        title: 'Proyecto de vigilancia cientifica',
        description: 'Descripcion del proyectoDescripcion del proyecto',
        dates: 'Febrero 2020 - Octubre 2020 ',
        src: [

            'https://drive.google.com/uc?id=1z0rBa3jwDYQ9JuIvzkaN2Ft3FZGRzldb',
            'https://drive.google.com/uc?id=1AT2jfAoZ59fsm9gsxzPAtcRTLRxS4eS_',
            'https://drive.google.com/uc?id=10TaKl426VaX132tJyAw3AXzWid0H0e5D',
            'https://drive.google.com/uc?id=1LP5b478TljnHOXLscKWOIg9lq0_Y-r5r',
            'https://drive.google.com/uc?id=1Oh0gJWpVIrGwEj_J6jrrY9fbjaHtLoAa',
        ],
        url: 'https://horus.unal.edu.co',
        libraries: ['React', 'Ant design', 'FlexBox', 'BizCharts'] 

    },
    {
        title: 'Proyecto Telemedicina UN',
        description: 'Descripcion del proyectoDescripcion del proyecto,  del proyectoDescripcion del proyecto,  del proyectoDescripcion del proyecto,  del proyectoDescripcion del proyecto',
        dates: 'Febrero 2020 - Octubre 2020 ',
        src: [

            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        ],

    },
]

export const languageList: TLanguage[] = [
    {
        name: 'Ruby',
        experience: '6 meses',
        frameworks: ['Ruby On Rails', 'Laravel'],

    },
    {
        name: 'Javascript',
        frameworks: ['React.js', 'React Native', 'Express'],
        experience: '6 meses',
    },
    {
        name: 'Typescript',
        frameworks: ['Nest.js', 'Angular'],
        experience: '6 meses',
    },
    {
        name: 'Databases',
        frameworks: ['MySQL', 'MongoDB'],
        experience: '6 meses',
    },
    {
        name: 'Python',
        frameworks: ['Tensorflow', 'Keras'],
        experience: '6 meses',
    },
]