import { Container } from "react-bootstrap";
import "../../styles/nosotros.css";
import useTitle from "../../hooks/useTitle";

const Nosotros = () => {
  useTitle("Nosotros")
  return (
    <Container>
      <h1 className="text-center my-5 tituloPrincipal display-4 fw-normal">
        SOBRE NOSOTROS
      </h1>
      <article className="my-5">
        <p>
          La Dirección de Servicios de Empleo de la Municipalidad de Concepción
          tiene como objetivo general la{" "}
          <span className="fw-bold textoResaltado">
            promoción de la cultura del trabajo y las oportunidades laborales
          </span>
          , reduciendo la desigualdad social y garantizando el desarrollo
          productivo a través del trabajo articulado con los diferentes sectores
          de la sociedad.
        </p>
        <p>
          Los ejes de trabajo de la Dirección, definidos por el equipo, son los
          siguientes:
        </p>
        <ul className="my-4 list-unstyled ms-5">
          <li className="my-1">
            <span className="fw-bold textoResaltado">
              <i className="bi bi-check-square-fill iconoEjes"></i> EDUCACIÓN Y
              CAPACITACIÓN PROFESIONAL
            </span>
          </li>
          <li className="my-1">
            <span className="fw-bold textoResaltado">
              <i className="bi bi-check-square-fill iconoEjes"></i>{" "}
              EMPRENDEDORISMO
            </span>
          </li>
          <li className="my-1">
            <span className="fw-bold textoResaltado">
              <i className="bi bi-check-square-fill iconoEjes"></i> INCLUSIÓN
              LABORAL
            </span>
          </li>
        </ul>
        <p>
          Ésta Dirección, asegura espacios institucionales destinados a brindar
          servicios especializados, directos, universales y gratuitos para
          acercar políticas activas de empleo, bajo criterios de equidad, que
          mejoren las condiciones de acceso a empleos dignos, de la población
          con mayores problemas de integración socio-laboral, contribuyendo así
          a la igualdad de oportunidades de acceso e integración al mundo del
          trabajo.
        </p>
      </article>
      <article className="my-5 text">
        <h2 className="text-center my-5 titulosSecundarios">
          POLÍTICAS ACTIVAS DE EMPLEO DEPENDIENTES DEL MINISTERIO DE CAPITAL
          HUMANO
        </h2>
        <h5 className="my-4 subtitulos">
          ACCIONES DE APOYO A LAS/LOS QUE BUSCAN EMPLEO
        </h5>
        <ul className="my-4 ms-5 list-unstyled listas">
          <li className="my-2">
            <span className="fw-bold textoResaltado">
              <i className="bi bi-circle-fill iconoApoyoEmpleo"></i> Orientación
              laboral:
            </span>{" "}
            acompañamiento en la detección de saberes y experiencias laborales.
            Vinculación con instituciones educativas y de formación profesional
            para adquirir nuevos saberes que contribuyan a mejorar sus
            oportunidades de empleo.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado">
              <i className="bi bi-circle-fill iconoApoyoEmpleo"></i> Apoyo a la búsqueda de empleo:
            </span>{" "}
            asistir en el diseño de estrategias para la búsqueda laboral.
            Capacitación para la elaboración del Curriculum Vitae y para el
            desempeño de entrevistas laborales.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado">
              <i className="bi bi-circle-fill iconoApoyoEmpleo"></i> Intermediación Laboral:
            </span>{" "}
            acercar a los trabajadores que están buscando un empleo las
            distintas ofertas laborales que existen en el mercado y sean acorde
            a su perfil ocupacional.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado">
              <i className="bi bi-circle-fill iconoApoyoEmpleo"></i> Orientación para el trabajo independiente, autogestionado y/o
              cooperativo:
            </span>{" "}
            orientación para el análisis de perfil ocupacional autogestivos;
            acompañamiento en la detección de fortalezas y debilidades para el
            desarrollo de un emprendimiento. Talleres específicos para el
            desarrollo de habilidades profesionales.
          </li>
        </ul>
        <h5 className="my-4 subtitulos">
          ACCIONES DE APOYO A LAS/LOS EMPLEADORES
        </h5>
        <ul className="my-4 ms-5 list-unstyled listas">
          <li className="my-2">
            <span className="fw-bold textoResaltado">
              <i className="bi bi-circle-fill iconoApoyoEmpleo"></i> Intermediación Laboral:
            </span>{" "}
            preselección y Selección de Postulantes de acuerdo a requerimientos
            del empleador. Elaboración de perfiles ocupacionales. Diseño y
            Difusión de búsquedas laborales.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado">
              <i className="bi bi-circle-fill iconoApoyoEmpleo"></i>{" "} Asesoramiento:
            </span>{" "}
            sobre los programas de promoción e incentivos para la incorporación
            de personal ofrecidos desde el Gobierno Nacional y/o Provincial.
            (fomentar empleo/volver al trabajo, entre otros)
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado">
              <i className="bi bi-circle-fill iconoApoyoEmpleo"></i> Vinculación y articulación:
            </span>{" "}
            con el sistema educativo a través del análisis de la demanda de
            formación laboral, acompañamiento en la elaboración de la propuesta
            formativa. Promoción de las propuestas de Formación Profesional.
          </li>
        </ul>
      </article>
      <article className="my-5">
        <h2 className="text-center my-5 titulosSecundarios">
          PROGRAMAS LOCALES
        </h2>
        <p>
          La Dirección de Servicios de Empleo promueve, constituye e
          institucionaliza áreas reconocidas y especializadas en el abordaje de
          las problemáticas vinculadas con el empleo, haciendo foco en la mejora
          efectiva en la integración al mundo del trabajo de los segmentos
          socialmente más vulnerados.
        </p>
        <p>
          A través de ofertas educativas y de capacitación constante para la
          inserción laboral, generando acciones concretas para el desarrollo
          productivo e impulso del emprendedorismo.
        </p>
        <p>Entre las actividades que se llevan a cabo, se pueden detallar:</p>
        <ul className="my-4 ms-5 list-unstyled listas">
          <li className="my-2">
            <span className="fw-bold textoResaltado"><i className="bi bi-pc-display iconoActividades"></i> Informática Básica:</span>{" "}
            espacio de formación que busca socializar las herramientas
            informáticas básicas de una PC para la inserción laboral; brindar
            conocimiento teórico-práctico sobre la computadora y sus partes;
            generando buenas prácticas con Internet. A cargo de la Ing. en
            Sistemas Rocío Nacul.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado"><i className="bi bi-bank iconoActividades"></i> Educación e Inclusión financiera:
            </span>{" "}
            en acción conjunta con el Banco Nación Argentina, se brindó una
            capacitación en el Centro de Integración Comunitaria CIC B°
            Policial, donde se abordaron temáticas tales como presupuesto
            personal, herramientas financieras y económicas.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado"><i className="bi bi-file-earmark-person iconoActividades"></i> Jornadas de CV y Entrevista Laboral:
            </span>{" "}
            en acción conjunta con UNSTA CUC, se llevaron a cabo tres jornadas
            de asesoramiento personalizado y gratuito a personas desempleadas
            para mejorar su Currículum Vitae, a cargo de profesionales de
            Recursos Humanos de la Universidad del Norte Santo Tomás de Aquino.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado"><i className="bi bi-emoji-smile-fill iconoActividades"></i> Taller de Lengua de Señas para empleados/as municipales:
            </span>{" "}
            en alianza con la Asociación Agrupación Sordos del Sur, se lleva a
            cabo el Taller mencionado, donde se brindan conocimientos básicos de
            teoría y práctica para la comunicación primaria a personas con
            discapacidad auditiva.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado"><i className="bi bi-coin iconoActividades"></i> Encuentro Emprendedor:
            </span>{" "}
            en el marco del mes de la mujer, con el objetivo de impulsar el
            emprendedorismo, se realizó el Encuentro Emprendedor con el
            empresario Cacho Avellaneda y Naranja X.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado"><i className="bi bi-heart-pulse iconoActividades"></i> Primeros Auxilios y RCP:
            </span>{" "}
            se desarrollaron capacitaciones a cargo de los Bomberos Voluntarios
            de Concepción, las jornadas tuvieron como objetivo principal la
            preparación del personal municipal de diferentes Direcciones ante
            situaciones de emergencia.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado"><i className="bi bi-globe iconoActividades"></i> Marketing Digital:</span>{" "}
            curso gratuito, online, brindado por la Academia Streambe en
            convenio con la Dirección de Empleo, donde se profundizan
            herramientas de ventas digitales, redes sociales, perfil profesional
            y neuromarketing y marca.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado"><i className="bi bi-robot iconoActividades"></i> Inteligencia Artificial:
            </span>{" "}
            curso gratuito, online, brindado por la Academia Streambe en
            convenio con la Dirección de Empleo, que busca brindar a los
            emprendedores las últimas herramientas del entorno digital para el
            apalancamiento de los proyectos.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado"><i className="bi bi-c-circle-fill iconoActividades"></i> Marca Personal:</span>{" "}
            capacitación online, gratuita, de cinco encuentros, brindada por la
            Academia Streambe en convenio con la Dirección de Empleo, que
            promueve la identidad personal de los emprendedores/as y público en
            general, generando espacios de reflexión sobre el propósito de vida.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado"><i className="bi bi-server iconoActividades"></i> Programación, Generación T:
            </span>{" "}
            iniciativa educativa creada por Streambe, en acción conjunta con la
            Dirección de Servicios de Empleo, con impacto social, online y
            gratuita para abrirle las puertas del mundo Tech a estudiantes del
            último y anteúltimo año de escuelas secundarias, con foco en la
            empleabilidad de las juventudes, generando oportunidades laborales.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado"><i className="bi bi-shop-window iconoActividades"></i> Ayudante de Panadería:
            </span>{" "}
            curso de cuatro encuentros donde se brindan conocimientos básicos
            sobre la producción casera de facturas, tortillas, tallarines, pre
            pizzas y panes de diferentes tipos; promoviendo el emprendedorismo
            en los sectores periféricos de la Ciudad. A cargo de Diego Carolini
            de la Dirección de Empleo.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado"><i className="bi bi-palette iconoActividades"></i> Escuela de Pintores:</span>{" "}
            en acción conjunta con la Empresa Sinteplast, se generó un curso de
            cinco meses, donde se brindan conocimientos del oficio de pintura en
            obra, hogar, artesanal e industrial. Impulsando las habilidades
            laborales en el sector y el autoempleo en las personas interesadas,
            a través de charlas técnicas y prácticas formadoras de mano de obra
            especializada en el mercado de las pinturas.
          </li>
          <li className="my-2">
            <span className="fw-bold textoResaltado"><i className="bi bi-tools iconoActividades"></i> Expo Bosch:</span> en
            conjunto con la Empresa Bosch y Bulonería Concepción, la Dirección
            de Servicios de Empleo generará un espacio de formación y
            capacitación en manipulación y manejo de herramientas de
            carpintería, soldadura y herrería, dirigida a personas desocupadas,
            a beneficiarios de Programas Fomentar Empleo y Volver al Trabajo,
            escuelas secundarias y público en general.
          </li>
        </ul>
      </article>
      <article className="my-5">
        <h2 className="text-center my-5 titulosSecundarios">
          DATOS PERSONALES
        </h2>
        <p>
          La incorporación de datos al Portal tiene carácter de declaración
          jurada y los datos son utilizados solo para los servicios y
          funcionalidades del Portal.
        </p>
        <p>
          Los datos personales que se registren son de titularidad de cada una
          de las personas que se registre y no están a disposición de terceros
          sin su consentimiento expreso.
        </p>
        <p>
          La Municipalidad de Concepción <span className="textoResaltado fw-bold">no se responsabiliza por el
          incumplimiento de los servicios prestados por los profesionales
          registrados en el portal de oficios.</span>
        </p>
      </article>
    </Container>
  );
};

export default Nosotros;
