const productos = [
    { nombre: "Guitarra Acústica", categoria: "guitarras" },
    { nombre: "Guitarra Eléctrica", categoria: "guitarras" },
    { nombre: "Piano Digital", categoria: "pianos" },
    { nombre: "Batería Electrónica", categoria: "baterias" },
    { nombre: "Cajón Peruano", categoria: "baterias" }
  ];
  
  function filtrar(categoria) {
    const contenedor = document.getElementById("contenedor-productos");
    contenedor.innerHTML = "";
  
    productos.filter(p => p.categoria === categoria).forEach(p => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${p.nombre}</strong><br><small>Categoría: ${p.categoria}</small>`;
      contenedor.appendChild(div);
    });
  }