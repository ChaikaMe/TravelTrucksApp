export default function favouriteChanger(id) {
  const camperId = id;
  const favCampersIds =
    JSON.parse(localStorage.getItem("favouriteCampers")) || [];

  if (favCampersIds.includes(camperId)) {
    const temp = favCampersIds.filter((id) => id !== camperId);
    localStorage.setItem("favouriteCampers", JSON.stringify(temp));
  } else {
    favCampersIds.push(camperId);
    localStorage.setItem("favouriteCampers", JSON.stringify(favCampersIds));
  }
}
