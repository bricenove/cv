const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		const descrEl = document.querySelector('.t2');
		const t3 = document.querySelector('.t3');
		const t4 = document.querySelector('.t4');
		const t5 = document.querySelector('.t5');
		const t6 = document.querySelector('.t6');
		const t7 = document.querySelector('.t7');
		const t8 = document.querySelector('.t8');
		const t9 = document.querySelector('.t9');
		const t10 = document.querySelector('.t10');
		const t11 = document.querySelector('.t11');
		const t12 = document.querySelector('.t12');
		const t13 = document.querySelector('.t13');
		const p1 = document.querySelector('.p1');
		const s1 = document.querySelector('.s1');
		const s2 = document.querySelector('.s2');
		const s3 = document.querySelector('.s3');
		const s5 = document.querySelector('.s5');
		const s6 = document.querySelector('.s6');
		const f1 = document.querySelector('.f1');
		const f2 = document.querySelector('.f2');
		const f3 = document.querySelector('.f3');
		const m1 = document.querySelector('.m1');
		const m2 = document.querySelector('.m2');
		const m3 = document.querySelector('.m3');
		const m4 = document.querySelector('.m4');
		const m5 = document.querySelector('.m5');
		const m6 = document.querySelector('.m6');
		const m7 = document.querySelector('.m7');
		const m8 = document.querySelector('.m8');
		const m9 = document.querySelector('.m9');
		const m10 = document.querySelector('.m10');
		const m11 = document.querySelector('.m11');
		const e1 = document.querySelector('.e1');
		const e2 = document.querySelector('.e2');
		const e3 = document.querySelector('.e3');
		const f9 = document.querySelector('.f9');
		const f10 = document.querySelector('.f10');

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');

				descrEl.textContent = data[attr].t2;
				p1.textContent = data[attr].p1;
				s1.textContent = data[attr].s1;
				s2.textContent = data[attr].s2;
				s3.textContent = data[attr].s3;
				s5.textContent = data[attr].s5;
				s6.textContent = data[attr].s6;
				t3.textContent = data[attr].t3;
				t4.textContent = data[attr].t4;
				t5.textContent = data[attr].t5;
				t6.textContent = data[attr].t6;
				t7.textContent = data[attr].t7;
				t8.textContent = data[attr].t8;
				t9.textContent = data[attr].t9;
				t10.textContent = data[attr].t10;
				t11.textContent = data[attr].t11;
				t12.textContent = data[attr].t12;
				f1.textContent = data[attr].f1;
				f2.textContent = data[attr].f2;
				f3.textContent = data[attr].f3;
				t13.textContent = data[attr].t13;
				m1.textContent = data[attr].m1;
				m2.textContent = data[attr].m2;
				m3.textContent = data[attr].m3;
				m4.textContent = data[attr].m4;
				m5.textContent = data[attr].m5;
				m6.textContent = data[attr].m6;
				m7.textContent = data[attr].m7;
				m8.textContent = data[attr].m8;
				m9.textContent = data[attr].m9;
				m10.textContent = data[attr].m10;
				m11.textContent = data[attr].m11;
				e1.textContent = data[attr].e1;
				e2.textContent = data[attr].e2;
				e3.textContent = data[attr].e3;
				f9.textContent = data[attr].f9;
				f10.textContent = data[attr].f10;
			});
		});
		
		var data = {
			  "english": 
			  {
			    "t2": "About Me",
			    "p1": "I'm a student, passionate about technology and innovation. I've been dedicating to web design and FrontEnd development for about 3 years participating in projects where I had to work in different development environments and performing different tasks. I'd like to be part of a team where innovation and creativity are encouraged.",
			  	"s1": "Honesty",
			  	"s2": "Coworking",
			  	"s3": "Creativity",
			  	"s5": "Digital marketing",
			  	"s6": "SVG images",
			  	"t3": "Portfolio",
			  	"t4": "Experience",
			  	"t5": "Skills",
			  	"t6": "Education",
			  	"t7": "Certificates",
			  	"t8": "Tasks",
			  	"t9": "Tasks",
			  	"t10": "Tasks",
			  	"t11": "Creator",
			  	"t12":"Web Development",
			  	"f1": "May 2020",
			  	"f2": "05/2020 – Present",
			  	"f3": "02/2018 – Present",
			  	"t13": "IT Intern",
			  	"m1":"Website of news in technology and innovation, specialized in Artificial Intelligence.",
			  	"m2":"Website development in WordPress.",
			  	"m3":"Design of the theme and components applying CSS3 and Vanilla JS.",
			  	"m4":"Preparation of plans and strategies to reach a larger audience in the content addressed.",
			  	"m5":"Company Specialized in the development of Computer Systems for School Management.",
			  	"m6":"Development of modules for the Eduweb system based on the CakePHP Framework.",
			  	"m7":"PostgreSQL Database Management.",
			  	"m8":"Linux server maintenance.",
			  	"m9":"Department of Technology (FACES).",
			  	"m10":"Development of PHP System for Registration and Control of Computer Equipment in the Faculty.",
			  	"m11":"Creation of manuals and quick guides for users.",
			  	"e1":"Commercial IT Technician",
			  	"e2":"Basic Course in Digital Marketing",
			  	"e3":"Economist",
			  	"f9":"Resources",
			  	"f10":"Read More",
			  },
			  "espanol": 
			  {
			    
			    "t2": "Sobre mí",
			    "p1": "Soy estudiante, entusiasta de la tecnología y la innovación. Me he dedicado al diseño web y desarrollo FrontEnd desde hace más de 3 años participando en proyectos donde tuvo que desenvolverme en distintos entornos de desarrollo y desempeñando diferentes tareas. Me gustaría formar parte de un equipo donde se incentive la innovación y la creatividad.",
			    "s1": "Honestidad",
			    "s2": "Trabajo en equipo",
			    "s3": "Creatividad",
			    "s5": "Marketing Digital",
			    "s6": "Imágenes SVG",
			    "t3": "Portafolio",
			  	"t4": "Experiencia Laboral",
			  	"t5": "Habilidades",
			  	"t6": "Educación",
			  	"t7": "Certificates",
			  	"t8": "Tareas",
			  	"t9": "Tareas",
			  	"t10": "Tareas",
			  	"t11": "Creador",
			  	"t12": "Desarrollador Web",
			  	"t13": "Pasante en Informática",
			  	"f1": "Mayo de 2020",
			  	"f2": "05/2020 – Actualidad",
			  	"f3": "02/2018 – Actualidad",
			  	"m1":"Sitio web de novedades en tecnología e innovación, especializado en Inteligencia Artificial.",
			  	"m2":"Desarrollo del sitio web con el CMS de WordPress.",
			  	"m3":"Diseño del tema y componentes aplicando CSS3 y Vanilla JS.",
			  	"m4":"Elaboración de planes y estrategias para alcanzar mayor audiencia en los contenidos abordados.",
			  	"m5":"Empresa Especializada en el desarrollo de Sistemas Informáticos para la Gestión Escolar.",
			  	"m6":"Desarrollo de módulos para el sistema Eduweb basados en el Framework CakePHP.",
			  	"m7":"Gestión de Base de datos postgreSQL.",
			  	"m8":"Mantenimiento de servidores Linux.",
			  	"m9":"Departamento de Tecnología de La Facultad de Ciencias Económicas y Sociales (FACES).",
			  	"m10":"Desarrollo de Sistema para Registro y Control de Equipos Informáticos e Impresoras en la Facultad en PHP.",
			  	"m11":"Creación de manuales y guías rápidas de usuarios.",
			  	"e1":"Técnico Medio en Servicios Administrativos, Mención Informática Comercial",
			  	"e2":"Curso Básico de Marketing Digital",
			  	"e3":"Economía - Economista",
			  	"f9":"Recursos",
			  	"f10":"Ir al sitio",
			  	}
			}

