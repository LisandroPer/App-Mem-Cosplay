(this.webpackJsonpmemcosplayapp=this.webpackJsonpmemcosplayapp||[]).push([[0],{70:function(t,e,c){},71:function(t,e,c){"use strict";c.r(e);var a=c(5),n=c.n(a),r=c(38),i=c.n(r),s=(c(45),c(46),c(17)),o=c(40),l=c(19),d=c(10),u=c(3),j=Object(a.createContext)(),b=function(t){var e=t.children,c=Object(a.useState)([]),n=Object(d.a)(c,2),r=n[0],i=n[1];return Object(u.jsx)(j.Provider,{value:{cartList:r,addToCart:function(t,e){var c=r.find((function(e){return e.idProducto===t.id}));void 0===c?i([].concat(Object(l.a)(r),[{idProducto:t.id,imgProducto:t.imgProduct,titleProducto:t.title,precioProducto:t.price,productoIncluye:t.includes,cantidadProducto:e,precioProductos:t.price*e}])):(c.cantidadProducto+=e,c.precioProductos+=t.price*e,i(Object(l.a)(r)))},removeList:function(){i([])},deleteItem:function(t){var e=r.filter((function(e){return e.idProducto!=t}));i(e)},calcularItemQty:function(){return r.map((function(t){return t.cantidadProducto})).reduce((function(t,e){return t+e}),0)},calcularPrecioTotal:function(){return r.map((function(t){return t.precioProductos})).reduce((function(t,e){return t+e}),0)}},children:e})};function m(){var t=Object(a.useContext)(j);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"badge bg-secondary",children:t.calcularItemQty()}),Object(u.jsx)(o.a,{})]})}function O(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",id:"animacionNav",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)(s.b,{to:"/cart",className:"navbar-brand","aria-current":"page",children:Object(u.jsx)(m,{})}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(u.jsxs)("div",{className:"navbar-nav mx-auto",children:[Object(u.jsx)(s.b,{to:"/",className:"nav-link active","aria-current":"page",children:"Home"}),Object(u.jsx)(s.b,{to:"/category/E0OaebWRZ9jdtQs0rIv2",className:"nav-link active","aria-current":"page",children:"Disfraces"}),Object(u.jsx)(s.b,{to:"/category/CdBGS12WOLlBR5jftKzY",className:"nav-link active","aria-current":"page",children:"Cosplays"}),Object(u.jsx)(s.b,{to:"/category/G8Ru7S1tv2OWt2iOwM9Q",className:"nav-link active","aria-current":"page",children:"Accesorios"})]})})]})})})}function x(t){var e=t.imgProduct,c=t.title,a=t.id;return Object(u.jsx)("div",{className:"card-group",children:Object(u.jsxs)("div",{className:"card-primaria justify-content-center",style:{width:"18rem"},children:[Object(u.jsx)("img",{src:e,class:"card-img-top",alt:"..."}),Object(u.jsxs)("div",{className:"card-body justify-content-center",children:[Object(u.jsx)("p",{className:"card-text",children:c}),Object(u.jsx)("div",{className:"card-button justify-content-center align-items-end",children:Object(u.jsx)(s.b,{to:"/producto/".concat(a),type:"button",className:"btn btn-primary col-12",children:"Ver detalles"})})]})]})})}function A(t){var e=t.products;return Object(u.jsx)(u.Fragment,{children:e.length>0?e.map((function(t){return Object(u.jsx)(x,{title:t.title,imgProduct:t.imgProduct,id:t.id})})):Object(u.jsx)("h3",{children:"Cargando..."})})}var g=c(11),p=c(0),h=c.n(p),f=c(26),v=c(4),N=c(18),I=c(21),E=c(39),R=Object(E.a)({apiKey:"AIzaSyDCaPzVRnnxcTW8NwDpfzMloqPh4V8HEEs",authDomain:"mem-cosplay-app.firebaseapp.com",projectId:"mem-cosplay-app",storageBucket:"mem-cosplay-app.appspot.com",messagingSenderId:"914721153354",appId:"1:914721153354:web:bc8c944840d99b7a7121b3"}),y=Object(N.d)(R);function P(){return(P=Object(v.a)(h.a.mark((function t(e){var c,a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e?Object(I.h)(Object(I.a)(y,"dataProducts"),Object(I.k)("idProduct","==",e)):Object(I.h)(Object(I.a)(y,"dataProducts"),Object(I.g)("title")),t.next=3,Object(I.d)(c);case 3:return a=t.sent,n=a.docs.map((function(t){return Object(f.a)({id:t.id},t.data())})),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var C=function(){var t=Object(v.a)(h.a.mark((function t(e){var c,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(N.b)(y,"dataProducts",e),t.next=3,Object(N.c)(c);case 3:if(!(a=t.sent).exists()){t.next=8;break}return t.abrupt("return",Object(f.a)({id:e},a.data()));case 8:console.log("no se encontr\xf3 el producto");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function k(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),c=e[0],n=e[1],r=Object(g.g)().idCategory;return Object(a.useEffect)((function(){(function(t){return P.apply(this,arguments)})(r).then((function(t){return n(t)})).catch((function(t){return console.log(t)}))}),[r]),Object(a.useEffect)((function(){return function(){n([])}}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{class:"card-group justify-content-center",children:Object(u.jsx)(A,{products:c})})})}var w=function(t){var e=t.stock,c=void 0===e?0:e,n=t.initial,r=void 0===n?1:n,i=t.onAdd,s=Object(a.useState)(0),o=Object(d.a)(s,2),l=o[0],b=o[1];return Object(a.useContext)(j),Object(a.useEffect)((function(){b(r)}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"row justify-content-center align-items",children:[Object(u.jsx)("button",{type:"button",className:"btn-btn1 btn-primary col-3",onClick:function(){l<c&&b(l+1)},children:"+"}),Object(u.jsx)("button",{type:"button",className:"btn-btn1 btn-primary col-3",onClick:function(){l>r+1&&b(l-1)},children:"-"}),Object(u.jsx)("div",{className:"justify-content-center align-items",children:Object(u.jsx)("h3",{className:"contador col-1",children:l})}),c&&l?Object(u.jsx)("button",{type:"button",className:"btn-btn2 btn-success col-3",onClick:function(){return i(l)},children:"Agregar al carrito"}):Object(u.jsx)("button",{type:"button",className:"btn-btn2 btn-light col-3",disabled:!0,children:"Agregar al carrito"})]})})};function z(t){var e=t.producto,c=Object(a.useState)(0),n=Object(d.a)(c,2),r=n[0],i=n[1],o=Object(a.useContext)(j);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"card-secundaria mb-3",children:Object(u.jsxs)("div",{className:"row g-0",children:[Object(u.jsx)("div",{className:"col-md-4",children:Object(u.jsx)("img",{src:e.imgProduct,className:"img-fluid rounded-start",style:{maxHeight:"30rem"},alt:e.id})}),Object(u.jsx)("div",{className:"col-md-8",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:e.title}),Object(u.jsxs)("p",{className:"card-text",children:["Incluye: ",e.includes]}),Object(u.jsxs)("p",{className:"card-text",children:["Precio: ",e.price]}),Object(u.jsxs)("p",{className:"card-text",children:["Cantidad en stock: ",e.stock]})]})}),Object(u.jsx)("div",{className:"row justify-content-center align-items-center",children:0===r?Object(u.jsx)(w,{stock:e.stock,initial:r,onAdd:function(t){alert("Acabas de seleccionar "+t+" items de"+e.title),i(t),o.addToCart(e,t),console.log("Qty"+t),console.log("Producto:"+e)}}):Object(u.jsx)(s.b,{to:"/cart",button:!0,type:"button",className:"btn btn-danger col-3",children:"Ir al carrito"})})]})})})}function Q(){var t=Object(a.useState)({}),e=Object(d.a)(t,2),c=e[0],n=e[1],r=Object(g.g)().idProducto;return Object(a.useEffect)((function(){C(r).then((function(t){return n(t)})).catch((function(t){return alert(t)}))}),[]),Object(u.jsx)(z,{producto:c})}var S=c.p+"static/media/fondoComicM.a5d487ba.jpg",L=c(9);var D=function(t){var e=t.handelSubmit,c=Object(a.useState)({name:"",lastName:"",cel:"",mail:""}),n=Object(d.a)(c,2),r=n[0],i=n[1];function s(t){var e=t.target,c=e.name,a=e.value;i(Object(f.a)(Object(f.a)({},r),{},Object(L.a)({},c,a))),console.log(r)}return Object(a.useContext)(j),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{class:"form-floating ",children:[Object(u.jsx)("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com",name:"mail",onChange:s}),Object(u.jsx)("label",{for:"floatingInput",children:"Ingrese su Email"}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("textarea",{class:"form-control",placeholder:"Ingrese su celular",id:"floatingTextarea",name:"cel",onChange:s}),Object(u.jsx)("label",{for:"floatingTextarea",children:"Ingrese su celular"})]}),Object(u.jsxs)("div",{className:"row form-1 justify-content-center",children:[Object(u.jsx)("div",{className:"col-5",children:Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"First name","aria-label":"First name",id:"userName",name:"name",onChange:s})}),Object(u.jsx)("div",{className:"col-5",children:Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Last name","aria-label":"Last name",id:"userLastName",name:"lastName",onChange:s})})]}),Object(u.jsx)("button",{type:"button-btnform",id:"btn-finalizar",class:"btn btn-success",onSubmit:function(){return e(r)},children:"A\xd1ADIR INFORMACI\xd3N"})]})})};function W(){var t=Object(a.useContext)(j);console.log(t);var e=Object(a.useState)(!1),c=Object(d.a)(e,2),n=c[0],r=c[1];var i=Object(a.useState)([]),s=Object(d.a)(i,2),o=s[0],l=s[1];return Object(u.jsxs)(u.Fragment,{children:[t.cartList.length>0&&Object(u.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(u.jsxs)("div",{className:"row justify-content: flex-end align-items-center",style:{backgroundColor:"pink"},children:[Object(u.jsxs)("h2",{className:"col-3",children:["Precio total: ",Object(u.jsx)("span",{class:"badge bg-secondary col-4",children:t.calcularPrecioTotal()})]}),Object(u.jsx)("button",{onClick:t.removeList,type:"button",className:"btn btn-danger col-4",children:"Vaciar carrito."}),Object(u.jsx)("button",{type:"button",className:"btn btn-success col-3",onClick:function(){r(!n),alert("Para realizar la compra debe ingresar los datos solicitados en el formulario")},children:"Comprar todo"})]})}),n&&Object(u.jsx)(D,{handelSubmit:function(t){l(t),console.log(o)}}),t.cartList.length>0?t.cartList.map((function(e){return Object(u.jsxs)("div",{className:"card text-dark bg-light mb-3",children:[Object(u.jsx)("img",{src:e.imgProducto,className:"card-img-top",style:{maxWidth:"20rem"},alt:e.idProducto}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:e.titleProducto}),Object(u.jsxs)("p",{className:"card-text",children:["INCLUYE: ",e.productoIncluye]}),Object(u.jsxs)("p",{className:"card-text",children:["Precio unitario: ",e.precioProducto]}),Object(u.jsxs)("p",{className:"card-text",children:["Cantidad seleccionada: ",e.cantidadProducto]}),Object(u.jsxs)("p",{className:"card-text",children:["Precio total: ",e.precioProductos]}),Object(u.jsx)("button",{onClick:function(){return t.deleteItem(e.idProducto)},type:"button",className:"btn btn-danger col-4",children:"Remover producto del carrito"})]})]})})):Object(u.jsxs)("div",{class:"card bg-dark text-white",children:[Object(u.jsx)("img",{src:S,class:"card-img",style:{maxWidth:"200rem"},alt:"Imagen de carrito vac\xedo"}),Object(u.jsx)("div",{class:"card-img-overlay justify-content-center align-items-center",children:Object(u.jsx)("h1",{class:"card-title-carrito  justify-content-center",children:Object(u.jsx)("b",{children:"Todav\xeda no tienes productos en tu carrito."})})})]})]})}c(70);function B(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"color-encabezado justify-content-center",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"Mem cosplay",id:"imagenLogo"}),Object(u.jsx)("h1",{id:"colorEncabezado",className:"animacionEncabezado",children:"MEM Cosplay"}),Object(u.jsx)("h2",{id:"colorEncabezadoH2",className:"animacionEncabezado",children:"La mejor calidad"})]})})})})}var F=function(){return Object(u.jsx)(b,{children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(B,{}),Object(u.jsx)(O,{}),Object(u.jsxs)(g.c,{children:[Object(u.jsx)(g.a,{path:"/",element:Object(u.jsx)(k,{})}),Object(u.jsx)(g.a,{path:"/category/:idCategory",element:Object(u.jsx)(k,{})}),Object(u.jsx)(g.a,{path:"/detalles",element:Object(u.jsx)(z,{})}),Object(u.jsx)(g.a,{path:"/producto/:idProducto",element:Object(u.jsx)(Q,{})}),Object(u.jsx)(g.a,{path:"/cart",element:Object(u.jsx)(W,{})})]})]})})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.1b67c324.chunk.js.map