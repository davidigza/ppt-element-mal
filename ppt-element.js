import {
  LitElement,
  html,
} from 'lit-element';
import {
  classMap
} from 'lit-html/directives/class-map.js';
import {until} from 'lit-html/directives/until.js';
import styles from './ppt-element-styles';
/**
 * `ppt-element`
 * Element for presentations
 *
 * @customElement
 * @lit-element
 * @demo demo/index.html
 */
class PptElement extends LitElement {
  static get is() {
    return 'ppt-element';
  }

  // Declare properties
  static get properties() {
    return {
      current: {
        type: String,
      },
      currentLimit: {
        type: String,
      },
      currentSlide: {
        type: Object
      },
      nextSlide: {
        type: Object
      },
      item: {
        type: Object
      },
      observerVisibility: {
        type: Object
      },
      observerIframe: {
        type: Object
      },
      observerUntil: {
        type: Object
      },
      visible: {
        type: Boolean
      },
      iframeBool:{
        type: Boolean
      },
      promise: {
        type: Object
      },
      classes:{
        type:Object
      },
      iframe: {
        type: Object
      },
      orders:{
        type: Number
      }
    };
  }

  constructor() {
    super();
    this.visible = false;
    this.item = {
      title: '¿Qué NO es <strong>lit-html</strong>?',
      p: ['No es un framework.', 'No tiene un modelo de componentes.', ' Puede usarse en cualquier proyecto.']
    };
    this.item1 = {
      number: '1',
      titleh1:'lit-html',
      titleh2:'<strong>Templates HTML en Javascript <span class="line">muy bien</span> óptimamente hechos</strong>'
    };
    this.item2 = {
      title: '¿Qué es <strong>lit-html</strong>?',
      p: ['Una librería de templating HTML que se caracteriza por su eficiencia en términos de:'],
      li: ['performance (actualiza sólo lo que cambia)', 'tamaño (3k gzip)', 'uso de la plataforma y estándares web (ES6 tagged template literals, HTML templates, no necesita compilación ni vDOM)']
    };
    this.item3 = {
      title: 'Lit-html template literals',
      p: ['<strong>Tagged template literals</strong>', 'Como JSX pero sin compilar'],
      src: ['../images/code1.png']
    };
    this.item4 = {
      title: 'Lit-html template literals',
      p: ['Función/tag <strong>html</strong>'],
      src: ['../images/code2.png', '../images/code3.png']
    };
    this.item5 = {
      title: 'Lit-html - <strong> Enfoque funcional </strong>',
      p: ['UI = function(<span class="line">data</span>-state)', 'Enfoque Declarativo, fácil de entender '],
      src: ['../images/code4a.png']
    };
    this.item6 = {
      title: '¿Cómo funciona?',
      p: [],
      cards: [{
          title: '<strong>1)</strong> Definimos una template',
          code: ['let header = (title) =>', 'html`<h1>${title}</h1>`;']
        },
        {
          title: '<strong>2)</strong> separa las partes estáticas de las dinámicas',
          code: ['Resultado:', 'TemplateResult.strings: ["<h1>", "</h1>"];']
        },
        {
          title: '<strong>3)</strong> join strings con {{}}',
          code: ['<h1>{{}}</h1>}']
        },
        {
          title: '<strong>4)</strong> crea un HTML template',
          code: ['t = createElement("template");', 't.innerHTML = "<h1>{{}}</h1>"']
        },
        {
          title: '<strong>5)</strong> recorre el template y guarda la posición de cada placeholder {{}}',
          code: ['[{type: "node", index: 1}]']
        },
        {
          title: '<strong>6)</strong> remueve los placeholders {{}}',
          code: ['<h1></h1>']
        }
      ]
    }
    this.item7 = {
      title: '<strong>Bindings</strong> en templates',
      p: [''],
      src: ['../images/code5.png']
    };
    this.item8 = {
      title: 'Tipos <strong>soportados</strong>',
      p: [''],
      src: ['../images/code6.png']
    };
    this.item9 = {
      title: 'Composición y anidamiento',
      p: [''],
      src: ['../images/code7.png']
    };
    this.item10 = {
      title: 'Templates <strong>condicionales</strong>',
      p: [''],
      src: ['../images/code8.png']
    };
    this.item11 = {
      title: '<strong>Repeating</strong> templates',
      p: [''],
      src: ['../images/code9.png']
    };
    this.item12 = {
      title: 'Extendiendo con <strong>directivas</strong>',
      li: ['asyncAppend',
        'asyncReplace', 'cache', 'classMap', 'ifDefined', 'guard', 'repeat', 'styleMap', 'unsafeHTML', 'until'
      ],
      p: ['Son funciones que permiten customizar la manera en que se tratan los bindings.'],
      listColumn: true
    }
    this.item13 = {
      title: '¿Y cómo <strong class="noSpace">render</strong>iza?',
      li: ['La parte estática nunca cambia', 'Recuerda la posición de cada placeholder', 'Actualiza sólo los valores que cambian'],
      src: ['../images/code4.png'],
      p: []
    };
    this.item14 = {
      title: 'Vamos a ver un ejemplo',
      example:['let sayHello = (name) => html`<h1>Hello ${name}</h1>`;','render(sayHello("World"), document.querySelector(".container"))','render(sayHello("David"), document.querySelector(".container"))'],
      p: [
        'Primer Renderizado.',
        '1.- Consulta un WeakMap que contiene el nodo con las parts, las zonas que el recuerda que son nuestras expresiones.',
        '2.- Si no lo encuentra, limpiara el contenedor, luego  lo que va a hacer es setear el nuevo nodo, como key del weakMap utilizara el nodo contenedor, y como valor generará un nuevo parts.',
        '3.- Utilizando el parts marcará el nodo delimitado.',
        '4.-Rellenará el pending Value:',
        '5.-comprueba si el valor ha cambiado y según el tipo de valor aplicará el tipo de directiva que toque.',
        'Segundo renderizado.',
        '1.-Consulta un WeakMap que contiene el nodo con las parts y encuentra las parts',
        '2.- Lanza las directivas en la que compara si ha habido cambio de valor y busca en el part qué parte tiene que cambiar y que tipo de cambio es.',
        '3.- Setea el pending value',
        '4.- llama a la funcion update que se ocupa de iterar hasta encontrar el valor a cambiar y volver a ejecutar su api de render.',
        '5.- ha encontrado el nodo de texto y con un  node.textContent cambia su valor'
      ]
    };
    this.item15 = {
      title: 'Ejemplo de <strong>Until</strong>',
      code:[],
      p:[]
    }
    this.item16 = {
      title: 'Ejemplo de <strong>classMap</strong>'
    }
    this.item17 = {
      title: '<strong>Web component</strong> con lit-html',
      p:[],
      src: ['../images/code11.png']
    };
    this.item18 = {
      number: '2',
      titleh1:'LitElement',
      titleh2:'<strong>The <span class="line">king</span>PolymerElement is dead, long live the <span class="line">king</span>LitElement!</strong>'
    };
    this.item19 = {
      title: 'Web component con <strong>LitElement</strong>',
      imgBlockLeft:['../images/code12.png'],
      imgBlockRight:['../images/code13.png']
    };
    this.item20 = {
      title: 'render',
      items:[
        {li: 'Render asíncrono, actualización de propiedades en lote.',items:[]}
      ,{li:'Template debe escribirse como una función pura de las propiedades del componente, UI = f(state) tal que:',items:['No cambia el estado del componente',
      'No tiene efectos colaterales',
      'Sólo depende de las propiedades del componente',
      'Siempre devuelve lo mismo si los propiedades no han cambiado']},
      {li:'Consecuencias:',items:['Template declarativo','Mejor experiencia para el desarrollador']}]
    }
    this.item21 = {
      title : 'lit-html + LitElement',
      items: [
        {li:'Vale todo lo mismo que usamos  en lit-html:',items:['Texto: <p>${...}</p>',
        'Atributo: <p id="${...}"></p>',
        'Atributo booleano: ?checked="${...}"',
        'Propiedad: .value="${...}"',
        'Handler de eventos: @event="${...}"',
        'Composión, iteraciones, condicionales, directivas']},
        {li:'Y se agregan las características básicas de web components',items:['Shadow DOM => createRenderRoot',
        'Light DOM, slots']},
        {li:'Más beneficios de LitElement:',items:[
          'Re-render asíncrono y eficiente cuando cambian las propiedades',
          'Ciclo de vida (renderizado)']},
      ]
    };
    this.item22 = {
      title: 'Propiedades',
      p:[],
      src: ['../images/code14.png']
    };
    this.item23 = {
      title: 'Ciclo de vida de un renderizado',
      p:[],
      src:['../images/code15.png'],
      shadow: 'noShadow'
    };
    this.item27={
      title: 'Lit en acción',
      p:[],
      src:[''],
      shadow: 'noShadow'
    };
    this.item24= {
      title: 'Polymer 2 a LitElement - <strong>Bindings</strong>',
      p:[],
      src:['../images/code16.png'],
      shadow: 'noShadow'
    };
    this.item25 = {
      title: 'Polymer 2 a LitElement - <strong>Properties</strong>',
      p:[],
      src:['../images/code17.png'],
      shadow: 'noShadow'
    };
    this.item26 ={
      title: 'Polymer 2 a LitElement - <strong>Directivas</strong>',
      p:[],
      src:['../images/code18.png'],
      shadow: 'noShadow'
    };
    this.item28 = {
      title: '¿Quién lo usa?',
      p:[],
      src:['../images/code19.png'],
      imgClass:'addsize',
      li:['BBVA','Nordea Bank','Rabobank','ING','CityBox','SAP','British Gas','Williams Somona']
    };
    this.item29 = {
      title:'Herramientas y utilidades',
      li:['VS CODE plugins','Polymer CLI','OpenWC','PWA toolkit '],
      p:[]
    };
    this.item30 = {
      title:'El futuro',
      p:['SSR','Node','Está todo por hacer']
    };
    this.item31 = {
      title:'Recursos',
      p:[],
      class: 'small',
      li:['<strong>Sitio oficial lit-html</strong> <a href="https://lit-html.polymer-project.org">https://lit-html.polymer-project.org</a>',
      '<strong>Sitio oficial LitElement</strong> <a href="https://lit-element.polymer-project.org">https://lit-element.polymer-project.org</a>',
      '<strong>Slack de Polymer</strong> <a href="polymer.slack.com">polymer.slack.com</a>',
      '<strong>Awesome lit-html</strong> <a href="https://github.com/web-padawan/awesome-lit-html">https://github.com/web-padawan/awesome-lit-html</a>',
      '<strong>Material web components (LitElement)</strong> <a href="https://github.com/material-components/material-components-web-components">https://github.com/material-components/material-components-web-components</a>',
      '<strong>SAP UI5 web components (lit-html)</strong> <a href="https://sap.github.io/ui5-webcomponents/">https://sap.github.io/ui5-webcomponents/</a>',
      '<strong>Efficient, Expressive, and Extensible HTML Templates (Polymer Summit 2017)</strong> <a href="https://www.youtube.com/watch?v=ruql541T7gc">https://www.youtube.com/watch?v=ruql541T7gc</a>',
      '<strong>lit-HTML (Chrome Dev Summit 2017)</strong> <a href="https://www.youtube.com/watch?v=Io6JjgckHbg">https://www.youtube.com/watch?v=Io6JjgckHbg</a>',
      '<strong>VDOM vs lit-html - HTTP203</strong> <a href="https://www.youtube.com/watch?v=uCHZJy2n8Qs">https://www.youtube.com/watch?v=uCHZJy2n8Qs</a>',
      '<strong>A night experimenting with lit-html</strong> <a href="https://medium.com/@lucamezzalira/a-night-experimenting-with-lit-html-585a8c69892a">https://medium.com/@lucamezzalira/a-night-experimenting-with-lit-html-585a8c69892a</a>']
    };
    this.item32 = {
      title: 'Créditos',
      p:[],
      li:['Presentación basada en la template Viola de <strong>SlidesCarnival</strong>', 'Código formateado con <strong>SlidesCodeHighlighter</strong>']
    };
    this.item34={
      title: 'Gracias',
      p:['¿Preguntas?'],
      classP: 'grow'
    }
    this.item35= {
      title:'Es el momento',
      p:[],
      src:['../images/code20.png'],
      shadow: 'noShadow'
    }
    window.addEventListener('keydown', this.handlekeypress.bind(this));
    this.promise = (()=>{
      let res, rej;

      const promise = new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
      });

      promise.resolve = res;
      promise.reject = rej;

      return promise;

    })();
    this.classes = { container: true, animationBackground: false, red:false};
    this.orders = 10;
    this.iframeBool = false;
  }

  static get shadyStyles() {
    return `
      ${styles.cssText}
    `;
  }

  handlekeypress(event) {
    if (event.keyCode === 37) {
      this.goBack();
    } else if (event.keyCode === 39) {
      this.goForward();
    }
  }

  changeVisibility() {
    this.visible = !this.visible;
  }

  firstUpdated() {
    const nodes = [...this.shadowRoot.querySelectorAll('section')];
    this.currentLimit = '' + (nodes.length - 1).toString();
    for (const [index, value] of nodes.entries()) {
      value.setAttribute('index', index);
      if (index === 0 && value.classList.contains('current')) {
        this.currentSlide = value;
        this.current = index;
      }
      if (value.classList.contains('visible')) {
        this.observerVisibility = new MutationObserver((mutations) => {
          mutations.forEach(this.changeVisibility.bind(this));
        });
        this.observerVisibility.observe(value, {
          attributes: true,
          childList: true,
          characterData: true
        });
      }
      if (value.classList.contains('until')) {
        this.observerUntil = new MutationObserver((mutations) => {
          mutations.forEach(this.executeUntil.bind(this));
        });
        this.observerUntil.observe(value, {
          attributes: true,
          childList: true,
          characterData: true
        });
      }
      if (value.classList.contains('iframe')) {
        this.observerIframe = new MutationObserver((mutations) => {
          mutations.forEach(this.applyIframe.bind(this));
        });
        this.observerIframe.observe(value, {
          attributes: true,
          childList: true,
          characterData: true
        });
      }
    }
    this.iframe = this.shadowRoot.querySelector('iframe');
  }

  applyIframe(){
    this.iframeBool = true;
  }

  executeUntil(){
    window.until = this.resolveUntil.bind(this);
    document.addEventListener('click', window.until);
  }

  resolveUntil(){
    this.promise.resolve(html`<div class="container"><span class="span">Resuelta</span></div>`);
    document.removeEventListener('click',window.until);
  }

  debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }


  goBack() {
    if (this.current === '0') {
      return;
    }
    const newSlide = this.currentSlide.previousElementSibling;
    this.currentSlide.style.display = 'none';
    newSlide.style.display = '';
    this.currentSlide = newSlide;
    this.current = this.currentSlide.getAttribute('index');
  }

  goForward() {
    if (this.visible) {
      let node = this.shadowRoot.querySelector('.noVis');
      if (node) {
        node.classList.remove('noVis');
      } else {
        this.changeVisibility();
        this.goForward();
      }
      return;
    }
    if(this.iframeBool){
      if(this.orders >0){
        this.iframe.contentWindow.postMessage('next','http://127.0.0.1:8081');
        let node = this.shadowRoot.querySelector('.activeli');
        let node2 = this.shadowRoot.querySelector('.active');
        node.classList.remove('activeli');
        if(node2){
          node2.classList.remove('active');
        }
        node.classList.add('active');
        this.orders--;
        return;
      } else {
        this.iframeBool = false;
        this.goForward();
        return;
      }
    }
    if (this.current === this.currentLimit) {
      return;
    }

    const newSlide = this.currentSlide.nextElementSibling;
    this.currentSlide.style.display = 'none';
    newSlide.style.display = '';
    this.currentSlide = newSlide;
    this.current = this.currentSlide.getAttribute('index');
  }

  returnTitle(item) {
    return [...new DOMParser().parseFromString(item, 'text/html').body.childNodes].map((node) => html `${node}`)
  }

  listCenter(item) {
    const data = html `${item.p.map((text)=>html`<p class="text ${item.classP}">${text}</p>`)}`;
    const datali = html `${item.li ? item.li.map((li)=>html`<li class="list-item ${item.class}">${this.returnTitle(li)}</li>`) : ''}`;
    const dataImg = html `${item.src ? item.src.map((img)=>html`<img src='${img}'></img>`) : ''}`;
    let classes = {
      list: true
    };
    if (item.listColumn) {
      classes.column = true;
    }
    return html `
      <section class="bg-apple slide" style="display:none">
        ${this.header(item.title)}
        <div class="wrap">
           <div class="card">
              <div class="card-title">${data}</div>
              <ul class="${classMap(classes)}">${datali}</ul>
              ${dataImg}
           </div>
        </div>
      </section>
    `
  }

  preCodeCenter(item) {
    const data = html `${item.p.map((text)=>html`<p class="text">${this.returnTitle(text)}</p>`)}`;
    const dataImg = html `${item.src ? item.src.map((src)=>html`<img class="${item.shadow} ${item.imgClass}" src="${src}" alt="code"/>`) : ''}`;
    return html `
    <section class="bg-apple slide" style="display:none">
      ${this.header(item.title)}
      <div class="wrap">
         <div class="card">
            <div class="card-title">${data}</div>
            <div class="preCode">
              ${dataImg}
            </div>
         </div>
         ${this.addList(item)}
      </div>
    </section>
    `;
  }

  addList(item){
    if(item.li){
      return html`
        <div class="card">
          <ul class="list">
             ${item.li.map((item)=> html `<li class="list-item">${item}</li>`)}
          </ul>
        </div>
      `;
    } else {
      return html``;
    }
  }

  gridLayout(item) {
    const data = html `${item.p.map((text)=>html`<p class="text">${this.returnTitle(text)}</p>`)}`;
    const dataImg = html `${item.src ? item.src.map((src)=>html`<img src="${src}" alt="code"/>`) : ''}`;
    const templateResult = html `
    <section class="bg-apple slide visible" style="display:none">
      ${this.header(item.title)}
      <div class="wrap grid">
         ${this.repeatedCards(item.cards)}
      </div>
    </section>
    `;
    return templateResult;
  }


  repeatedCards(cards) {
    return cards.map((card) => html `
    <div class="card noVis">
      <div class="card-title">${this.returnTitle(card.title)}</div>
      <div class="card-code">${card.code.map((text)=>html `<p>${text}</p>`)}</div>
    </div>
    `);
  }

  codeExample(item){
    return html `
      <section class="bg-apple slide until" style="display:none">
      ${this.header(item.title)}
        <div class="wrap">
           <div class="code">
           <pre data-lang='Javascript' class='prettyprint'>
              <code>
              this.promise = (()=>{
                let res, rej;

                const promise = new Promise((resolve, reject) => {
                  res = resolve;
                  rej = reject;
                });

                promise.resolve = res;
                promise.reject = rej;

                return promise;

              })();

              '\${until(this.promise, html\`&ltdiv class="container"&gt
              &ltdiv class="progress progress-infinite"&gt
                &ltdiv class="progress-bar3" &gt
                &lt/div&gt
              &lt/div&gt
            &lt/div&gt\`)}'

              /*  Haz click para resolver la promesa */
              </code>
           </pre>
           </div>
           <div class="result">
           ${until(this.promise, html`
           <div class="container">
            <div class="progress progress-infinite">
              <div class="progress-bar3" >
              </div>
            </div>
          </div>`)}
           </div>
        </div>
      </section>
    `
  }

  codeExample2(item){
    return html `
      <section class="bg-apple slide classMap" style="display:none">
       ${this.header(item.title)}
        <div class="wrap">
           <div class="code">
           <pre data-lang='javascript' class='prettyprint'>
              <code>


              this.classes = { container: true, animationBackground: false, red: false};


              '\html\`&ltdiv class=\${classMap(classes)}&gt;&lt/div&gt;\`;'

                //¡¡¡No hacer esto!!!

                \html\`&ltdiv class="someClass \${classMap(moreClasses)}"&gtBroken div&lt/div&gt\`;

              </code>
           </pre>
           <button @click="${this.setRed}" class="button-success">red</button>
           <button @click="${this.animate}" class="button-success">animate</button>
           </div>
           <div class="result">
           <div class="${classMap(this.classes)}">

            </div>
           </div>
        </div>
      </section>
    `
  }

  setRed(){
    this.classes={ container: true, animationBackground: false, red: true};
  }

  animate(){
    this.classes={ container: true, animationBackground: true, red:false};
  }

  header(ti){
    const title = html `${this.returnTitle(ti)}`;
    return html `
    <div class="header">
        <div class="title">
          <span class="circle">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 612.018 612.018"  xml:space="preserve">
      <g>
        <path d="M602.832,181.63L432.186,10.984c-12.26-12.26-32.882-12.26-45.142,0l-27.567,27.567c-12.26,12.26-12.26,32.882,0,45.142
          l3.827,3.827L193.367,213.024l-26.787-26.787c-13.748-13.748-37.488-13.748-51.307,0l-26.717,26.787
          c-6.874,6.874-10.701,16.087-10.701,25.228c0,9.921,3.827,18.354,10.701,25.228l94.11,94.11L21.942,518.386
          c-1.559,1.559-3.047,3.827-3.827,6.094L1.249,578.835c-2.268,9.213-1.559,17.575,3.047,22.961
          c2.268,3.047,7.654,8.433,17.575,8.433c3.827,0,7.654-0.78,12.26-2.268l51.307-16.087c2.268-0.78,3.827-1.559,6.094-3.827
          l160.724-160.724l98.008,98.008c6.874,6.874,16.087,10.701,25.228,10.701c9.921,0,18.354-3.827,25.228-10.701l26.787-26.787
          c6.874-6.874,10.701-16.087,10.701-25.228c0-9.921-3.827-18.354-10.701-25.228l-26.787-26.787l125.504-169.937l3.047,3.047
          c6.094,6.094,13.748,9.213,22.961,9.213c8.433,0,16.866-3.047,22.961-9.213l27.567-27.567
          C615.091,214.583,615.091,194.669,602.832,181.63z M21.942,595.701v-13.748l0,0V595.701z M73.958,565.866l-42.803,13.748
          l13.748-42.874l158.457-158.386l29.055,29.055L73.958,565.866z M410.005,473.244c0,2.268-0.78,3.827-2.268,5.386l-26.008,26.008
          c-3.047,3.047-8.433,3.047-10.701,0l-261.85-261c-1.559-1.559-2.268-3.047-2.268-5.386s0.78-3.827,2.268-5.386l26.787-26.787
          c1.559-1.559,3.047-2.268,5.386-2.268c2.268,0,3.827,0.78,5.386,2.268l261,261C409.225,468.638,410.005,470.976,410.005,473.244z
            M380.879,400.535L213.28,232.937l169.937-125.504l123.236,123.236L380.879,400.535z M582.918,207.709l-27.567,27.567
          c-1.559,1.559-3.827,1.559-5.386,0l-15.307-15.307l0,0L394.698,79.087l0,0l-15.307-15.307c-1.559-1.559-1.559-3.827,0-5.386
          l26.787-27.567c1.559-0.78,2.268-0.78,3.047-0.78s1.559,0,3.047,0.78l170.646,170.646
          C584.477,203.882,584.477,206.15,582.918,207.709z"/>
          </g>
          <g>
          </g
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          </svg>
          </span>
          <h1>${title}</h1>
        </div>
      </div>
    `

  }

  iframeExample(item) {
    const example = html`${item.example.map((item)=>html`<p class="example">${item}</p>`)}`;
    const data = html `${item.p.map((text,index)=>{
        if(index === 0 || index === 6){
          return html`<p class="ul">${text}</p>`
        }else{
          return html`<p class="li activeli">${text}</p>`
        }
      })
    }`;
    return html `
      <section class="bg-apple slide iframe" style="display:none">
        ${this.header(item.title)}
        <div class="wrap">
           <div class="code">
            <div class="exam">${example}</div>
            <div>${data}</div>
           </div>
           <div class="result">
            <iframe src="../iframe.html" frameborder="0"></iframe>
           </div>
        </div>
      </section>
    `
  }

  twoImages(item){
    return html`
    <section class="bg-apple slide aligncenter" style="display:none">
      ${this.header(item.title)}
      <div class="wrap">
           <div class="imgs">
              ${item.imgBlockLeft.map((img)=>html`<img src="${img}" alt="${img}"/>`)}
           </div>
           <div class="imgs">
              ${item.imgBlockRight.map((img)=>html`<img src="${img}" alt="${img}"/>`)}
           </div>
     </div>
    </section>
    `
  }



  intro(item){
   const titleh1 = html `${this.returnTitle(item.titleh1)}`;
   const titleh2 = html `${this.returnTitle(item.titleh2)}`;
   return html`
    <section class="bg-apple slide aligncenter" style="display:none">
      <div class="header block">
        <div class="title">
          <span class="circle">${item.number}</span>
          <h1>${titleh1}</h1>
          <h2>${titleh2}</h2>
        </div>
      </div>
      <div class="footer"></div>
    </section>`
  }

  gifDatacenter(item){
    return html`
    <section class="bg-apple slide iframe" style="display:none">
      ${this.header(item.title)}
      <div class="wrap">
        <div class="card flex">
          <div class="card-image"  style="height: 300px;">
            <img src="../images/code21.png" alt=""/>
          </div>
          <div class="card-image" style="height: 300px;">
            <img  src="../images/code3.gif" alt="img" class="noShadow"/>
            <img  src="../images/code1.gif" alt="img" class="noShadow"/>
          </div>
        </div>
        <div class="card flex column">
            <img  src="../images/code2.gif" alt="img" class="noShadow"/>
        </div>
      </div>
      <div class="footer color">
         <span>Fuente: "A night experimenting with Lit-HTML…" Lucca Mezzalira - https://medium.com/@lucamezzalira/a-night-experimenting-with-lit-html-585a8c69892a</span>
      </div>
      </section>
    `;
  }

  listItems(item){
    return html`
    <section class="bg-apple slide iframe" style="display:none">
      ${this.header(item.title)}
      <div class="wrap">
        <div class="card">
          <ul class="list">
          ${item.items.map((item)=>{
            return html`
            <li class="list-item">${item.li}
                <ul class="list-item-list">
                  ${item.items.map((item)=>html`<li class="list-item-list-sub">${item}</li>`)}
                </ul>
            </li>`
          })}
          </ul>
        </div>
      </div>
      </section>
    `;
  }

  render() {
    return html `
    <style>${this.constructor.shadyStyles}</style>
    <slot></slot>
    <main role="main">
      <article id="webslides"></article>
        <section class="bg-apple slide current">
          <div class="wrap">
          <div class="title">
          <span>
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 612.018 612.018"  xml:space="preserve">
          <g>
            <path d="M602.832,181.63L432.186,10.984c-12.26-12.26-32.882-12.26-45.142,0l-27.567,27.567c-12.26,12.26-12.26,32.882,0,45.142
              l3.827,3.827L193.367,213.024l-26.787-26.787c-13.748-13.748-37.488-13.748-51.307,0l-26.717,26.787
              c-6.874,6.874-10.701,16.087-10.701,25.228c0,9.921,3.827,18.354,10.701,25.228l94.11,94.11L21.942,518.386
              c-1.559,1.559-3.047,3.827-3.827,6.094L1.249,578.835c-2.268,9.213-1.559,17.575,3.047,22.961
              c2.268,3.047,7.654,8.433,17.575,8.433c3.827,0,7.654-0.78,12.26-2.268l51.307-16.087c2.268-0.78,3.827-1.559,6.094-3.827
              l160.724-160.724l98.008,98.008c6.874,6.874,16.087,10.701,25.228,10.701c9.921,0,18.354-3.827,25.228-10.701l26.787-26.787
              c6.874-6.874,10.701-16.087,10.701-25.228c0-9.921-3.827-18.354-10.701-25.228l-26.787-26.787l125.504-169.937l3.047,3.047
              c6.094,6.094,13.748,9.213,22.961,9.213c8.433,0,16.866-3.047,22.961-9.213l27.567-27.567
              C615.091,214.583,615.091,194.669,602.832,181.63z M21.942,595.701v-13.748l0,0V595.701z M73.958,565.866l-42.803,13.748
              l13.748-42.874l158.457-158.386l29.055,29.055L73.958,565.866z M410.005,473.244c0,2.268-0.78,3.827-2.268,5.386l-26.008,26.008
              c-3.047,3.047-8.433,3.047-10.701,0l-261.85-261c-1.559-1.559-2.268-3.047-2.268-5.386s0.78-3.827,2.268-5.386l26.787-26.787
              c1.559-1.559,3.047-2.268,5.386-2.268c2.268,0,3.827,0.78,5.386,2.268l261,261C409.225,468.638,410.005,470.976,410.005,473.244z
               M380.879,400.535L213.28,232.937l169.937-125.504l123.236,123.236L380.879,400.535z M582.918,207.709l-27.567,27.567
              c-1.559,1.559-3.827,1.559-5.386,0l-15.307-15.307l0,0L394.698,79.087l0,0l-15.307-15.307c-1.559-1.559-1.559-3.827,0-5.386
              l26.787-27.567c1.559-0.78,2.268-0.78,3.047-0.78s1.559,0,3.047,0.78l170.646,170.646
              C584.477,203.882,584.477,206.15,582.918,207.709z"/>
              </g>
              <g>
              </g
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
          </svg>

          </span>
                      <h1>Introducción a  <strong>lit-html</strong> y <strong>LitElement</strong></h1>
                      <h2></h2>
          </div>
          </div>
          <div class="footer"></div>
        </section>
        <section class="bg-apple slide " style="display:none">
            <div class="header">
              <div class="title">
              <span class="circle">
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 368 368" style="enable-background:new 0 0 368 368;" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M261.336,226.04c-3.296-2.952-8.36-2.664-11.296,0.624C233.352,245.312,209.288,256,184,256
				c-25.28,0-49.352-10.688-66.04-29.336c-2.952-3.288-8-3.576-11.296-0.624c-3.296,2.944-3.568,8-0.624,11.296
				C125.76,259.368,154.176,272,184,272c29.832,0,58.248-12.64,77.96-34.664C264.904,234.04,264.624,228.984,261.336,226.04z"/>
			<path d="M184,0C82.544,0,0,82.544,0,184s82.544,184,184,184s184-82.544,184-184S285.456,0,184,0z M184,352
				c-92.64,0-168-75.36-168-168S91.36,16,184,16s168,75.36,168,168S276.64,352,184,352z"/>
			<path d="M248,128c-22.056,0-40,17.944-40,40c0,4.416,3.584,8,8,8c4.416,0,8-3.584,8-8c0-13.232,10.768-24,24-24s24,10.768,24,24
				c0,4.416,3.584,8,8,8c4.416,0,8-3.584,8-8C288,145.944,270.056,128,248,128z"/>
			<path d="M144,168c0,4.416,3.584,8,8,8s8-3.584,8-8c0-22.056-17.944-40-40-40c-22.056,0-40,17.944-40,40c0,4.416,3.584,8,8,8
				s8-3.584,8-8c0-13.232,10.768-24,24-24S144,154.768,144,168z"/>
		</g>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
              </span>
                <h2>Bienvenidos</h2>
              </div>
            </div>
            <div class="wrap present">
            <div class="card">
            <div class="card-header">
              <div class="info">
                <img src="data:image/png;base64,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" alt="User image" class="card-image">
              <h2 class="card-title">David Iglesias</h2>
              </div>
              <div class="social">
                <a href="https://www.instagram.com/codeerick/" target="_blank" class="icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/codeerick/" target="_blank"class="icon">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.instagram.com/codeerick/" target="_blank" class="icon">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">
              Arquitecto front end en BBVA Next.
              Llevo trabajando 17 años en Informática, empece trabajando en Sistemas, para luego pasarme al Back y terminar en el mundo Front, me apasiona la tecnología, y poder realizar cosas que nos acerquen a la ciencia ficción.
              @davidigza
              </p>
            </div>
          </div>
          <div class="card">
          <div class="card-header">
            <div class="info">
              <img src="https://lh3.googleusercontent.com/a-/AAuE7mDDXX044Mj-A9hglHsh7r-MYEiWWKTYSDeNyHsg=s46-c-k-no" alt="User image" class="card-image">
            <h2 class="card-title">Julio Castillo</h2>
            </div>
            <div class="social">
              <a href="https://www.instagram.com/codeerick/" target="_blank" class="icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/codeerick/" target="_blank"class="icon">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.instagram.com/codeerick/" target="_blank" class="icon">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">
            Arquitecto front end en BBVA Next.
            A lo largo de 2 décadas trabajando en Informática he podido experimentar con una gran cantidad y variedad de tecnologías y lenguajes, pero desde hace 8 que tengo mi corazón puesto en el desarrollo web. Conocí a Polymer cuando todavía no era 1.0 y, desde ese momento, me enamoré de él y su filosofía 'use the platform'
            @julcasans
            </p>
          </div>
        </div>
            </div>
            <div class="footer color"></div>
        </section>
        ${this.intro(this.item1)}
        ${this.listCenter(this.item)}
        ${this.listCenter(this.item2)}
        ${this.preCodeCenter(this.item3)}
        ${this.preCodeCenter(this.item4)}
        ${this.preCodeCenter(this.item5)}
        ${this.gridLayout(this.item6)}
        ${this.preCodeCenter(this.item7)}
        ${this.preCodeCenter(this.item8)}
        ${this.preCodeCenter(this.item9)}
        ${this.preCodeCenter(this.item10)}
        ${this.preCodeCenter(this.item11)}
        ${this.listCenter(this.item12)}
        ${this.codeExample(this.item15)}
        ${this.codeExample2(this.item16)}
        ${this.listCenter(this.item13)}
        ${this.iframeExample(this.item14)}
        ${this.intro(this.item18)}
        ${this.preCodeCenter(this.item17)}
        ${this.twoImages(this.item19)}
        ${this.listItems( this.item21)}
        ${this.listItems(this.item20)}
        ${this.preCodeCenter(this.item22)}
        ${this.preCodeCenter(this.item23)}
        ${this.gifDatacenter(this.item27)}
        ${this.preCodeCenter(this.item24)}
        ${this.preCodeCenter(this.item25)}
        ${this.preCodeCenter(this.item26)}
        ${this.preCodeCenter(this.item28)}
        ${this.preCodeCenter(this.item29)}
        ${this.preCodeCenter(this.item35)}
        ${this.listCenter(this.item31)}
        ${this.listCenter(this.item34)}
        ${this.listCenter(this.item32)}
      </article>
    </main>
    `;
  }
}

window.customElements.define('ppt-element', PptElement);
