export default {
  global: {
    componenteFormativo:
      'Aspectos importantes de nutrición y enfermedades causadas por una mala alimentación',
    descripcionCurso:
      'El componente formativo explica la historia de la alimentación, describe los componentes esenciales como carbohidratos, proteínas, grasas, vitaminas y minerales, y destaca las enfermedades causadas por una mala alimentación, como la obesidad, la diabetes y los problemas cardiovasculares. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Historia de los alimentos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Componentes de los alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Carbohidratos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Proteínas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Grasas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Vitaminas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Minerales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Enfermedades causadas por mala alimentación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Historia de los alimentos',
      referencia:
        'Diana Uribe (2023). Historia de los Alimentos I.  [Archivo de video] YouTube.',
      tipo: 'Pódcast',
      link: 'https://www.youtube.com/watch?v=_wzbrO1-zzY&ab_channel=DianaUribe',
    },
    {
      tema: 'Carbohidratos',
      referencia:
        'A Cierta Ciencia. (2022). Carbohidratos ¿Qué son?  Funciones  EJEMPLOS  [Fácil y Rápido] | BIOLOGÍA |  [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=9_p8ucAG3Iw&ab_channel=ACiertaCiencia',
    },
    {
      tema: 'Vitaminas',
      referencia:
        'Sé Curioso — TED-Ed. (2017). ¿Cuál es el valor de las vitaminas? - Ginnie Trinh Nguyen. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=n1zLjStkLxA&ab_channel=S%C3%A9Curioso%E2%80%94TED-Ed',
    },
    {
      tema: 'Enfermedades causadas por mala alimentación',
      referencia:
        'AGENCIA EFE (2019). La mala alimentación mata más que el tabaco. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=GjSIx1kVBeA&ab_channel=BBCNewsMundo',
    },
  ],
  glosario: [
    {
      termino: 'Carbohidratos',
      significado:
        'nutrientes que proporcionan energía al cuerpo. se dividen en monosacáridos, disacáridos, oligosacáridos y polisacáridos.',
    },
    {
      termino: 'Diabetes',
      significado:
        'enfermedad en la que el cuerpo no produce suficiente insulina o no puede utilizarla correctamente, lo que resulta en niveles elevados de glucosa.',
    },
    {
      termino: 'Enfermedades cardiovasculares',
      significado:
        'afecciones que afectan el corazón y los vasos sanguíneos, a menudo causadas por la acumulación de grasas en las arterias.',
    },
    {
      termino: 'Grasas insaturadas',
      significado:
        'tipo de grasa considerada saludable que ayuda a reducir el colesterol malo en la sangre.',
    },
    {
      termino: 'Grasas saturadas',
      significado:
        'tipo de grasa que puede elevar los niveles de colesterol en la sangre y aumentar el riesgo de enfermedades cardiovasculares.',
    },
    {
      termino: 'Índice de masa corporal (IMC)',
      significado:
        'medida que se utiliza para determinar si una persona tiene un peso saludable. se calcula dividiendo el peso entre el cuadrado de la estatura.',
    },
    {
      termino: 'Minerales',
      significado:
        'nutrientes esenciales que participan en funciones clave como la formación ósea, la contracción muscular y el equilibrio hídrico.',
    },
    {
      termino: 'Obesidad',
      significado:
        'enfermedad caracterizada por la acumulación excesiva de grasa corporal, lo que aumenta el riesgo de otros problemas de salud.',
    },
    {
      termino: 'Proteínas',
      significado:
        'moléculas formadas por aminoácidos que cumplen diversas funciones en el cuerpo, como la reparación de tejidos, el transporte de nutrientes.',
    },
    {
      termino: 'Vitaminas',
      significado:
        'compuestos esenciales para el crecimiento y funcionamiento del cuerpo. incluyen la vitamina A, B, C, D, E y K.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arroyo, P. (2008). La alimentación en la evolución del hombre. México D.F.: Fundación Mexicana para la Salud.',
      link: '',
    },
    {
      referencia:
        'Corredor, M. (2004). Los Compuestos Químicos en los Alimentos. Murcia: Consejería de Sanidad. ',
      link: 'https://www.murciasalud.es/recursos/ficheros/82501-alimentos.pdf',
    },
    {
      referencia:
        'Instituto de Nutrición y Trastornos Alimentarios. (2008). Alimentos Funcionales. Madrid: Dirección General de la Salud Pública y Alimentación. ',
      link: 'http://www.madrid.org/bvirtual/BVCM009703.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2019). INS revela qué tan bien o mal nutridos están los colombianos. ',
      link:
        'https://www.ins.gov.co/Noticias/Paginas/INS-revela-qu%C3%A9-tan-bien-o-mal-nutridos-est%C3%A1n-los-colombianos.aspx',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y productor audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
