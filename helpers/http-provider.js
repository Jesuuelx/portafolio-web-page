export const getImages = async () => {
  try {
    const resp = await fetch("../images.json");

    if (!resp.ok) throw "No se pudo realizar la peticion";

    const data = await resp.json();

    return data;
  } catch (err) {
    throw err;
  }
};
