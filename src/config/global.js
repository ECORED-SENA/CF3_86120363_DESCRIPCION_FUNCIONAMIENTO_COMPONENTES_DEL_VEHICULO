export default {
  global: {
    Name: 'Mantenimiento de la transmisión manual',
    Description:
      'El componente formativo aborda el mantenimiento de transmisiones manuales para evitar fallas y reducir costos. Incluye diagnóstico previo, procedimientos de desacople, limpieza, inspección, reemplazo de piezas desgastadas y ensamblaje. Destaca la importancia de usar herramientas adecuadas y manuales de servicio. Finaliza con pasos para la instalación correcta y un glosario con términos clave del sistema.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
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
        titulo: 'Transmisión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Desacople de la transmisión',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Desarmado de componentes',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Limpieza e inspección de los componentes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Reemplazo de partes desgastadas o dañadas',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Ensamble de componentes',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Instalación de la transmisión',
            hash: 't_1_6',
          },
        ],
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
        download: 'downloads/86120363_CF03_DU.pdf',
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
      tema: 'Transmisión',
      referencia:
        'Lesics Española. (2020). Transmisión automática, ¿cómo funciona?. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sF84T7jz7yE',
    },
    {
      tema: 'Desacople de la transmisión',
      referencia:
        'KyD Galat. (2021). Como desmontar transmisión de camioneta, para cambiar clutch, retenes, collarín etc. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZRiNtp1-MqI',
    },
    {
      tema: 'Desarmado de componentes',
      referencia:
        'servicio automotriz El Pistón. (2024). Hyundai atos desarme e inspección de transmission (caja de velocidades ) [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cobCWVpSCSA',
    },
    {
      tema: 'Reemplazo de partes desgastadas o dañadas',
      referencia:
        'Garage del Negro. (2023).Caja Manual RASCA al CAMBIAR de MARCHA o CAMBIO. Sincronizadores desgastados, como probarlos?. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vMZuYitTmm4',
    },
  ],
  glosario: [
    {
      termino: 'Diagnóstico',
      significado:
        'identificación de fallos mediante inspección, pruebas y análisis.',
    },
    {
      termino: 'Eje de entrada',
      significado:
        'conecta el motor al embrague y transmite movimiento a la transmisión.',
    },
    {
      termino: 'Eje de salida',
      significado:
        'transfiere el movimiento de la transmisión hacia las ruedas del vehículo.',
    },
    {
      termino: 'Eje intermediario',
      significado:
        'engrana siempre con el eje primario en el sistema de transmisión.',
    },
    {
      termino: 'Embrague',
      significado:
        'mecanismo que conecta o separa el motor de la transmisión para cambios de marcha.',
    },
    {
      termino: 'Engranar',
      significado: 'unión de ruedas dentadas para transmitir movimiento.',
    },
    {
      termino: 'Mantenimiento',
      significado:
        'acciones para preservar o restaurar componentes y prolongar su funcionalidad.',
    },
    {
      termino: 'Par motor',
      significado:
        'relación entre la potencia y la velocidad del motor, reflejada en la fuerza rotacional.',
    },
    {
      termino: 'Piñón',
      significado:
        'rueda dentada que engrana con otra rueda o cadena en el sistema.',
    },
    {
      termino: 'Relación de transmisión',
      significado:
        'relación entre las velocidades de dos engranajes en movimiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chevrolet (1999). Despiece Caja de cambios – vehículos con motor.',
      link: '',
    },
    {
      referencia:
        'Eaton (2012). <em>Guía de diagnóstico de fallas transmisiones Fuller para servicio pesado TRTS0910S.</em> ',
      link:
        'https://www.eaton.com/content/dam/eaton/products/transmissions/vehicle-transmissions/troubleshooting-guides/eaton-transmisiones-fuller-para-servicio-pesado-gu%C3%ADa-de-diagn%C3%B3stico-de-fallas-trts0910-es-la.pdf',
    },
    {
      referencia:
        'Herrmann & Kraemer (1998). <em>Caja de cambios manual, Sección 308-03, modelo: Fiesta.</em> Ford Motor Company.',
      link: '',
    },
    {
      referencia:
        'Salazar, W. (2015). <em>Proyecto de grado: Reparación total de la caja de cambios mecánica de un automóvil Volkswagen Parati Station Wagon año: 1999.</em>  ',
      link:
        'https://www.dspace.espol.edu.ec/bitstream/123456789/29595/1/TESIS%20LISTA%20PARA%20IMPRIMIR%20Y%20EMPASTAR.pdf',
    },
    {
      referencia:
        'US Navy (2018). <em>Construction mechanic advanced NAVEDTRA 14050A, capítulo 8 troubleshooting transmissions, transfer cases, and differentials.</em>',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Edwin Abello Rubiano',
          cargo: 'Experto temático',
          centro:
            'Centro de Gestión de Mercados Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodriguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}
